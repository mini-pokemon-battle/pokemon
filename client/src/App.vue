<template>
  <div id="app">
    <div class="container">
      <div class="form-input">
        <userInput/>
      </div>
      <div class="rooms">
        <roomlist/>
      </div>
      <pokemonlist/>
      <playing/>
      <winner/>
    </div>
  </div>
</template>

<script>
import userInput from "@/components/userInput.vue";
import roomlist from "@/components/roomlist.vue";
import pokemonlist from "@/components/pokemonlist.vue";
import playing from "@/components/playing.vue";
import winner from "@/components/winner.vue";

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
      loginPage: ""
    };
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
  width: 20rem;
}

.rooms {
  width: 30rem;
}
</style>
