<script setup lang="ts">
import { inject } from 'vue'
import type { CountryCode } from '@/shared/types/CountryCode'

const selectedCountry = inject<CountryCode>('selectedCountry')

defineProps<{
  searchQuery: string
}>()
</script>

<template>
  <div v-if="searchQuery">No results</div>
  <div v-else>
    TODO: show image and text according to the selected country {{ selectedCountry }}
  </div>
</template>

<style scoped></style>
