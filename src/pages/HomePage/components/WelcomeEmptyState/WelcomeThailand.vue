<script setup lang="ts">
import BaseTypography from '@/shared/components/BaseTypography.vue'
import { imageConfig } from '@/pages/HomePage/components/WelcomeEmptyState/imageConfig'
import { CountryCode } from '@/shared/types/CountryCode'
import BaseImage from '@/shared/components/BaseImage.vue'
import BaseExternalLink from '@/shared/components/BaseExternalLink.vue'

const { imageSrc, sourceUrl, sourceText } = imageConfig[CountryCode.Thailand]
</script>

<template>
  <BaseTypography variant="body1Bold" class="inline-block mb-4">Discover Thailand</BaseTypography>
  <BaseTypography variant="body2Regular" class="inline-block mb-4">
    Discover Thailand's vibrant culture, stunning landscapes, and pristine beaches.
  </BaseTypography>
  <BaseImage :src="imageSrc" class="mb-2" />
  <BaseExternalLink :link-url="sourceUrl" color="medium" class="block mb-4 ion-text-end">
    <BaseTypography variant="captionRegular">
      {{ sourceText }}
    </BaseTypography>
  </BaseExternalLink>
  <BaseTypography variant="body2Regular">
    Begin your unforgettable journey in Thailand now.
  </BaseTypography>
</template>
