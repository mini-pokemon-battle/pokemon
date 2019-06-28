<template>
  <div class="container-fluid">
    <h2>Choose Your Pokemon</h2>
    <div class="d-flex row">
      <div v-for="(pkm, i) in pkmlist" :key="i" class="col-2">
        <eachpokemon :pkm="pkm"/>
        <button @click="choosepkm(pkm)">Choose {{pkm.name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import eachpokemon from "@/components/eachpokemon.vue";
export default {
  name: "pokemonlist",
  components: {
    eachpokemon
  },
  computed: {
    pkmlist() {
      return this.$store.state.pokemonlists;
    },
    playerstatus() {
      return this.$store.state.playerstatus;
    }
  },
  methods: {
    choosepkm(pkm) {
      console.log("cliked");
      if (this.playerstatus == "player 1") {
        this.$store.dispatch("UPDATEPKM", {
          name: localStorage.name,
          pokemon1: pkm
        });
      }
      if (this.playerstatus == "player 2") {
        this.$store.dispatch("UPDATEPKM", {
          name: localStorage.name,
          pokemon2: pkm
        });
      }
    }
  }
};
</script>

<style>
</style>
