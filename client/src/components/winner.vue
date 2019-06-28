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
    <p>{{win.image[0].idle}}</p>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['win']
};
</script>

<style>
</style>
