<template>
  <ion-searchbar
    class="headline2Medium"
    :debounce="1000"
    :inputmode="'search'"
    :placeholder="placeholder"
    @ionChange="onChange"
    @ionInput="onChange"
  ></ion-searchbar>
</template>

<script setup lang="ts">
import { IonSearchbar, type SearchbarInputEventDetail } from '@ionic/vue'
import type { IonSearchbarCustomEvent } from '@ionic/core/dist/types/components'
const model = defineModel({ required: true })
defineProps<{
  placeholder: string
}>()

const onChange = (event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) => {
  model.value = event.target.value
}
</script>

<style scoped>
ion-searchbar {
  --background: var(--ion-color-light);
  --color: var(--ion-color-dark);
  --placeholder-color: var(--ion-color-medium);
  --icon-color: var(--ion-color-dark);
  --clear-button-color: var(--ion-color-dark);
  --border-radius: 4px;
  min-height: 52px !important;
  padding-top: 2px !important;
  padding-bottom: 16px !important;
  --box-shadow: none;
}

ion-searchbar :global(.searchbar-search-icon) {
  display: none !important;
}

ion-searchbar :global(.searchbar-input) {
  padding-inline-start: 8px !important;
  padding-inline-end: 8px !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  font-size: inherit !important;
  line-height: inherit;
}
</style>
