<template>
  <div id="app">
    <div class="container">
      <div v-if="(roomstatus == 'pending' || roomstatus == '') && !createdRoom">
        <div class="row" v-if="!isLogin">
          <div class="col d-flex justify-content-center form-input">
            <userInput @loginstatus='loginstatus'/>
          </div>
        </div>
        <div class="row border" v-if="isLogin">
          <div class="col d-flex justify-content-center">
            <roomlist @createdroom="createdroom"/>
          </div>
        </div>
      </div>
      <div v-if="createdRoom">
        <h1>WAITING FOR PLAYER</h1>
      </div>
      <!-- <div v-if="roomstatus == 'start'"> -->
        <div>
        <h1>GAME START</h1>
        <div class="row border">
          <div class="col d-flex justify-content-center">
            <pokemonlist/>
          </div>
        </div>
        <div class="row border">
          <div class="col d-flex justify-content-center">
            <playing/>
          </div>
        </div>
        <div class="row border">
          <div class="col d-flex justify-content-center">
            <winner/>
          </div>
        </div>
        <input type="button" value="Done" @click="gameFinish">
      </div>
    </div>
  </div>
</template>

<script>
import userInput from "@/components/userInput.vue";
import roomlist from "@/components/roomlist.vue";
import pokemonlist from "@/components/pokemonlist.vue";
import playing from "@/components/playing.vue";
import winner from "@/components/winner.vue";
import db from "./config/firebase";

export default {
  name: "app",
  components: {
    userInput,
    roomlist,
    pokemonlist,
    playing,
    winner
  },
  data() {
    return {
      roomstatus: "",
      createdRoom: false,
      isLogin: false
    };
  },
  computed: {
    listrooms() {
      return this.$store.state.rooms;
    },
    listpokemon() {
      return this.$store.state.pokemonlists;
    },
    currentroom() {
      return this.$store.state.currentRoom;
    }
  },
  methods: {
    createdroom(data){
      this.createdRoom = data
    },
    loginstatus(data){
      this.isLogin = data
    },
    gameFinish() {
      this.$store.dispatch("GAMEFINISH", this.currentroom.id);
    },
  },
  watch: {
    currentroom() {
      console.log("current room berubah", this.currentroom.status);
      this.roomstatus = this.currentroom.status;
      if (this.currentroom.status == "start") {
        this.createdRoom = false;
      }
      if (this.currentroom !== "") {
        this.$store.dispatch("GETCURRENTROOM", this.currentroom.id);
      }
    }
  },
  mounted() {
    this.$store.dispatch("GETALLROOMS");
    this.$store.dispatch("GETALLPOKEMON");
    if (localStorage.name) {
      this.isLogin = true;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-input {
  width: 40rem;
  /* margin-top: 10rem; */
}
</style>
