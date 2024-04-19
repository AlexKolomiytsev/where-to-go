<template>
  <ion-select
    v-model="model"
    :interface="selectInterface"
    :interface-options="selectInterfaceOptions"
    class="body1Regular"
  >
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
import { getPlatforms } from '@ionic/vue'

const platforms = getPlatforms()
const selectInterface = platforms.includes('android') ? 'alert' : 'popover'
const selectInterfaceOptions =
  selectInterface === 'alert'
    ? {
        buttons: [
          {
            text: 'No',
            cssClass: 'alert-button-cancel'
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm'
          }
        ]
      }
    : { arrow: false, translucent: true }

console.log('selectInterface', selectInterface)

const model = defineModel({ required: true, default: CountryCode.Thailand })
</script>

<style scoped>
ion-select {
  --background: rgba(var(--ion-color-light-rgb), 0.1);
  --border-radius: 8px;
  color: var(--ion-color-light);
  --min-height: auto;
  min-height: auto;
  --padding-top: 4px;
  --padding-end: 16px;
  --padding-bottom: 4px;
  --padding-start: 6px;

  &::part(container) {
    min-width: 100px;
    text-align: center;
  }

  &::part(icon) {
    display: none;
  }
}
</style>
