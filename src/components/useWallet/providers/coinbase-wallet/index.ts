import { walletlink } from '../../connectors'

import { IWalletProvider } from "../types";

// @ts-ignore
import CoinbaseWalletLogo from './coinbaseWalletIcon.svg';

export const WALLET_LINK: IWalletProvider = {
    id: "coinbase-wallet",
    name: "Coinbase Wallet",
    logo: CoinbaseWalletLogo,
    type: "web",
    description: "Use Coinbase Wallet app on mobile device",
    href: null,
    color: '#315CF5',
    connector: walletlink
}

export const COINBASE_LINK: IWalletProvider = {
    id: "wallet_connect",
    name: "Open in Coinbase Wallet",
    logo: CoinbaseWalletLogo,
    description: "Open in Coinbase Wallet app.",
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    mobile: true,
    type: "mobile",
    connector: walletlink,
    mobileOnly: true,
    color: '#315CF5'
}