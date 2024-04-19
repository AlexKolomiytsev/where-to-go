<script setup lang="ts">
import { IonHeader, IonToolbar } from '@ionic/vue'
import BaseTypography from '@/shared/components/BaseTypography.vue'

defineProps<{ label: string }>()
</script>

<template>
  <ion-header>
    <ion-toolbar class="primary-toolbar">
      <BaseTypography slot="start" color="light" variant="headline1Bold">{{
        label
      }}</BaseTypography>
      <slot name="primary-toolbar-tools"></slot>
    </ion-toolbar>
    <ion-toolbar v-if="$slots['secondary-toolbar']">
      <slot name="secondary-toolbar"></slot>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>
ion-toolbar {
  --ion-toolbar-background: var(--ion-color-primary);
}

.primary-toolbar {
  display: flex;
  padding: 0 12px;
}
</style>
