<template>
    <div class="px-4 pt-4">
        <div class="grid grid-cols-1 gap-6 max-h-[65vh] overflow-auto scrollbar-hide">
            <room-item v-for="item in items"
                :key="item.id"
                :id="item.id"
                :type="item.type"
                :title="item.title"
                :devices="item.devices" />
            <div class="col-span-1">
                <app-btn @cliked="open=true" class="w-full">Add Room</app-btn>
            </div>
        </div>
        <app-dialog title="" :open="open" @close-dialog="open=false">
            <form class="flex flex-col gap-4 pt-4">
                <app-input variant="outlined" label="Title" />
                <app-select variant="outlined" placeholder="Type of room" :items="room_types.map(t => t.title)" />
                <app-btn @cliked="open=true" class="w-full">Add Room</app-btn>
            </form>
        </app-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppInput from '../../components/app-input.vue'
import AppBtn from '../../components/app-btn.vue'
import AppDialog  from '../../components/app-dialog.vue'
import RoomItem from '../../components/app-room-item.vue'
import AppSelect from '../../components/app-select.vue'
import { room_types } from '../../constants'

const open = ref(false)

const items = [
    { id: 1, title: 'Smart Light', type: 'Living Room', devices: 2 },
    { id: 2, title: 'Smart Fridge', type: 'Kitchen', devices: 1 },
    { id: 3, title: 'Smart TV', type: 'Bedroom', devices: 1 },
    { id: 4, title: 'Smart Shower', type: 'Bathroom', devices: 1 },
    { id: 5, title: 'Smart Speaker', type: 'Dining Room', devices: 1 },
    { id: 6, title: 'Smart Desk', type: 'Office', devices: 1 },
]
</script>