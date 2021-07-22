import { ChainId } from 'dev-bitrielswap-sdk'
import BSC from './bsc'
import KOVAN from './kovan'
import MAINNET from './mainnet'

export type ChainlinkMappingList = {
  readonly [address: string]: {
    from: string
    to: string
    decimals: number
    fromDecimals: number
    toDecimals: number
    warning?: string
    address?: string
  }
}

export const CHAINLINK_MAPPING: {
  [chainId in ChainId]?: ChainlinkMappingList
} = {
  [ChainId.MAINNET]: MAINNET,
  [ChainId.KOVAN]: KOVAN,
  [ChainId.BSC]: BSC,
}
