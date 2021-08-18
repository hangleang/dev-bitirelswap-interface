import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { ChainId } from '@bitriel/bitrielswap-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'

export {
  MULTICALL_ADDRESS,
  QUOTER_ADDRESSES,
  NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  SWAP_ROUTER_ADDRESS as SWAP_ROUTER_ADDRESSES,
  MIGRATOR_ADDRESS as V3_MIGRATOR_ADDRESSES,
  FACTORY_ADDRESS as V3_CORE_FACTORY_ADDRESSES,
} from '@bitriel/bitrielswap-sdk'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const BTR_ADDRESS: AddressMap = {
  [ChainId.BSC]: '0x288d3a87a87c284ed685e0490e5c4cc0883a060a',
  [ChainId.BSC_TESTNET]: '0xDED2DEDf0cF48033cb50a4EF3e7587bAbc227151',
  [ChainId.SEL_TESTNET]: '0xd60ccFdf97985c2920d8E734c6352Aec85A9a4f3',
}
export const V2_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V2_FACTORY_ADDRESS),
  [ChainId.BSC_TESTNET]: '0x927A548cD60c0A4b410c32178A88454A70B22fea',
}
export const V2_ROUTER_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'),
  [ChainId.BSC_TESTNET]: '0xDE0D6363aA17CA3ecCa3E6Bf4da90f5c904ED996',
}

/**
 * The older V0 governance account
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The latest governor alpha that is currently admin of timelock
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.GÖRLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
