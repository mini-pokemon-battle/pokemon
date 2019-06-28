<template>
  <div>
    <b-card
      title="You Win"
      :img-src="win.image[0].idle"
      img-alt="Image"
      img-top
      style="max-width: 20rem;"
      class="mb-2"
    >
    </b-card>

    <input type="button" value="Done" @click="gameFinish">
  </div>
</template>

<script>
export default {
  props: ["win"],
  methods: {
    gameFinish() {
      this.$store.dispatch("GAMEFINISH", this.currentroom.id);
    }
  },
};
</script>

<style>
</style>
