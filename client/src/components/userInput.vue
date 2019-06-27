<template>
    <div>
        <div>
            <form @submit.prevent='signUp' class="d-flex input">
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
        signUp(){
            
        }
    }
}
</script>

<style>
    .input{
        margin-top: 10rem;
    }
</style>
