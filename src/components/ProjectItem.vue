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
        <div class='tooltip rounded shadow-lg'
            :style="tooltipStyle"
        >
            <img src="@/assets/hora-preview.png" alt="illustration" :class="tooltipClass"/>       
        </div>
    </div>
</template>

<script setup>
import Zero from '@/components/ZeroWithColoredDot.vue'
import { useMouse } from '@vueuse/core'
import { defineProps, ref, reactive, computed } from 'vue'
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
    },
    imageWidth: {
        type: Number,
        default: 500
    },
    imageHeight: {
        type: Number,
        default: 250
    }
})
const screenWidth = window.innerWidth

const mouse = useMouse({touch: false})
const mousePosition = reactive({
    left: mouse.x,
    top: mouse.y,
})

const tooltipPostion = reactive({
    left: 0,
    top: 0
})

const tooltipClass = computed(() => {
    const widthClass = `w-[${props.imageWidth}px]`
    const heightClass = `h-[${props.imageHeight}px]`
    return {
        'object-cover': true,
        [widthClass] : true,
        [heightClass] : true
    }
})

let mouseYInViewport = ref(0)

const updateTooltipPosition = (event) => {
    mouseYInViewport = event.clientY
    console.log("Mouse Y: ", mouseYInViewport);
}

const tooltipStyle = computed(() => {
    const tooltip = document.querySelector('.tooltip')
    const screenHeight = window.innerHeight
    if (tooltip) {
        const tooltipYOnScreen = tooltip.getBoundingClientRect().top
        const heightDiff = screenHeight - mouseYInViewport - props.imageHeight
        console.log("Height diff: ", heightDiff);
        if (heightDiff != NaN && heightDiff < 0) {
            tooltipPostion.top = mousePosition.top + heightDiff
        } else {
            tooltipPostion.top = mousePosition.top
        }
    }
    console.log("Window height: ", screenHeight);
    const widthDiff = screenWidth - mousePosition.left

    if (widthDiff < props.imageWidth) {
        tooltipPostion.left = mousePosition.left - (props.imageWidth - widthDiff)
    } else {
        tooltipPostion.left = mousePosition.left
    }

    return {
        left: `${tooltipPostion.left}px`,
        top: `${tooltipPostion.top}px`
    }
})

</script>

<style scoped>


</style>



