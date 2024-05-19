<template>
    <label class="cursor-pointer flex w-[42px] h-[20px] bg-[#CFDAE6] rounded-full relative" :for="id">
        <input hidden :id="id" type="checkbox" v-model="model">
        <div class="absolute h-[20px] w-[20px] rounded-full transition-all" :class="model?'bg-white left-[21px]':'bg-[#4A76FD] left-0'"></div>
    </label>
</template>

<script setup lang="ts">
import { v4 } from 'uuid'
import { defineModel } from 'vue'

const id = `checkbox-${v4()}`
const model = defineModel({ default: false })
</script>