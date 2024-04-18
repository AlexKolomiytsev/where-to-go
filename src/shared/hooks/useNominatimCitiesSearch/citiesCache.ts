import type { CountryCode } from '@/shared/types/CountryCode'
import type { NominatimSearchResult } from '@/shared/types/NominatimSearchResult'

export const citiesCache = new Map<string, NominatimSearchResult[]>()

export const createCitiesCacheKey = (searchQuery: string, selectedCountry: CountryCode) =>
  `${searchQuery}_${selectedCountry}`
