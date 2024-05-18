<template>
    <div class="px-4 pt-4">
        <div class="py-3 px-4 rounded-3xl border border-blue-500 w-full flex justify-between items-center">
            <div>
                <h2 class="nunito-bold text-2xl text-blue-500">Transformer load</h2>
                <span class="nunito-regular text-sm">It's time to think about your worries</span>
                <p class="nunito-medium text-lg">Earned bonuses</p>
                <h1 class="nunito-extra-bold text-2xl text-[#FF7A01]">{{ (12000).toLocaleString('ru-RU') }} sum</h1>
            </div>
            <div>
                <div class="relative w-[67px] h-[67px] rounded-full flex justify-center items-center border-8">
                    <div class="absolute  w-[67px] h-[67px] rounded-full border-8 border-r-[#1BE08E]"></div>
                    <span class="text-[#1BE08E] nunito-extra-bold text-2xl">30<sup class="text-xs">%</sup></span>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4 px-4 py-4">
        <p class="nunito-semi-bold text-lg">Electricity consumption for each month</p>
        <div class="full scrollbar-hide overflow-x-auto h-[260px]">
            <div class="h-full flex items-end gap-4 px-4">
                <div v-for="d,i in 12" :key="i" class="group relative flex flex-col items-center justify-end h-[200px]">
                    <div class="rounded-xl flex text-white px-4 py-2 absolute text-nowrap transition-all opacity-0 group-hover:opacity-100 top-[-20px] group-hover:top-[-50px]" :class="{
                        'bg-[#1BE08E]':data[d-1]>0&&data[d-1]<=40,
                        'bg-[#FF7A01]':data[d-1]>40&&data[d-1]<=60,
                        'bg-[#FF0101]':data[d-1]>60&&data[d-1]<=100}">{{ (data[d-1])*10 }} kWh</div>
                    <div class="w-[35px] cursor-pointer hover:opacity-80 rounded-xl" :class="{
                        'bg-[#1BE08E]':data[d-1]>0&&data[d-1]<=40,
                        'bg-[#FF7A01]':data[d-1]>40&&data[d-1]<=60,
                        'bg-[#FF0101]':data[d-1]>60&&data[d-1]<=100}" :style="{height: data[d-1]+'%'}"></div>
                    <span class="nunito-regular">{{ new Date(0, i, 0).toLocaleString(undefined, { month: 'short' }) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = new Array(12).fill(0).map(() => Math.floor(Math.random() * 90) + 10)
</script>