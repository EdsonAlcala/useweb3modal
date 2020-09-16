
import { walletconnect } from '../../connectors'

import { IWalletProvider } from "../types";

import WalletConnectLogo from './walletConnectIcon.svg';

export const WALLET_CONNECT: IWalletProvider = {
    id: "wallet-connect",
    name: "WalletConnect",
    logo: WalletConnectLogo,
    type: "web",
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    href: null,
    color: '#4196FC',
    mobile: true,
    connector: walletconnect
}