import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: {
      pokemon1: {
        name: 'Charizard',
        health: 100,
        attack: [{
            name: 'ember',
            point: 20
          },
          {
            name: 'dragon rage',
            point: 17
          },
          {
            name: 'flamethrower',
            point: 47
          },
          {
            name: 'inverno',
            point: 62
          }
        ],
        image: [{
          cover: 'https://vignette.wikia.nocookie.net/pokemon/images/1/1f/Charizard_BW.gif/revision/latest?cb=20120627233613',
          attack: [
            'https://vignette.wikia.nocookie.net/pokemon/images/c/cc/Charizard-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160626213652',
            'https://vignette.wikia.nocookie.net/pokemon/images/8/8a/Charizard-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160626213751',
            'https://vignette.wikia.nocookie.net/pokemon/images/2/29/Charizard-AttackAnimation-XY-4.gif/revision/latest/scale-to-width-down/180?cb=20160626213828'
          ],
          idle: 'https://vignette.wikia.nocookie.net/pokemon/images/7/74/Charizard_XY.gif/revision/latest?cb=20140319080812'

        }]
      },
      pokemon2: {
        name: 'Gengar',
        health: 180,
        attack: [{
            name: 'curse',
            point: 12
          },
          {
            name: 'sucker punch',
            point: 22
          },
          {
            name: 'dream eater',
            point: 39
          },
          {
            name: 'dark pulse',
            point: 34
          }
        ],
        image: [{
          cover: 'https://vignette.wikia.nocookie.net/pokemon/images/2/23/E_094_front.gif/revision/latest?cb=20120626211420',
          attack: [
            'https://vignette.wikia.nocookie.net/pokemon/images/3/3e/Gengar_AttackAnimation_1_XY.gif/revision/latest?cb=20140901010946',
            'https://vignette.wikia.nocookie.net/pokemon/images/6/63/Gengar_AttackAnimation_2_XY.gif/revision/latest?cb=20140901010945'
          ],
          idle: 'https://vignette.wikia.nocookie.net/pokemon/images/4/40/Gengar_XY.gif/revision/latest?cb=20140901010937'
        }]
      }
    },
    pokemonlists: [],
    playerstatus: 'player 1',
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
        context.currentRoom.pokemon2.health -= data.point
        db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            ...context.currentRoom
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      if (context.state.playerstatus == 'player 2') {
        context.currentRoom.pokemon1.health -= data.point
        db.collection('Room')
          .doc(context.state.currentRoom.id)
          .update({
            ...context.currentRoom
          })
          .then(() => {
            context.dispatch('GETCURRENTROOM', context.state.currentRoom.id)
          })
          .catch((err) => {
            console.log(err)
          })
      }
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
