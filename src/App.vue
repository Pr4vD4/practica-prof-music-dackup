<template>
    <IndexView/>
</template>

<script>

import IndexView from "@/views/IndexView.vue";

export default {
    name: 'App',
    components: {
        IndexView
    }
}
</script>

<style>
body {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
#app {
    height: 100%;
    width: 100%;
}
</style>
