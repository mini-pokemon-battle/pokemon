<template>
  <div class="container-fluid">
    <h2>Choose Your Pokemon</h2>
    <div class="d-flex row">
        <div v-for="(pkm, i) in pkmlist" :key="i" class="col-1">
          <eachpokemon :pkm="pkm" @click="choosepkm(pkm)"/>
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
    }
  },
  methods: {
      choosepkm(pkm){
          this.$store.dispatch("UPDATEPKM", 
          {
              name: localStorage.name,
              pokemon : pkm
          })
      }
  },
};
</script>

<style>
</style>
