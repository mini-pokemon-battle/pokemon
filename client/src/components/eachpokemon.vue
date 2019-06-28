<template>
  <div>
      <img :src="pkm.image[0].cover" fluid alt="Fluid image"  style="width: 130px" height=" 110px"/>
      <h5>{{pkm.name}}</h5>
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
