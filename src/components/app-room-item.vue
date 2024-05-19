<template>
    <div>
        <div class="w-full h-[200px] shadow rounded-2xl overflow-hidden">
            <img :src="room_types.find(t => t.title == props.type)?.img" class="w-full h-full object-cover">
        </div>
        <div class="mt-2 flex items-center justify-between">
            <div class="nunito-regular">
                <h4>{{ props.title }}</h4>
                <span class="text-xs flex gap-2 items-center">
                    <component :is="room_types.find(t => t.title == props.type)?.icon"></component>
                    <span>{{ props.type }}</span>
                </span>
            </div>
            <span class="nunito-regular"><b>{{ props.devices }}</b> devices</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { room_types } from '../constants'

const props = defineProps<{
    title?: string,
    type?: string,
    devices?: number
}>()
</script>