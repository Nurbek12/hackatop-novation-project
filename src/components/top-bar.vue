<template>
    <div class="rounded-b-3xl border-b-4 px-6 pb-4">
        <span class="nunito-regular text-blue-500 text-sm">{{ new Date().toDateString() }}</span>
        <div class="mb-2 flex items-center justify-between">
            <div>
                <h1 class="nunito-extra-bold text-2xl">Jasurbek Tursunov</h1>
                <span class="text-lg">Samarqand, Obi-Rahmat 5A</span>
            </div>
            <div class="w-[60px] h-[60px] rounded-full overflow-hidden p-0.5 border border-blue-500">
                <img src="/images/jasur.png" alt="" class="rounded-full w-full h-full object-cover">
            </div>
        </div>
        <div class="text-sm flex justify-between items-center">
            <div class="flex flex-col">
                <span>20 devices running</span>
                <span>Solar battery level</span>
            </div>
            <div class="flex flex-col text-right">
                <span>Damage - <b>48%</b></span>
                <span>Not charging - <b>38%</b></span>
            </div>
        </div>
    </div>
</template>