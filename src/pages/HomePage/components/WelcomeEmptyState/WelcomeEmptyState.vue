<script setup lang="ts">
import { computed, inject } from 'vue'
import { CountryCode } from '@/shared/types/CountryCode'
import WelcomeThailand from '@/pages/HomePage/components/WelcomeEmptyState/WelcomeThailand.vue'
import WelcomeIndia from '@/pages/HomePage/components/WelcomeEmptyState/WelcomeIndia.vue'
import WelcomeSingapore from '@/pages/HomePage/components/WelcomeEmptyState/WelcomeSingapore.vue'
import { selectedCountryInjectionKey } from '@/shared/di/injectionsKeys'

const selectedCountry = inject(selectedCountryInjectionKey)

const cmp = computed(() => {
  switch (selectedCountry?.value) {
    case CountryCode.India:
      return WelcomeIndia
    case CountryCode.Singapore:
      return WelcomeSingapore
    case CountryCode.Thailand:
    default:
      return WelcomeThailand
  }
})
</script>

<template>
  <component :is="cmp"></component>
</template>

<style scoped></style>
