import { Web3Provider } from '@ethersproject/providers'
import { ChainId } from '@bitriel/bitrielswap-sdk'
import { BscConnector } from '@binance-chain/bsc-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { PortisConnector } from '@web3-react/portis-connector'

import getLibrary from '../utils/getLibrary'
import { FortmaticConnector } from './Fortmatic'
import { NetworkConnector } from './NetworkConnector'

import BITRIELSWAP_LOGO from '../assets/svg/logo.svg'

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID
const WALLETCONNECT_BRIDGE_URL = process.env.REACT_APP_WALLETCONNECT_BRIDGE_URL

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

const NETWORK_URLS: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [ChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  [ChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [ChainId.GÖRLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [ChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [ChainId.ARBITRUM_ONE]: `https://arb1.arbitrum.io/rpc`,
  [ChainId.ARBITRUM_RINKEBY]: `https://rinkeby.arbitrum.io/rpc`,
  [ChainId.OPTIMISM]: `https://mainnet.optimism.io`,
  [ChainId.OPTIMISTIC_KOVAN]: `https://kovan.optimism.io`,
  [ChainId.BSC]: `https://bsc-dataseed.binance.org`,
  [ChainId.BSC_TESTNET]: `https://data-seed-prebsc-1-s1.binance.org:8545`,
  [ChainId.INDRA_TESTNET]: `https://indranet-rpc.selendra.org/`,
}

const SUPPORTED_CHAIN_IDS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.KOVAN,
  ChainId.GÖRLI,
  ChainId.RINKEBY,
  ChainId.ROPSTEN,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_RINKEBY,
  ChainId.OPTIMISM,
  ChainId.OPTIMISTIC_KOVAN,
  ChainId.BSC,
  ChainId.BSC_TESTNET,
  ChainId.INDRA_TESTNET,
]

export const network = new NetworkConnector({
  defaultChainId: 1,
  urls: NETWORK_URLS,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 15000,
})

// mainnet only
export const fortmatic = new FortmaticConnector({
  apiKey: FORMATIC_KEY ?? '',
  chainId: ChainId.MAINNET,
})

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID ?? '',
  networks: [ChainId.MAINNET],
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[ChainId.MAINNET],
  appName: 'BitrielSwap',
  appLogoUrl: BITRIELSWAP_LOGO,
})

// binance only
export const binance = new BscConnector({ supportedChainIds: [ChainId.BSC] })
