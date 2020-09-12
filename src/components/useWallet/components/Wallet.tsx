import React from 'react'
import styled from 'styled-components';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

import { WalletProviderGrid } from './WalletProviderGrid';

export interface IWalletProps {
  trigger: () => void
  testId: string
}

const HeaderRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 1rem;
  font-weight: 500;
  padding: 1rem;
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 1rem`};
`

const Title = styled.div`

`

interface ModalErrorProps {
  error: Error
}

const ModalErrorView: React.FC<ModalErrorProps> = ({ error }) => {
  return (
    <React.Fragment>
      {/* <HeaderRow>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'}</HeaderRow> */}
      {/* <ContentWrapper> */}
      {error instanceof UnsupportedChainIdError ? (
        <h5>Please connect to the appropriate Ethereum network.</h5>
      ) : (
          'Error connecting. Try refreshing the page.'
        )
      }
      {/* </ContentWrapper> */}
    </React.Fragment>
    // <UpperSection>
    //     <CloseIcon onClick={toggleWalletModal}>
    //         <CloseColor />
    //     </CloseIcon>
    //     <HeaderRow>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'}</HeaderRow>
    //     <ContentWrapper>

    //     </ContentWrapper>
    // </UpperSection>
  )
}

export const Wallet = () => {
  const { active, account, connector, activate, error } = useWeb3React()

  return (
    <React.Fragment>
      <HeaderRow>
        {!error && <Title>Connect to a wallet</Title>}
        {error && <Title>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'}</Title>}
      </HeaderRow>
      <ContentWrapper>
        {error && <ModalErrorView error={error} />}
        {!error && <WalletProviderGrid />}
      </ContentWrapper>
    </React.Fragment>
  )
}
