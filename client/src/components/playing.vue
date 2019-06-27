<template>
    <div class="d-flex battle">
        <player/>
        <player />
    </div>
</template>

<script>
import player from '@/components/player.vue'

export default {
    name: 'playing',
    components: {
        player
    }
}
</script>

<style>

</style>
