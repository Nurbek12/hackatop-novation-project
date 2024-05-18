<template>
    <button class="bg-[#4A76FD] disabled:bg-[#6c8ffa] hover:bg-[#3c69ee] active:bg-[#305de5] py-4 rounded-[15px] nunito-bold text-white cursor-pointer"
        :class="props.class||''" :type="props.type || 'button'" @click="handleClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps, defineEmits } from 'vue'

const router = useRouter()
const emits = defineEmits(['cliked'])
const props = defineProps<{
    class?: string | string[],
    type?: 'button' | 'submit' | 'reset',
    to?: string,
}>()

const handleClick = () => {
    emits('cliked')
    if(props.to) router.push(props.to)
}
</script>