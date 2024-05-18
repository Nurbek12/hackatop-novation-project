<template>
    <div class="flex gap-3">
        <div v-for="field in len" :key="field" class="h-7 w-7">
            <input v-model="model[field - 1]" @focus="focusStyling" @focusout="focusoutStyling"
                @input="handleOtpInput($event, field)" @paste="handlePaste" inputmode="numeric" type="text" maxlength="1"
                autofocus id="otp-inputs" class="bg-transparent text-center outline-none h-full w-full dark:text-white">
            <div class="w-full h-1 rounded-full bg-gray-400"></div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { defineModel } from 'vue'

const model = defineModel({
    type: Array<String>,
    required: true,
})

const len = model.value?.length;
let fieldIndex = 0;

const focusStyling = (e: FocusEvent) => {
    const target = (e.target as HTMLInputElement);
    const underline = target.nextElementSibling as HTMLDivElement;

    if (model.value[0] === '') fieldIndex = 0;
    else if (model.value[1] === '') fieldIndex = 1;
    else if (model.value[2] === '') fieldIndex = 2;

    fields[fieldIndex].focus();

    if (target === fields[fieldIndex]) {
        underline.classList.remove('bg-gray-400', 'dark:bg-gray-400')
        underline.classList.add('bg-black', 'dark:bg-white');
        underline.classList.add('animate-custom-pulse');
    }
}

const focusoutStyling = (e: FocusEvent) => {
    const target = (e.target as HTMLInputElement);
    const underline = target.nextElementSibling as HTMLDivElement;

    underline.classList.remove('animate-custom-pulse');

    if (target.value.length === 0) {
        underline.classList.add('bg-gray-400', 'dark:bg-gray-400');
    }
}

const handlePaste = (e: ClipboardEvent) => {

    const clipboardData = e.clipboardData?.getData('text').split('') as string[];

    if (clipboardData.length === len) {
        model.value = clipboardData;
        fieldIndex = len - 1;
        fields[fieldIndex].focus();

        for (let i = 0; i < len; ++i) {
            const underlineElement = fields[i].nextElementSibling as HTMLDivElement;
            underlineElement.classList.remove('bg-gray-400', 'dark:bg-gray-400');
            underlineElement.classList.add('bg-black', 'dark:bg-white');
        }
    }

    console.log(model.value);
}

const fields = document.getElementsByTagName('input');

document.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && fieldIndex > 0 && fieldIndex < len) {

        if (model.value[fieldIndex].length === 0)
            fieldIndex -= 1;

        model.value[fieldIndex] = '';
        fields[fieldIndex].focus();
    }
})

const handleOtpInput = (_: Event, index: number) => {

    if (fields[index]) {
        fieldIndex = index;
        fields[index].focus();
    }
}

</script>
  
<style scoped>
input {
    caret-color: transparent;
}
</style>