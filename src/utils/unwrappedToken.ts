import { Currency } from '@uniswap/sdk-core'
import { NATIVE, WNATIVE, ChainId } from 'dev-bitrielswap-sdk'
import { supportedChainId } from './supportedChainId'

export function unwrappedToken(currency: Currency): Currency {
  if (currency.isNative) return currency
  const formattedChainId = supportedChainId(currency.chainId)
  if (formattedChainId && currency.equals(WNATIVE[formattedChainId])) return NATIVE[currency.chainId as ChainId]
  return currency
}
