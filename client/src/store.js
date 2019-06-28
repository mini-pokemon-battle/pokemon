import Vue from 'vue'
import Vuex from 'vuex'
import db from './config/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: ''
  },
  mutations: {
    ROOMLIST(state, data) {
      state.rooms = data
    },
    CURRENTROOM(state, data) {
      state.currentRoom = data
    }
  },
  actions: {
    CREATEROOM(context, data) {
      db.collection('Room')
        .add(data)
        .then((doc) => {
          context.dispatch('GETCURRENTROOM', doc.id)
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
          context.commit('CURRENTROOM', {id: doc.id, ...doc.data()})
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
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GAMEFINISH(context, id){
      db.collection('Room')
      .doc(id)
      .update({
        status: 'start',
        players: context.state.currentRoom.players
      })
      .then(() => {
        context.dispatch('GETCURRENTROOM', id)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
})
