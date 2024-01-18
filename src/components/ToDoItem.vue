<script setup>
    const props = defineProps({
        data:Object
    })
</script>

<template>
    <li>{{  data.name}}</li>
</template>