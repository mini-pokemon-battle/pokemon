import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: {},
    pokemonlists: [],
    playerstatus: '',
    atkcoince: ''
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
          // context.dispatch('CHECKROOM', context.state.currentRoom.id)
          console.log('update')
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
    // CHECKROOM(context, id) {
    //   db.collection("Room").doc(id)
    //     .onSnapshot((doc) => {
    //       console.log('oncheckroom')
    //       context.dispatch('GETCURRENTROOM', doc.id)
    //     });
    // },
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
    ATTACK(context, data) {
      if (context.state.playerstatus == 'player 1') {
        context.state.currentRoom.pokemon2.health -= data.point
        db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            ...context.state.currentRoom
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
            context.dispatch('ATKFALSE')
          })
          .catch((err) => {
            console.log(err)
          })
      }
      if (context.state.playerstatus == 'player 2') {
        context.state.currentRoom.pokemon1.health -= data.point
        db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            ...context.state.currentRoom
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
            context.dispatch('ATKFALSE')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    ATTACKSTATUS(context){
      if (context.state.playerstatus == 'player 1') {
        db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            atk1: true
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      if (context.state.playerstatus == 'player 2') {
        db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            atk2: true
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    ATKFALSE(){
      db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            atk1: false,
            atk2: false
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
          })
          .catch((err) => {
            console.log(err)
          })
    },
    GAMEFINISH(context, id) {
      context.state.currentRoom = ""
      // db.collection('Room')
      //   .doc(id)
      //   .delete()
    }
  }
})
