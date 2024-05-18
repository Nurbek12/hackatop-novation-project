<template>
    <h1 class="nunito-extra-bold uppercase text-3xl">Electron</h1>
    <img src="/images/login-index.jpg" alt="" class="my-6 max-w-[400px]">
    <app-btn to="/login" class="w-full">LOGIN</app-btn>
    <app-btn to="/register" class="w-full">SIGN UP</app-btn>
</template>

<script setup lang="ts">
import AppBtn from '../../components/app-btn.vue'
</script>