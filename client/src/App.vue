<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center form-input">
          <userInput/>
        </div>
      </div>
      <div class="row border">
        <div class="col d-flex justify-content-center">
          <roomlist/>
        </div>
      </div>
      <div class="row border">
        <div class="col d-flex justify-content-center">
          <pokemonlist/>
        </div>
      </div>
      <div class="row border">
        <div class="col d-flex justify-content-center">
          <playing/>
          <playing/>
        </div>
      </div>
      <div class="row border">
        <div class="col d-flex justify-content-center">
      <winner/>
        </div>
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
  width: 40rem;
  /* margin-top: 10rem; */
    
}

</style>
