<template>
    <div class="px-4 pt-4">
        <div class="grid grid-cols-2 gap-4 max-h-[60vh] overflow-auto scrollbar-hide">
            <device v-for="dv,i in dvs"
                :key="i"
                :icon="dv.icon"
                :title="dv.title"
                :switch="dv.switch"
                :description="dv.description" />
            <div class="col-span-2">
                <app-btn @cliked="open=true" class="w-full">Add Device</app-btn>
            </div>
        </div>
        <app-dialog title="" :open="open" @close-dialog="open=false">
            <form class="flex flex-col gap-4 pt-4">
                <app-select variant="outlined" placeholder="Device" :items="types_title" />
                <app-btn @cliked="open=true" class="w-full">Add Device</app-btn>
            </form>
        </app-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppBtn from '../../components/app-btn.vue'
import AppSelect from '../../components/app-select.vue'
import AppDialog  from '../../components/app-dialog.vue'
import Device from '../../components/app-device.vue'
import { MiLightbulbShine, TaDeviceTv, UnWifiRouter, LuHeater } from '@kalimahapps/vue-icons'
import { devices } from '../../constants'

const open = ref(false)
const types_title = computed(() => devices.map(t => t.title))

const dvs = [
    { title: 'Light bubls', description: 'Philips Hue 2', icon: MiLightbulbShine, switch: true },
    { title: 'Smart TV', description: 'Panasonic', icon: TaDeviceTv, switch: false },
    { title: 'Wi-Fi Router', description: 'TP Link', icon: UnWifiRouter, switch: false },
    { title: 'Heater', description: 'Ariston', icon: LuHeater, switch: false },
]
</script>