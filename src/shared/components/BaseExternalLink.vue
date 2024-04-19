<script setup lang="ts">
import { Browser } from '@capacitor/browser'
import type { IonText } from '@ionic/vue'
const props = defineProps<{ linkUrl: string; color: (typeof IonText)['color'] }>()

const openLink = () => {
  Browser.open({ url: props.linkUrl })
}
</script>

<template>
  <a :href="linkUrl" @click.prevent="openLink" target="_blank" :class="`ion-color-${color}`">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  color: var(--ion-color-base);
}
</style>
