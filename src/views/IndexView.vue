<template>

    <Sort v-if="!sorted"/>

</template>

<script>
import {defineComponent} from 'vue'
import Sort from "@/components/Sort.vue";

export default defineComponent({
    name: "IndexView",
    components: {Sort},
    data() {
        return {
            sorted: false
        }
    }
})
</script>

<style scoped>

</style>