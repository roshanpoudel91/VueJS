<script setup>
import {useStore} from 'vuex'
const store = useStore()
    function increment(){
        store.commit('increment')
        console.log(store.state.count)
        
    }
</script>
<template>
    <h1>Home View</h1>
    <p>Vuex Store</p>
    <button @click="increment">Increase</button>
    {{ store.state.count }}
</template>