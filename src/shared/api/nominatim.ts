import createApiRequest from '@/shared/api/createApiRequest'
import type { NominatimSearchResult } from '@/shared/types/NominatimSearchResult'

const nominatimApi = createApiRequest('https://nominatim.openstreetmap.org')

export const getNominatimSearchCities = nominatimApi<
  NominatimSearchResult[],
  void,
  {
    format?: string
    addressdetails: 1 | 0
    country?: string
    city: string
    countrycodes: string[]
    limit?: number
  },
  void
>({
  url: '/search',
  opts: {
    method: 'GET'
  },
  defaultParams: {
    queryParams: {
      format: 'jsonv2',
      limit: 40
    }
  }
})
