<template>
    <div class="px-4 pt-4">
        <div class="grid grid-cols-1 gap-6 max-h-[65vh] overflow-auto scrollbar-hide">
            <room-item v-for="item in items"
                :key="item.id"
                :type="item.type"
                :title="item.title"
                :devices="item.devices" />
        </div>
    </div>
</template>

<script setup lang="ts">
import RoomItem from '../../components/app-room-item.vue'

const items = [
    { id: 1, title: 'Smart Light', type: 'Living Room', devices: 2 },
    { id: 2, title: 'Smart Fridge', type: 'Kitchen', devices: 1 },
    { id: 3, title: 'Smart TV', type: 'Bedroom', devices: 1 },
    { id: 4, title: 'Smart Shower', type: 'Bathroom', devices: 1 },
    { id: 5, title: 'Smart Speaker', type: 'Dining Room', devices: 1 },
    { id: 6, title: 'Smart Desk', type: 'Office', devices: 1 },
]
</script>