<template>
  <div>
    <div>
      <b-button variant="success" v-b-modal.modal-prevent-closing>Create Room</b-button>
        <eachroom/>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="New Room"
      @show="resetModal"
      @hidden="resetModal"
      @ok="createRoom"
    >
      <form>
        <b-form-input id="name-input" v-model="roomname"></b-form-input>
      </form>
    </b-modal>
  </div>
</template>

<script>
import eachroom from "@/components/eachroom.vue";
export default {
  name: "roomlist",
  components: {
    eachroom
  },
  data() {
    return {
      roomname: ""
    };
  },
  methods: {
    createRoom() {
      let data = {
        name: this.roomname,
        players: [
          {
            name: localStorage.name,
            status: "player 1"
          }
        ],
        status: "pending",
        pokemons: []
      };
      this.$store.dispatch("CREATEROOM", data);
      this.roomname = "";
      this.$emit('createdroom', true)
    },
    resetModal() {
      this.roomname = "";
    }
  }
};
</script>

<style>

</style>
