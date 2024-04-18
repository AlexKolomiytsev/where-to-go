import { getNominatimSearchCities } from '@/shared/api/nominatim'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { NominatimSearchResult } from '@/shared/types/NominatimSearchResult'
import {
  citiesCache,
  createCitiesCacheKey
} from '@/shared/hooks/useNominatimCitiesSearch/citiesCache'
import { CountryCode } from '@/shared/types/CountryCode'

const useNominatimCitiesSearch = (searchQuery: Ref<string>, selectedCountry: Ref<CountryCode>) => {
  const cities = ref<NominatimSearchResult[]>([])
  const isLoading = ref(false)
  const error = ref()

  watch([searchQuery, selectedCountry], async () => {
    try {
      const cacheKey = createCitiesCacheKey(searchQuery.value, selectedCountry.value)

      if (!searchQuery.value) {
        cities.value = []
        return
      }

      if (citiesCache.has(cacheKey)) {
        cities.value = citiesCache.get(cacheKey) as NominatimSearchResult[]
        return
      }

      isLoading.value = true

      const searchResults = await getNominatimSearchCities({
        queryParams: {
          addressdetails: 1,
          city: searchQuery.value,
          countrycodes: [selectedCountry.value]
        }
      })

      citiesCache.set(cacheKey, searchResults.data)
      cities.value = searchResults.data
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      isLoading.value = false
    }
  })

  return {
    cities,
    isLoading,
    error
  }
}

export default useNominatimCitiesSearch
