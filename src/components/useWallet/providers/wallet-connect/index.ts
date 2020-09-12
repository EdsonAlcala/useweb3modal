
//   WALLET_LINK: {
//     connector: walletlink,
//     name: 'Coinbase Wallet',
//     iconName: 'coinbaseWalletIcon.svg',
//     description: 'Use Coinbase Wallet app on mobile device',
//     href: null,
//     color: '#315CF5'
//   },
//   COINBASE_LINK: {
//     name: 'Open in Coinbase Wallet',
//     iconName: 'coinbaseWalletIcon.svg',
//     description: 'Open in Coinbase Wallet app.',
//     href: 'https://go.cb-w.com/mtUDhEZPy1',
//     color: 
//     mobile: true,
//     mobileOnly: true
//   },

import { walletconnect } from '../../connectors'

import { IWalletProvider } from "../types";

// @ts-ignore
import WalletConnectLogo from './walletConnectIcon.png';

export const WALLET_CONNECT: IWalletProvider = {
    id: "wallet_connect",
    name: "WalletConnect",
    logo: WalletConnectLogo,
    type: "web",
    description: "Login using Portis hosted wallet",
    href: null,
    color: '#315CF5',
    mobile: true,
    connector: walletconnect
}

// WALLET_CONNECT: {
//     connector: walletconnect,
//     name: 'WalletConnect',
//     iconName: 'walletConnectIcon.svg',
//     description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
//     href: null,
//     color: '#4196FC',
//     mobile: true
//   },