<template>
  <div>
    <player :pkm="pokemon"/>
  </div>
</template>

<script>
import player from "@/components/player.vue";

export default {
  name: "playing",
  components: {
    player
  },
  computed: {
    pokemon() {
      return {
        pkm1: this.$store.state.currentRoom.pokemon1,
        pkm2: this.$store.state.currentRoom.pokemon2
      }
    }
  }
};
</script>

<style>
</style>
