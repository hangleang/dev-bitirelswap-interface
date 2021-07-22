import { Currency, Token } from '@uniswap/sdk-core'
import { ChainId, WNATIVE } from 'dev-bitrielswap-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components/macro'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/wrappedTokenInfo'
import Logo from '../Logo'
import { BLOCKCHAIN } from 'constants/chains'
import { constructSameAddressMap } from 'utils/constructSameAddressMap'

export const getTokenLogoURL = (address: string, chainId?: ChainId) => {
  return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${
    BLOCKCHAIN[chainId as ChainId]
  }/assets/${address}/logo.png`
}

function getCurrencyLogoUrls(currency: Token) {
  const urls = []

  if (currency.chainId in BLOCKCHAIN) {
    urls.push(
      `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
        currency.address
      }/logo.png`
    )
  }

  return urls
}

const EthereumLogo = 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png'
const BinanceLogo = 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png'

const logo: { readonly [chainId in ChainId | number]: string } = {
  ...constructSameAddressMap(EthereumLogo as string, [
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
  ]),
  [ChainId.BSC]: BinanceLogo,
  [ChainId.BSC_TESTNET]: BinanceLogo,
}

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.white};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
  ...rest
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )

  const srcs = useMemo(() => {
    if (!currency) return []

    if (currency.isNative || currency.equals(WNATIVE[currency.chainId])) {
      return [logo[currency.chainId]]
    }

    if (currency.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls]
      }
      return defaultUrls
    }
    return []
  }, [currency, uriLocations])

  return <StyledLogo srcs={srcs} size={size} alt={`${currency?.symbol ?? 'token'} logo`} style={style} {...rest} />
}
