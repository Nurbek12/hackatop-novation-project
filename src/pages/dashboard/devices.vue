<template>
    <div class="px-4 pt-4">
        <div class="overflow-x-auto scrollbar-hide">
            <div class="flex items-center gap-4">
                <span v-for="i in 15" class="text-nowrap text-blue-500 cursor-pointer">Link {{ i }}</span>
            </div>
        </div>
        <div class="mt-6 grid grid-cols-2 gap-4 max-h-[60vh] overflow-auto scrollbar-hide">
            <device v-for="dv,i in dvs"
                :key="i"
                :icon="dv.icon"
                :title="dv.title"
                :switch="dv.switch"
                :description="dv.description" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Device from '../../components/app-device.vue'
import { MiLightbulbShine, TaDeviceTv, UnWifiRouter, LuHeater } from '@kalimahapps/vue-icons'

const dvs = [
    { title: 'Light bubls', description: 'Philips Hue 2', icon: MiLightbulbShine, switch: true },
    { title: 'Smart TV', description: 'Panasonic', icon: TaDeviceTv, switch: false },
    { title: 'Wi-Fi Router', description: 'TP Link', icon: UnWifiRouter, switch: false },
    { title: 'Heater', description: 'Ariston', icon: LuHeater, switch: false },
    { title: 'Heater', description: 'Ariston', icon: LuHeater, switch: false },
    { title: 'Heater', description: 'Ariston', icon: LuHeater, switch: false },
    { title: 'Heater', description: 'Ariston', icon: LuHeater, switch: false },
    { title: 'Heater', description: 'Ariston', icon: LuHeater, switch: false },
]
</script>