<template>
    <main class="relavite w-full h-screen">
        <top-bar />
        <router-view />
        <bottom-nav />
    </main>
</template>

<script setup lang="ts">
import { useAppStore } from '../../store'
import { get_all_rooms } from '../../api/rooms'
import { get_all_devices } from '../../api/devices'
import TopBar from '../../components/top-bar.vue'
import BottomNav from '../../components/bottom-nav.vue'

const store = useAppStore()

const init = async () => {
    const [r, d] = await Promise.all([
        get_all_rooms(),
        get_all_devices(),
    ])
    console.log(r.data.results);
    
    if(r.data.results){
        store.set_rooms(r.data.results)
        store.set_devices(d.data.results)
    }
}

// init()
</script>