import { CountryCode } from '@/shared/types/CountryCode'

export const imageConfig: Record<
  CountryCode,
  { imageSrc: string; sourceUrl: string; sourceText: string }
> = {
  // TODO: usually source would be handled by i18next with a translation key and components for links, e.g. "Photo by <0>{{author}}</0> on <1>{{source}}</1>"
  [CountryCode.Thailand]: {
    imageSrc: '/images/thailand.jpg',
    sourceUrl: 'https://unsplash.com/@sumit_ac',
    sourceText: 'Photo by Sumit Chinchane on Unsplash'
  },
  [CountryCode.India]: {
    imageSrc: '/images/india.jpg',
    sourceUrl: 'https://unsplash.com/@littlej1428',
    sourceText: 'Photo by Julian Yu on Unsplash'
  },
  [CountryCode.Singapore]: {
    imageSrc: '/images/singapore.jpg',
    sourceUrl: 'https://unsplash.com/@coleenr',
    sourceText: 'Photo by Coleen Rivas on Unsplash'
  }
}
