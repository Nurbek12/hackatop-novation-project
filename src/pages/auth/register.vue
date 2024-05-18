<template>
    <h1 class="nunito-extra-bold text-3xl mb-8">Sign up with <br> Number</h1>
    <app-input label="Write your number" variant="outlined" placeholder="+998" v-mask="'+### ## ### ## ##'" />
    <app-input label="Write your password" variant="outlined" placeholder="Enter your password" />
    <app-input label="confirm your password" variant="outlined" placeholder="Enter your password" />
    <app-btn class="w-full" to="/auth">Continue</app-btn>
</template>

<script setup lang="ts">
import AppBtn from '../../components/app-btn.vue'
import AppInput from '../../components/app-input.vue'
</script>