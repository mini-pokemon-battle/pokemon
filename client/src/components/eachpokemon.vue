<template>
  <div>
    <span>
      <!-- <vue-select-image :dataImages="dataImages"
                  @onselectimage="onSelectImage">
      </vue-select-image>-->
      <b-img src="https://i.imgur.com/jzXM4lA.gif" fluid alt="Fluid image"></b-img>
      <b-img src="https://i.imgur.com/jzXM4lA.gif" fluid alt="Fluid image"></b-img>
      <b-img src="https://i.imgur.com/jzXM4lA.gif" fluid alt="Fluid image"></b-img>
    </span>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      dataImages: ""
    };
  },
  methods: {
    onSelectImage() {
      console.log(this.dataImages);
    }
  }
};
</script>

<style>
</style>
