<template>
    <div class="px-4">
        <!-- <div class="relative flex justify-center items-center h-14">
            <router-link to="/"
                class="absolute top-0 left-0 flex justify-center items-center w-14 h-14 rounded-full bg-transparent active:bg-gray-200 active:bg-opacity-20">
                <AkChevronLeft />
            </router-link>
            <h4 class="text-xl font-normal">Profit</h4>
        </div> -->
        <div class="text-center mt-4">
            <h1 class="nunito-extra-bold text-2xl">Primary</h1>
        </div>

        <div class="mt-6 flex flex-col gap-8">
            <!-- <div class="flex justify-center">
                <img class="w-80" src="/images/calculate.png" alt="">
            </div> -->
            <div class="space-y-8">
                <app-input label="Price per kilowatt in dollars" variant="outlined" type="number" />
                <app-input label="How many kilowatts per month do you use" variant="outlined"
                    placeholder="Enter quantity of kilowatts that you use" type="number" />
            </div>

            <app-btn class="mx-auto max-w-[250px] w-full">
                <span class="text-lg font-normal">Calculate</span>
            </app-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppBtn from '../../components/app-btn.vue'
import AppInput from '../../components/app-input.vue'
// import { AkChevronLeft } from '@kalimahapps/vue-icons'
</script>