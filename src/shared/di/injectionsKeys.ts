import type { InjectionKey, Ref } from 'vue'
import type { CountryCode } from '@/shared/types/CountryCode'

export const selectedCountryInjectionKey: InjectionKey<Readonly<Ref<CountryCode>>> = Symbol(
  'selectedCountryInjectionKey'
)
