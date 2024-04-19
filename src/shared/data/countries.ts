import { CountryCode } from '@/shared/types/CountryCode'
import { getCountryFlag } from '@/shared/utils/unicode'

export const countryCodeToNameMap = {
  [CountryCode.Thailand]: `${getCountryFlag(CountryCode.Thailand)} Thailand`,
  [CountryCode.India]: `${getCountryFlag(CountryCode.India)} India`,
  [CountryCode.Singapore]: `${getCountryFlag(CountryCode.Singapore)} Singapore`
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
