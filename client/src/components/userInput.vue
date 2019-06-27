<template>
    <div>
        <div>
            <form @submit.prevent='signUp'>
                  <b-form-input v-model="username" placeholder="Enter your name"></b-form-input>
                  <b-button type="submit" variant="danger">sign up</b-button>
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
    
</style>
