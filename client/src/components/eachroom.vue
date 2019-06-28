<template>
  <div>
    <div class="rooms mt-4" v-for="(room, i) in listrooms" :key="i">
      <b-card bg-variant="warning" text-variant="black">
        <b-card-text>
          <h4>{{room.name}}</h4>
          <small v-for="(player, i) in room.players" :key="i">| {{player.status}} : {{player.name}} |</small>
        </b-card-text>
        <b-button href="#" variant="primary" @click="joinRoom(room.id)" v-if="room.status !== 'start'">Join</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listrooms() {
      return this.$store.state.rooms;
    },
    currentroom() {
      return this.$store.state.currentRoom;
    }
  },
  methods: {
    joinRoom(id) {
      console.log("dapat current room");
      this.$store.dispatch("GETCURRENTROOM", id);
      swal({
        title: "JOIN THIS ROOM?",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.joincurrentroom(id)
        }
      })
    },
    joincurrentroom(id) {
      console.log("masuk", this.currentroom.players);
      if (
        localStorage.name == this.currentroom.players[0].name ||
        this.currentroom.players.length == 2
      ) {
        swal({
          title: "Cannot join this room"
        })
      } else {
        this.$store.dispatch("UPDATEROOM", id);
      }
    }
  }
};
</script>

<style>
.rooms {
  width: 50rem;
}
</style>
