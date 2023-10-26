<template>
    <div class="
        has-tooltip
        group
        flex flex-row 
        border-[2px] border-[--grey-dark]
        hover:border-[--grey-light]
        transition ease-in-out delay-200 duration-200
        "
        @mouseover="updateTooltipPosition"      
        @mousemove="updateTooltipPosition"
        @mouseout="updateTooltipPosition"
             
    >
        <div class="w-2/12 border-r-[2px] border-grey-dark flex items-center justify-center group-hover:border-[--grey-light] transition ease-in-out delay-50 duration-200">
            <div class="h1 inline-block align-middle mb-[-10%] group-hover:text-[--grey-light] transition ease-in-out delay-50 duration-200">
                <Zero class="after:bg-primary-red group-hover:after:bg-[--red-dark] after:ease-in-out after:delay-50 "/>
                <span>{{ number }}</span>
            </div>
        </div>
        <div class="w-8/12 flex flex-auto items-center justify-center">
            <div class="h2 center align-middle p-2 group-hover:text-[--grey-light] transition ease-in-out delay-100">{{ name }}</div>
        </div>
        <div class="w-2/12 flex-auto">
            <div class="flex flex-col justify-around h-full">
                <div v-for="tag in hashtags" :key="tag" class="">
                    <span class="flex ">
                        <p class="p-medium text-primary-red">#</p>
                        <p class="p-medium group-hover:text-[--grey-light] transition ease-in-out delay-150 ">{{ tag }}</p>
                    </span>
                </div>
            </div>
        </div>
        <div class='tooltip rounded shadow-lg w-4/12'
            :style="{ 'left': (leftPos + 10) + 'px', 'top': topPos + 10 + 'px' }"
        >
            <img src="@/assets/hora-preview.png" alt="illustration" class="object-fill  object-top-[100px]"/>       
        </div>
    </div>
</template>

<script setup>
import Zero from '@/components/ZeroWithColoredDot.vue'
import { useMouse } from '@vueuse/core'
import { defineProps, ref } from 'vue'
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        default: '1'
    },
    hashtags: {
        type: Array,
        default: []
    },
    previewImageLinkg: {
        type: String,
        default: 'hora-preview.png'
    }
})

const mousePosition = useMouse()
const leftPos = ref(mousePosition.x)
const topPos = ref(mousePosition.y)


</script>

<style scoped>


</style>



