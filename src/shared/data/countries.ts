import { CountryCode } from '@/shared/types/CountryCode'

const countryCodeToNameMap = {
  [CountryCode.Thailand]: 'Thailand',
  [CountryCode.India]: 'India',
  [CountryCode.Singapore]: 'Singapore'
}

export const countriesOptions = [
  CountryCode.Thailand,
  CountryCode.India,
  CountryCode.Singapore
].map((countryCode) => {
  return {
    value: countryCode,
    label: countryCodeToNameMap[countryCode]
  }
})
