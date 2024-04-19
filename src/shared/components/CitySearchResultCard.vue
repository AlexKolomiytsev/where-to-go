<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <BaseTypography variant="headline2Medium">{{ city.name }}</BaseTypography>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <BaseTypography variant="body2Regular" color="medium">
        {{ city.lat }}, {{ city.lon }}
      </BaseTypography>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue'
import BaseTypography from '@/shared/components/BaseTypography.vue'

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

ion-card-header {
  padding: 12px;
}

ion-card-content {
  padding: 0 12px 12px;
}
</style>
