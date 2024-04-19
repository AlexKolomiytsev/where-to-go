<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonSkeletonText } from '@ionic/vue'

defineProps<{ numberOfItems: number }>()
</script>

<template>
  <ion-card v-for="n in numberOfItems" :key="n">
    <ion-card-header>
      <ion-skeleton-text :animated="true" style="height: 27px"></ion-skeleton-text>
    </ion-card-header>
    <ion-card-content>
      <ion-skeleton-text :animated="true" style="height: 18px"></ion-skeleton-text>
    </ion-card-content>
  </ion-card>
</template>

<style scoped>
ion-skeleton-text {
  --border-radius: 9px;
  --background: rgba(var(--ion-color-primary-rgb), 0.065);
  --background-rgb: var(--ion-color-primary-rgb);
  margin: 0;
}
ion-card {
  --ion-card-background: #ffffff;
}

ion-card-header {
  padding: 12px;
}

ion-card-content {
  padding: 0 12px 12px;
}
</style>
