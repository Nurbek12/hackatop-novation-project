<template>
    <!-- <form action=""> -->
    <h1 class="nunito-extra-bold text-3xl mb-8">Sign up with <br> Number</h1>
    <app-input required v-model="auth_data.first_name" label="Write your number" variant="outlined" placeholder="+998" v-mask="'+### ## ### ## ##'" />
    <app-input required v-model="auth_data.phone" label="Write your name" variant="outlined" placeholder="Enter your Name" />
    <!-- <app-input label="Write your password" variant="outlined" placeholder="Enter your password" /> -->
    <app-btn class="w-full" type="button" @cliked="handleAuth" to="/auth/verify">Continue</app-btn>
    <!-- </form> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { register } from '../../api/auth'
import AppBtn from '../../components/app-btn.vue'
import AppInput from '../../components/app-input.vue'

const auth_data = ref({
    first_name: '',
    phone: '',
    // password: '',
})

const handleAuth = async () => {
    const { data } = await register(auth_data)
    console.log(data)
}
</script>