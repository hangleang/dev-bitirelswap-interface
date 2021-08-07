import { ChainId } from '@bitriel/bitrielswap-sdk'
import { MAINNET_AND_TESTNETS } from 'constants/chains'

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return MAINNET_AND_TESTNETS.concat(additionalNetworks).reduce<{ [chainId: number]: T }>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}
