<script setup lang="ts">
import { imageConfig } from '@/pages/HomePage/components/WelcomeEmptyState/imageConfig'
import { CountryCode } from '@/shared/types/CountryCode'
import BaseImage from '@/shared/components/BaseImage.vue'
import BaseTypography from '@/shared/components/BaseTypography.vue'
import BaseExternalLink from '@/shared/components/BaseExternalLink.vue'

const { imageSrc, sourceUrl, sourceText } = imageConfig[CountryCode.Singapore]
</script>

<template>
  <BaseTypography variant="body1Bold" class="inline-block mb-4">Discover Singapore</BaseTypography>
  <BaseTypography variant="body2Regular" class="inline-block mb-4">
    Explore Singapore's dynamic culture, futuristic architecture, and lush green spaces.
  </BaseTypography>
  <BaseImage :src="imageSrc" class="mb-2" />
  <BaseExternalLink :link-url="sourceUrl" color="medium" class="block mb-4 ion-text-end">
    <BaseTypography variant="captionRegular">
      {{ sourceText }}
    </BaseTypography>
  </BaseExternalLink>
  <BaseTypography variant="body2Regular">
    Start your unforgettable adventure in Singapore today.
  </BaseTypography>
</template>
