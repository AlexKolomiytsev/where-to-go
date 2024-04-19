<template>
  <IonText>
    <component :is="element" :class="[variant, 'component']">
      <slot></slot>
    </component>
  </IonText>
</template>

<script setup lang="ts">
import { IonText } from '@ionic/vue'
import type { TypographyVariant } from '@/shared/types/TypographyVariant'
import { computed } from 'vue'

const props = defineProps<{ variant: TypographyVariant }>()

const element = computed(() => {
  switch (true) {
    case props.variant.startsWith('headline1'):
      return 'h1'
    case props.variant.startsWith('headline2'):
      return 'h2'
    case props.variant.startsWith('body'):
    case props.variant.startsWith('caption'):
    default:
      return 'p'
  }
})
</script>

<style scoped>
.component {
  margin: 0;
}
</style>
