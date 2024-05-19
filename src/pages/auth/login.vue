<template>
    <h1 class="nunito-extra-bold text-3xl mb-8">Login in with <br> Number</h1>
    <app-input v-model="auth_data.phone_number" placeholder="+998" v-mask="'+### ## ### ## ##'" />
    <app-input v-model="auth_data.password" placeholder="Password" />
    <app-btn @cliked="handleAuth" to="/auth/verify" class="w-full">Continue</app-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { login } from '../../api/auth'
import AppBtn from '../../components/app-btn.vue'
import AppInput from '../../components/app-input.vue'

const auth_data = ref({
    phone_number: '',
    password: ''
} as any)

const handleAuth = async () => {
    // const { data } = await login({
    //     ...auth_data.value,
    //     phone_number: auth_data.value.phone_number.replaceAll(' ', '')
    // })
    // console.log(data)
}
</script>