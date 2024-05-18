<template>
    <div class="absolute bottom-4 w-full container left-0">
        <div class="w-full flex items-center bg-[#4A76FD] rounded-[1rem] p-2 justify-between">
            <router-link v-for="l,i in links" :to="l.url" :key="i">
                <div class="flex items-center nunito-medium gap-2 text-white px-6 py-2 rounded-[.6rem]"
                    :class="route.fullPath === l.url?'bg-[#669BF7]':''">
                    <component :is="l.icon" class="text-2xl"></component>
                    <span v-show="route.fullPath === l.url">{{ l.title }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { McOpenDoorFill, BxSolidDashboard, AkDevices } from '@kalimahapps/vue-icons'

const route = useRoute()
const links = [
    { title: 'Dashboard', url: '/', icon: BxSolidDashboard },
    { title: 'Rooms', url: '/rooms', icon: McOpenDoorFill },
    { title: 'Devices', url: '/devices', icon: AkDevices },
]
</script>