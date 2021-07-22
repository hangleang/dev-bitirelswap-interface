import { ChainId } from 'dev-bitrielswap-sdk'

const Arbitrum = '/images/networks/arbitrum-network.svg'
const Bsc = '/images/networks/bsc-network.jpeg'
const Goerli = '/images/networks/goerli-network.jpeg'
const Kovan = '/images/networks/kovan-network.jpeg'
const Mainnet = '/images/networks/mainnet-network.jpeg'
const Rinkeby = '/images/networks/rinkeby-network.jpeg'
const Ropsten = '/images/networks/ropsten-network.jpeg'
const Optimism = '/images/networks/optimism-network.png'

export const L2_CHAIN_IDS = [ChainId.ARBITRUM_ONE, ChainId.OPTIMISM]

export const L2_INFO: Record<number, { bridge: string; docs: string; explorer: string; logoUrl: string }> = {
  [ChainId.OPTIMISM]: {
    bridge: 'https://gateway.optimism.io/',
    docs: 'https://optimism.io/',
    explorer: 'https://optimistic.etherscan.io/',
    logoUrl: Optimism,
  },
  [ChainId.ARBITRUM_ONE]: {
    bridge: 'https://bridge.arbitrum.io/',
    explorer: 'https://explorer.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    logoUrl: Arbitrum,
  },
}

export const NETWORK_LABELS: { [chainId in ChainId | number]: string } = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.ARBITRUM_ONE]: 'Arbitrum',
  [ChainId.ARBITRUM_RINKEBY]: 'Arbitrum Rinkeby',
  [ChainId.OPTIMISM]: 'Optimism',
  [ChainId.OPTIMISTIC_KOVAN]: 'Optimism Kovan',
}

export const NETWORK_ICON: { [chainId in ChainId | number]: string } = {
  [ChainId.MAINNET]: Mainnet,
  [ChainId.ROPSTEN]: Ropsten,
  [ChainId.RINKEBY]: Rinkeby,
  [ChainId.GÖRLI]: Goerli,
  [ChainId.KOVAN]: Kovan,
  [ChainId.BSC]: Bsc,
  [ChainId.BSC_TESTNET]: Bsc,
  [ChainId.ARBITRUM_ONE]: Arbitrum,
  [ChainId.ARBITRUM_RINKEBY]: Arbitrum,
  [ChainId.OPTIMISM]: Optimism,
  [ChainId.OPTIMISTIC_KOVAN]: Optimism,
}

export const BLOCKCHAIN: { [chainId in ChainId | number]: string } = {
  [ChainId.MAINNET]: 'ethereum',
  [ChainId.BSC]: 'smartchain',
  // [ChainId.CELO]: 'celo',
  // [ChainId.FANTOM]: 'fantom',
  // [ChainId.HARMONY]: 'harmony',
  // [ChainId.MATIC]: 'polygon',
  // [ChainId.XDAI]: 'xdai',
  // [ChainId.OKEX]: 'okex',
}

export const MAINNET_AND_TESTNETS = [ChainId.MAINNET, ChainId.ROPSTEN, ChainId.RINKEBY, ChainId.GÖRLI, ChainId.KOVAN]
