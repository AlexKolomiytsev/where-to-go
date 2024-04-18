<template>
  <ion-select fill="solid" v-model="model">
    <ion-select-option
      v-for="country in countriesOptions"
      :key="country.value"
      :value="country.value"
    >
      {{ country.label }}
    </ion-select-option>
  </ion-select>
</template>

<script setup lang="ts">
import { IonSelect, IonSelectOption } from '@ionic/vue'
import { countriesOptions } from '@/shared/data/countries'
import { CountryCode } from '@/shared/types/CountryCode'

const model = defineModel({ required: true, default: CountryCode.Thailand })
</script>
