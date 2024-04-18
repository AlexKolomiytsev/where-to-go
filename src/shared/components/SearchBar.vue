<template>
  <ion-searchbar
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
