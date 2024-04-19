export const getCountryFlag = (countryCode: string) => {
  return getRegionalIndicatorSymbol(countryCode[0]) + getRegionalIndicatorSymbol(countryCode[1])
}

const getRegionalIndicatorSymbol = (letter: string) => {
  return String.fromCodePoint(0x1f1e6 - 65 + letter.toUpperCase().charCodeAt(0))
}
