<template>
  <component :is="component" v-bind="{ ...$attrs, ...interfaceProps }">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { IonModal, IonPopover } from '@ionic/vue'
import { computed } from 'vue'

const props = defineProps<{ component: 'ion-popover' | 'ion-modal' }>()
const component = props.component === 'ion-popover' ? IonPopover : IonModal

const interfaceProps = computed(() => {
  return props.component === 'ion-popover'
    ? {
        size: 'auto',
        mode: 'ios',
        arrow: false,
        translucent: true
      }
    : {}
})
</script>

<style scoped>
ion-popover {
  --offset-y: 10px;
}

ion-modal {
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal h1 {
  margin: 20px 20px 10px 20px;
}

ion-modal ion-icon {
  margin-right: 6px;

  width: 48px;
  height: 48px;

  padding: 4px 0;

  color: #aaaaaa;
}
</style>
