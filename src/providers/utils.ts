import { METAMASK } from './metamask'
import { PORTIS } from './portis'
import { FORTMATIC } from './fortmatic'
import { WALLET_CONNECT } from './wallet-connect'
import { COINBASE_LINK, WALLET_LINK } from './coinbase-wallet'

export const getAllWalletProviders = () => {
    return [
        METAMASK,
        WALLET_CONNECT,
        COINBASE_LINK,
        WALLET_LINK,
        FORTMATIC,
        PORTIS
    ]
}