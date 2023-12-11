<template>
    <CongratulationsMessage v-if="sorterGame.success"/>
    <div class="sorter container-fluid d-flex flex-column h-100 p-5" ref="sorter">

        <div class="drag-item wind flute" data-target="wind"></div>
        <div class="drag-item wind trumpet" data-target="wind"></div>

        <div class="drag-item stringed guitar" data-target="stringed"></div>
        <div class="drag-item stringed el-guitar" data-target="stringed"></div>
        <div class="drag-item stringed harp" data-target="stringed"></div>

        <div class="drag-item keyboardIns piano" data-target="keyboardIns"></div>

        <div class="drag-item percussion drum" data-target="percussion"></div>

        <div class="title text-center">
            Отсортируй все инструменты
        </div>
        <div class="d-flex game flex-column">
            <div class="d-flex h-50 w-100 mb-1">
                <div class="drag-container w-50 h-100 m-1" id="stringed">
                    <div class="h1 text-center">
                        Струнные
                    </div>
                </div>
                <div class="drag-container w-50 h-100 m-1" id="wind">
                    <div class="h1 text-center">
                        Духовые
                    </div>
                </div>
            </div>

            <div class="d-flex h-50 w-100 mt-1">
                <div class="drag-container w-50 h-100 m-1" id="keyboardIns">
                    <div class="h1 text-center">
                        Клавишные
                    </div>
                </div>
                <div class="drag-container w-50 h-100 m-1" id="percussion">
                    <div class="h1 text-center">
                        Ударные
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {SorterGame, startDragNDrop} from "@/assets/js/sorter";
import CongratulationsMessage from "@/components/CongratulationsMessage.vue";

export default defineComponent({
    name: "Sort",
    components: {CongratulationsMessage},
    data() {
        return {
            sorterGame: {},
        }
    },
    mounted() {
        this.sorterGame = new SorterGame(this.$refs.sorter)
        console.log(this.sorterGame)
        startDragNDrop(this.sorterGame)
    }
})
</script>

<style scoped>

.sorter {
    background-image: url("../assets/img/bg.png");
}

.drag-item {
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 10;
    background-size: contain;
    background-repeat: no-repeat;
}

.stringed {
}

.drag-container {
    width: 400px;
    height: 400px;
    background: white;
}


.title {
    font-size: 3rem;
    font-weight: 700;
    background-image: url("../assets/img/title.png");
    background-size: 100% 140%;
    background-repeat: no-repeat;
    background-position-y: -10px;
    color: white;
}

.game {
    flex-grow: 1;
}

.guitar {
    background-image: url("../assets/img/guitar.png");
    height: 300px;
    width: 150px;
}
.el-guitar {
    background-image: url("../assets/img/el_guitar.png");
    height: 300px;
    width: 150px;
}

.harp {
    background-image: url("../assets/img/harp.png");
    height: 350px;
    width: 350px;
}

.piano {
    background-image: url("../assets/img/piano.png");
    height: 350px;
    width: 350px;
}

.flute {
    background-image: url("../assets/img/flute.png");
    width: 250px;
    height: 100px;
}
.drum {
    background-image: url("../assets/img/drum.png");
    width: 200px;
    height: 200px;
}

.trumpet {
    background-image: url("../assets/img/trumpet.png");
    width: 200px;
    height: 200px;
}

</style>