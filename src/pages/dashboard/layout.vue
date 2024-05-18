<template>
    <main class="relavite w-full h-screen">
        <top-bar />
        <router-view />
        <bottom-nav />
    </main>
</template>

<script setup lang="ts">
import TopBar from '../../components/top-bar.vue'
import BottomNav from '../../components/bottom-nav.vue'
</script>