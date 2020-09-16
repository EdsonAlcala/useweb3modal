import { injected } from '../../connectors'

import { IWalletProvider } from '../types'

import MetamaskLogo from './metamaskIcon.svg'

export const METAMASK: IWalletProvider = {
    id: 'metamask',
    name: 'Metamask',
    logo: MetamaskLogo,
    type: 'web',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
    connector: injected,
}
