import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: '',
    pokemonlists: [],
    playerstatus: '',
  },
  mutations: {
    ROOMLIST(state, data) {
      state.rooms = data
    },
    POKEMONLIST(state, data) {
      state.pokemonlists = data
    },
    CURRENTROOM(state, data) {
      state.currentRoom = data
    },
    CURRENTPKM(state, data) {
      state.currentRoom = data
    }
  },
  actions: {
    UPDATEPKM(context, data) {
      db.collection('Room')
        .doc(context.state.currentRoom.id)
        .update(data)
        .then(() => {
          context.dispatch('CHECKROOM', context.state.currentRoom.id)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    CREATEROOM(context, data) {
      db.collection('Room')
        .add(data)
        .then((doc) => {
          context.dispatch('GETCURRENTROOM', doc.id)
          context.state.playerstatus = 'player 1'
        })
        .catch((err) => {
          console.log(err)
        });
    },
    GETCURRENTROOM(context, id) {
      db.collection('Room')
        .doc(id)
        .get()
        .then((doc) => {
          context.commit('CURRENTROOM', {
            id: doc.id,
            ...doc.data()
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GETALLROOMS(context) {
      db.collection('Room')
        .onSnapshot(querySnapshot => {
          var room = []
          querySnapshot.forEach(function (doc) {
            room.push({
              id: doc.id,
              ...doc.data()
            })
          })
          context.commit('ROOMLIST', room)
        })
    },
    CHECKROOM(context) {
      db.collection("Room").doc(context.state.currentRoom.id)
        .onSnapshot((doc) => {
          context.dispatch('GETCURRENTROOM', doc.id)
        });

    },
    GETALLPOKEMON(context) {
      db.collection('PokemonList')
        .onSnapshot(querySnapshot => {
          var pokemon = []
          querySnapshot.forEach(function (doc) {
            pokemon.push({
              id: doc.id,
              ...doc.data()
            })
          })
          context.commit('POKEMONLIST', pokemon)
        })
    },
    UPDATEROOM(context, id) {
      context.state.currentRoom.players.push({
        name: localStorage.name,
        status: 'player 2'
      })
      db.collection('Room')
        .doc(id)
        .update({
          status: 'start',
          players: context.state.currentRoom.players
        })
        .then(() => {
          context.dispatch('GETCURRENTROOM', id)
          context.state.playerstatus = 'player 2'
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GAMEFINISH(context, id) {
      localStorage.removeItem('idroom')
      // db.collection('Room')
      //   .doc(id)
      //   .update({
      //     status: 'start',
      //     players: context.state.currentRoom.players
      //   })
      //   .then(() => {
      //     context.dispatch('GETCURRENTROOM', id)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }
  }
})
