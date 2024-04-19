<template>
  <ion-button id="select-country" :slot="$attrs.slot" class="body1Regular">{{
    selectedCountryText
  }}</ion-button>
  <CustomInterface :component="selectInterface" trigger="select-country">
    <ion-list lines="full">
      <ion-radio-group :value="model" @ionChange="handleChange">
        <ion-item class="item" v-for="country in countriesOptions" :key="country.value">
          <ion-radio
            class="radio-item"
            :value="country.value"
            :label-placement="radioLabelPlacement"
            :justify="radioJustify"
          >
            {{ country.label }}
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
  </CustomInterface>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonRadioGroup,
  IonRadio,
  getPlatforms,
  IonList,
  type RadioGroupChangeEventDetail
} from '@ionic/vue'
import { countriesOptions, countryCodeToNameMap } from '@/shared/data/countries'
import { CountryCode } from '@/shared/types/CountryCode'
import { computed } from 'vue'
import type { IonRadioGroupCustomEvent } from '@ionic/core/dist/types/components'
import CustomInterface from '@/shared/components/CountrySelectorWithCustomInterface/CustomInterface.vue'

const platforms = getPlatforms()
const selectInterface = platforms.includes('android') ? 'ion-modal' : 'ion-popover'
const radioLabelPlacement = platforms.includes('android') ? 'start' : 'end'
const radioJustify = platforms.includes('android') ? 'space-between' : 'start'

const model = defineModel({ required: true, default: CountryCode.Thailand })
const selectedCountryText = computed(() => {
  return countryCodeToNameMap[model.value]
})

const handleChange = (event: IonRadioGroupCustomEvent<RadioGroupChangeEventDetail>) => {
  model.value = event.detail.value
}
</script>

<style scoped>
ion-button#select-country {
  &::part(native) {
    --background: rgba(var(--ion-color-light-rgb), 0.1);
    color: var(--ion-color-light);
  }

  text-transform: none;
  --box-shadow: none;
  margin: 0;
  min-height: 24px;
  min-width: 150px;
  box-sizing: border-box;
  --padding-top: 6px;
  --padding-end: 28px;
  --padding-bottom: 6px;
  --padding-start: 12px;

  --border-radius: 8px;
}

.item {
  --padding-start: 10px;
}

ion-popover {
  .radio-item {
    &::part(label) {
      margin-inline: 6px 0;
    }
  }
}
</style>
