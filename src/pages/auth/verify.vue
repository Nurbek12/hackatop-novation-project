<template>
    <h1 class="nunito-extra-bold text-3xl mb-8">Enter code for <br> verification</h1>
    <app-otp-input v-model="code" />
    <app-btn class="mt-2 w-full" to="/auth/register">Enter</app-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppBtn from '../../components/app-btn.vue'
import AppOtpInput from '../../components/app-otp-input.vue'

const code = ref(['','','',''])
</script>