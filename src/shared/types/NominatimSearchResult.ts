import type { NominatimAddress } from '@/shared/types/NominatimAddress'

export type NominatimSearchResult = {
  place_id: number
  licence: string
  osm_type: string
  osm_id: number
  lat: string
  lon: string
  category: string
  type: string
  place_rank: number
  importance: number
  addresstype: string
  name: string
  display_name: string
  address?: NominatimAddress
  boundingbox: string[]
}
