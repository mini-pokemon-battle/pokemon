<template>
  <div>
    <span>
      <b-img :src="pkm.image[0].cover" fluid alt="Fluid image"></b-img>
      <h5>{{pkm.name}}</h5>
    </span>
  </div>
</template>


<script>
export default {
  props: ['pkm'],
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
</style>
