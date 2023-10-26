<template>
    <span class="zero">0</span>
</template>


<style scoped>
    .zero {
        position: relative;
    }
    .zero:after {
        position: absolute;
        left: 35%;
        top:35%;
        width: 35%;
        height: 15%;
        content: "";
        clip-path: circle(50% at 50% 50%);

        z-index: 1;
    }
</style>