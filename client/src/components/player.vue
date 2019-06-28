<template>
  <div class="p-5" >
    <div v-if="player == 'player 1'" style="display: flex; margin-left: 160px">
      <div>
        <div>
          <img
            :src="pkm.pkm1.image[0].idle"
            alt
            style="width: 250px;-webkit-transform: scaleX(-1);transform: scaleX(-1);"
            height="250px"
          >
        </div>
        <div>
          <div style="margin-top: 10px">
            <h3><b>{{pkm.pkm1.name}}</b></h3>
            <h4><b>{{pkm.pkm1.health}}</b></h4>
          </div>
          <div v-for="(atk, i) in pkm.pkm1.attack" :key="i">
            <button @click="attack(atk)" class="btn btn-primary" style="width: 200px ; margin-top: 5px">{{atk.name}}</button>
          </div>
        </div>
      </div>
      <div>
        <div style="margin-left: 200px">
          <img :src="pkm.pkm2.image[0].idle" alt style="width: 250px" height="250px">
          <div style="margin-top: 10px">
            <h3><b>{{pkm.pkm2.name}}</b></h3>
            <h4><b>{{pkm.pkm2.health}}</b></h4>
          </div>
        </div>
      </div>
    </div>

    <div v-if="player == 'player 2'"  style="display: flex; margin-left: 160px">
      <div>
        <div>
          <img
            :src="pkm.pkm1.image[0].idle"
            alt
            style="width: 250px;-webkit-transform: scaleX(-1);transform: scaleX(-1);"
            height="250px"
          >
          <div style="margin-top: 10px">
            <h3><b>{{pkm.pkm1.name}}</b></h3>
            <h4><b>{{pkm.pkm1.health}}</b></h4>
          </div>
        </div>
      </div>
      <div  style="margin-left: 200px">
        <div>
          <img :src="pkm.pkm2.image[0].idle" alt style="width: 250px" height="250px">
        </div>
        <div>
          <div style="margin-top: 10px">
            <h3><b>{{pkm.pkm2.name}}</b></h3>
            <h4><b>{{pkm.pkm2.health}}</b></h4>
          </div>
          <div v-for="(atk, i) in pkm.pkm2.attack" :key="i">
            <button @click="attack(atk)" class="btn btn-primary" style="width: 200px ; margin-top: 5px">{{atk.name}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pkm"],
  data() {
    return {
      speed1: 0,
      speed2: 0,
      atkchoice1: "",
      atkchoice2: "",
      victory: false,
      winner: ""
    }
  },
  methods: {
    attack(atkcoince) {
      this.$store.state.atkcoice = atkcoince
      // this.$store.dispatch('ATTACK', atkcoince)
      this.$store.dispatch('ATTACKSTATUS')
    },
  },
  computed: {
    player() {
      return this.$store.state.playerstatus;
    }
  }
};
</script>
<style>
.p-5 {
  color: white;
}
</style>
