<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ city.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Latitude: {{ city.lat }}</p>
      <p>Longitude: {{ city.lon }}</p>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue'

const city = defineProps<{
  name: string
  lat: string
  lon: string
}>()
</script>

<style scoped>
ion-card {
  --ion-card-background: #ffffff;
}
</style>
