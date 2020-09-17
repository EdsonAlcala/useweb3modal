# useWeb3Wallet

- add pending view
- add error view
- close modal when successful connection
- account details section
- account header

- create spending view

- active, account, connector, activate, error

- active state?

- Define the other views (account view, connect view)

Views
  Account (wallet)
  Pending (wallet)

const WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending'
}

const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT)

const [pendingWallet, setPendingWallet] = useState<AbstractConnector | undefined>()

- Define error views

const [pendingError, setPendingError] = useState<boolean>()

- fix window types

- make it themable

-   error view

 if (error) {
      return (
        <UpperSection>
          <CloseIcon onClick={toggleWalletModal}>
            <CloseColor />
          </CloseIcon>
          <HeaderRow>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'}</HeaderRow>
          <ContentWrapper>
            {error instanceof UnsupportedChainIdError ? (
              <h5>Please connect to the appropriate Ethereum network.</h5>
            ) : (
                'Error connecting. Try refreshing the page.'
              )}
          </ContentWrapper>
        </UpperSection>
      )
    }

Future

- optimize size either by disabling web3 react dependencies or bundling different? 
...Analyse package

Review
- Web3ReactManager
- eagerconnect?
- Review this code https://github.com/iearn-finance/ygov-finance/blob/master/src/components/unlock/hooks.jsx
- https://github.com/iearn-finance/ygov-finance/blob/master/src/components/unlock/unlock.jsx
