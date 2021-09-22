import { ChainId } from '@bitriel/bitrielswap-sdk'
import { L2_CHAIN_IDS, L2_INFO, NETWORK_ICON, NETWORK_LABELS } from 'constants/chains'
import { useEffect, useRef, useState } from 'react'
import { ArrowDownCircle } from 'react-feather'
import styled, { css } from 'styled-components'
import NetworkModel from '../NetworkModal'
import { Trans } from '@lingui/macro'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useActiveWeb3React } from 'hooks/web3'
import { ExternalLink, MEDIA_WIDTHS } from 'theme'
import { switchToNetwork } from 'utils/switchToNetwork'
import { ApplicationModal } from 'state/application/actions'
import { useNetworkModalToggle, useModalOpen, useToggleModal } from 'state/application/hooks'

const StopOverflowQuery = `@media screen and (min-width: ${MEDIA_WIDTHS.upToMedium}px) and (max-width: ${
  MEDIA_WIDTHS.upToMedium + 400
}px)`

const BaseWrapper = css`
  position: relative;
  ${StopOverflowQuery} {
    position: absolute;
    top: 80px;
    right: 20px;
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 12px;
  `};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0 0.5rem 0 0;
    width: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  `};
`
const L2Wrapper = styled.div`
  ${BaseWrapper}
`
const BaseMenuItem = css`
  align-items: center;
  background-color: transparent;
  border-radius: 12px;
  color: ${({ theme }) => theme.text2};
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  :hover {
    color: ${({ theme }) => theme.text1};
    text-decoration: none;
  }
`
const DisabledMenuItem = styled.div`
  ${BaseMenuItem}
  align-items: center;
  background-color: ${({ theme }) => theme.bg2};
  cursor: auto;
  display: flex;
  font-size: 10px;
  font-style: italic;
  justify-content: center;
  :hover,
  :active,
  :focus {
    color: ${({ theme }) => theme.text2};
  }
`

const Icon = styled.img`
  width: 23px;
`
const L1Tag = styled.div`
  color: #c4d9f8;
  opacity: 40%;
`
const L2Tag = styled.button<{ chainId: ChainId }>`
  background-color: ${({ chainId }) => (chainId === ChainId.ARBITRUM_ONE ? '#28A0F0' : '#FF0420')};
  border-radius: 6px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
`
const MenuFlyout = styled.span`
  background-color: ${({ theme }) => theme.bg2};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 20px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  left: 0rem;
  top: 3rem;
  z-index: 100;
  width: 237px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -10.25rem;
  `};
  > {
    padding: 12px;
  }
  > :not(:first-child) {
    margin-top: 8px;
  }
  > :not(:last-child) {
    margin-bottom: 8px;
  }
  ${StopOverflowQuery} {
    left: unset;
    right: 0rem;
  }
`
const LinkOutCircle = styled(ArrowDownCircle)`
  transform: rotate(230deg);
  width: 20px;
  height: 20px;
`
const MenuItem = styled(ExternalLink)`
  ${BaseMenuItem}
`
const ButtonMenuItem = styled.button`
  ${BaseMenuItem}
  border: none;
  outline: none;
  box-shadow: none;
`
const NetworkInfo = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.text1};
  display: flex;
  flex-direction: row;
  font-weight: 500;
  height: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 8px;
  width: max-content;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg3};
  }
`
const NetworkLabel = styled.span`
  flex: 1 1 auto;
  padding-left: 7px;
`

function Web3Network(): JSX.Element | null {
  const { chainId, library } = useActiveWeb3React()
  const toggleNetworkModal = useNetworkModalToggle()

  const node = useRef<HTMLDivElement>(null)
  const open = useModalOpen(ApplicationModal.ARBITRUM_OPTIONS)
  const toggle = useToggleModal(ApplicationModal.ARBITRUM_OPTIONS)
  useOnClickOutside(node, open ? toggle : undefined)

  const [implements3085, setImplements3085] = useState(false)
  useEffect(() => {
    // metamask is currently the only known implementer of this EIP
    // here we proceed w/ a noop feature check to ensure the user's version of metamask supports network switching
    // if not, we hide the UI
    if (!library?.provider?.request || !chainId || !library?.provider?.isMetaMask) {
      return
    }
    switchToNetwork({ library, chainId })
      .then((x) => (x != null ? x : setImplements3085(true)))
      .catch(() => setImplements3085(false))
  }, [library, chainId])

  if (!chainId || !NETWORK_LABELS[chainId] || !library) {
    return null
  }

  const L2_TAG = () => {
    if (L2_CHAIN_IDS.includes(chainId)) {
      const info = L2_INFO[chainId]
      return (
        <L2Wrapper ref={node}>
          <L2Tag onClick={toggle} chainId={chainId}>
            L2
          </L2Tag>
          {open && (
            <MenuFlyout>
              <MenuItem href={info.bridge}>
                <div>
                  <Trans>{NETWORK_LABELS[chainId]} Bridge</Trans>
                </div>
                <LinkOutCircle />
              </MenuItem>
              <MenuItem href={info.explorer}>
                <div>
                  <Trans>{NETWORK_LABELS[chainId]} Explorer</Trans>
                </div>
                <LinkOutCircle />
              </MenuItem>
              <MenuItem href={info.docs}>
                <div>
                  <Trans>Learn more</Trans>
                </div>
                <LinkOutCircle />
              </MenuItem>
              {implements3085 ? (
                <ButtonMenuItem onClick={() => switchToNetwork({ library, chainId: ChainId.MAINNET })}>
                  <div>
                    <Trans>Switch to Ethereum</Trans>
                  </div>
                  <L1Tag>L1</L1Tag>
                </ButtonMenuItem>
              ) : (
                <DisabledMenuItem>
                  <Trans>Change your network to go back to L1</Trans>
                </DisabledMenuItem>
              )}
            </MenuFlyout>
          )}
        </L2Wrapper>
      )
    } else {
      return null
    }
  }

  return (
    <L2Wrapper>
      <NetworkInfo onClick={() => toggleNetworkModal()}>
        <Icon className="rounded-lg" src={NETWORK_ICON[chainId as ChainId]} alt="Switch Network" />
        <NetworkLabel className="font-semibold">{NETWORK_LABELS[chainId]}</NetworkLabel>
      </NetworkInfo>
      {L2_CHAIN_IDS.includes(chainId) && L2_TAG()}
      <NetworkModel />
    </L2Wrapper>
  )
}

export default Web3Network
