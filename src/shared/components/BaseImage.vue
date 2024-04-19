<script setup lang="ts">
import { IonImg } from '@ionic/vue'
</script>

<template>
  <IonImg v-bind="$attrs"></IonImg>
</template>

<style scoped>
ion-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
}
</style>
