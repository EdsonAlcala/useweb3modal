import { METAMASK } from './metamask'
import { PORTIS } from './portis'
import { FORTMATIC } from './fortmatic'

export const getAllWalletProviders = () => {
    return [
        METAMASK,
        PORTIS,
        FORTMATIC
    ]
}