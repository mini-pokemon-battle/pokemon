<template>
    <div>
        <h2>Choose Your Pokemon</h2>
        <eachpokemon />
    </div>
</template>

<script>
import eachpokemon from '@/components/eachpokemon.vue'
export default {
    name: 'pokemonlist',
    components: {
        eachpokemon
    }
}
</script>

<style>

</style>
