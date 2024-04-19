<script setup lang="ts">
import WelcomeEmptyState from '@/pages/HomePage/components/WelcomeEmptyState/WelcomeEmptyState.vue'
import BaseTypography from '@/shared/components/BaseTypography.vue'

defineProps<{
  searchQuery: string
}>()
</script>

<template>
  <div class="wrapper">
    <BaseTypography v-if="searchQuery" variant="headline2Bold">
      <div>No results found for "{{ searchQuery }}"</div>
    </BaseTypography>
    <WelcomeEmptyState v-else />
  </div>
</template>

<style scoped>
.wrapper {
  margin: 24px 16px;
}
</style>
