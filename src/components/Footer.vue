<template>
    <div class="line-before line-after w-full h-auto">
        <h1 class="text-center py-4">
            Let’s Connect<span class="text-primary-red ">!</span>
        </h1>
    </div>
    <div class="grid grid-cols-12 grid-flow-row py-32">
        <div class="col-span-5">
            <div class="h2 flex justify-center pb-16">Write <br> Email to</div>
            <p class="p-large flex justify-center">Clacova.elena@gmail.com</p>       
        </div>
        <div class="col-span-1"></div>
        <div class="col-span-5">
            <div class="h2 flex justify-center pb-16">OR <br> &nbsp;</div>
            <div class="h2 flex justify-center pb-10">SEE MY</div>
            <Button :height="'h-auto'" :text="'Linkedin'" :link="'https://www.linkedin.com/in/elena-clacova-9b0b3b1b1/'" />
        </div>
    </div>

</template>

<script setup>
import Button from '@/components/Button.vue'

</script>