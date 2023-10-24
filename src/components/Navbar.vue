<template>
<div>
    <div class=" grid grid-cols-12 w-full gap-8 h-24 py-6">
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

</div>
</template>

<script setup>
import Button from './Button.vue'
</script>

