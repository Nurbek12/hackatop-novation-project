<template>
    <div class="w-full relative">
        <span class="absolute translate-y-[-50%] left-4 text-[#4A76FD] text-sm nunito-regular px-2 bg-white" v-show="props.label">{{ props.label }}</span>
        <select v-model="model" @change="emits('change')"
            class="rounded-[15px] outline-none w-full px-4"
            :class="props.variant === 'outlined' ? 'py-3 border-2 border-[#4A76FD]' : 'py-3 bg-[#CFDAE6]'">
            <option disabled selected :value="undefined">{{ props.placeholder }}</option>
            <option v-for="item,i in props.items" :value="item" :key="i">{{ item }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineModel, defineEmits } from 'vue'

const model = defineModel()
const emits = defineEmits(['change'])
const props = defineProps<{
    placeholder?: string
    required?: boolean
    variant?: 'outlined' | 'default',
    label?: string,
    items: string[]
}>()

</script>