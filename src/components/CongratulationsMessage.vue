<script>
export default {
    name: "CongratulationsMessage"
}
</script>

<template>
<div class="message">
    <div class="h1 d-flex justify-content-center align-items-center">
        Вы успешно справились!
    </div>
</div>
</template>

<style scoped>
.message {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background-image: url("../assets/img/cong.png");
    background-size: cover;
    background-repeat: no-repeat;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);
}

.h1 {
    font-size: 8rem;

}
</style>