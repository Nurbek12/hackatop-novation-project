<template>
    <h1 class="nunito-extra-bold text-3xl mb-8">Login in with <br> Number</h1>
    <app-input placeholder="+998" v-mask="'+### ## ### ## ##'" />
    <app-btn class="w-full" to="/verify">Continue</app-btn>
</template>

<script setup lang="ts">
import AppBtn from '../../components/app-btn.vue'
import AppInput from '../../components/app-input.vue'
</script>