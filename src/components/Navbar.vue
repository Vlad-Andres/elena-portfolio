<template>
<div>
    <div class="px-[--margin-x-content] grid grid-cols-12 w-full gap-8 h-24 py-6">
        <span class="col-span-3  flex items-center justify-center">
            <h3 class="align-middle">
                <span class="text-[--red]">.</span>
                <span>Clacova</span>

            </h3>
        </span>
        <div class="col-span-3 "></div>
        <div class="col-span-2  text-center bg-red">
            <Button :text="'About'" />
        </div>
        <div class="col-span-2  text-center">
            <Button :text="'Projects'" />
        </div>
        <div class="col-span-2  text-center">
            <Button :text="'Contact'" />
        </div>

    </div>
    <hr class="h-1 bg-[--red-darker] border-none">
</div>
</template>

<script setup>
import Button from './Button.vue'
</script>

<style scoped>
@media screen and (max-width: 1024px) {
    h3 {
        font-size: 1.95313rem !important;
        letter-spacing: -0.01953rem !important;
        line-height: 2rem !important; /* 102.4% */
    }
    
}
</style>
