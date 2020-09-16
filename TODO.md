# useWeb3Wallet

- add instructions for environment variables
- Create circleci
- account details section
- account header
- publish
- add example
- publish
- push to github
- extend hook to include web3-react properties

- Review this code https://github.com/iearn-finance/ygov-finance/blob/master/src/components/unlock/hooks.jsx
https://github.com/iearn-finance/ygov-finance/blob/master/src/components/unlock/unlock.jsx

- create spending view
- Web3ReactManager
- eagerconnect?
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

- extend the api for connect button and account status? 

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