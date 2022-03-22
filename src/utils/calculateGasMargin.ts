import { BigNumber } from '@ethersproject/bignumber'
import { ChainId } from '@bitriel/bitrielswap-sdk'

// add 20%
export function calculateGasMargin(chainId: ChainId | number | undefined, value: BigNumber): BigNumber {
  // if (chainId && chainId === ChainId.INDRA_TESTNET) {
  //   return BigNumber.from(4610146)
  // } else {
  return chainId && (chainId === ChainId.OPTIMISM || chainId === ChainId.OPTIMISTIC_KOVAN)
    ? value
    : value.mul(BigNumber.from(10000 + 2000)).div(BigNumber.from(10000))
  // }
}
