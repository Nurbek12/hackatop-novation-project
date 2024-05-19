<template>
    <div @click="handleToggle" class="rounded-2xl transition-all px-6 py-5 gap-4 flex flex-col justify-between border border-[#3981F6] cursor-pointer" :class="sw?'bg-[#3981F6] shadow-xl shadow-[#3981F660] text-white':'text-[#3981F6] hover:bg-[#3981F6] hover:text-white'">
        <div class="flex justify-between items-center">
            <component class="text-3xl" :is="props.icon"></component>
            <app-switch @changed="handleToggle" :model-value="sw" />
        </div>
        <div>
            <h3 class="nunito-semi-bold">{{ props.title }}</h3>
            <p class="text-sm nunito-regular">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import AppSwitch from './app-switch.vue'

const props = defineProps<{
    icon?: any
    title?: string
    switch?: boolean
    description?: string
}>()
const sw = ref(props.switch||false)

const handleToggle = () => {
    sw.value = !sw.value
}
</script>