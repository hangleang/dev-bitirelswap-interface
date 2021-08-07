import { useActiveWeb3React } from 'hooks/web3'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { WNATIVE } from '@bitriel/bitrielswap-sdk'
import AddLiquidity from './index'

export function RedirectDuplicateTokenIds(
  props: RouteComponentProps<{ currencyIdA: string; currencyIdB: string; feeAmount?: string }>
) {
  const {
    match: {
      params: { currencyIdA, currencyIdB },
    },
  } = props

  const { chainId } = useActiveWeb3React()

  // prevent weth + eth
  const isETHOrWETHA = currencyIdA === 'ETH' || (chainId !== undefined && currencyIdA === WNATIVE[chainId]?.address)
  const isETHOrWETHB = currencyIdB === 'ETH' || (chainId !== undefined && currencyIdB === WNATIVE[chainId]?.address)

  if (
    currencyIdA &&
    currencyIdB &&
    (currencyIdA.toLowerCase() === currencyIdB.toLowerCase() || (isETHOrWETHA && isETHOrWETHB))
  ) {
    return <Redirect to={`/add/${currencyIdA}`} />
  }
  return <AddLiquidity {...props} />
}
