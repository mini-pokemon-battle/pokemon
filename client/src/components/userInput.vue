<template>
    <div>
        <div>
            <form @submit.prevent='login' class="d-flex input">
                  <b-form-input v-model="username" placeholder="Enter your name"></b-form-input>
                  <b-button type="submit" variant="danger">start </b-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userinput',
    data() {
        return {
            username : ''
        }
    },
    methods:{
    login() {
      localStorage.setItem("name", this.username);
      this.username = "";
      this.$emit('loginstatus', true)
    },
    }
}
</script>

<style>
    .input{
        margin-top: 10rem;
    }
</style>
