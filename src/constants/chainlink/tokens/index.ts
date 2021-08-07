import { ChainId } from '@bitriel/bitrielswap-sdk'

import BSC from './bsc'
import KOVAN from './kovan'
import MAINNET from './mainnet'

export type ChainlinkToken = {
  symbol: string
  name: string
  address: string
  decimals: number
}

export const CHAINLINK_TOKENS: { [chainId in ChainId]?: ChainlinkToken[] } = {
  [ChainId.MAINNET]: MAINNET,
  [ChainId.KOVAN]: KOVAN,
  [ChainId.BSC]: BSC,
}
