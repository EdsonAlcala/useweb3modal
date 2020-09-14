# useWeb3Wallet

- Create README.md

- Create scripts

"clean": "rm -rf ./lib",
"prebuild": "yarn clean",
"build": "tsc --build \"./tsconfig.json\"",
"copy-files": "copyfiles -u 1 src/style/base.css lib/",
"postbuild": "yarn run copy-files",

- Create circleci

- account details section

- account header

- create spending view

- Extend or Create wrapper of web3-react for the other properties
- Web3ReactManager
- eagerconnect?

to have something like const { isConnected } = useWalletProvider()

active, account, connector, activate, error
- active state?
- Define the other views (account view, connect view)

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

# API Design

setup providers (add extra propertiess and setup connector inside the provider?)
What about the WalletInfo interface? What is a provider and what is a wallet?

 Otherwise I will just from here getAllWalletProviderss and then each provider will have the connector....s

Then inside modal and inside embedded wallet
const { active, account, connector, activate, error } = useWeb3React()

  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT)

  const [pendingWallet, setPendingWallet] = useState<AbstractConnector | undefined>()

  const [pendingError, setPendingError] = useState<boolean>()

check network connector

- do wallet connect
- do wallet link

