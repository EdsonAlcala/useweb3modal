import { portis } from '../../connectors'

import { IWalletProvider } from "../types";

import PortisLogo from './portisIcon.svg';

export const PORTIS: IWalletProvider = {
    id: "portis",
    name: "Portis",
    logo: PortisLogo,
    type: "web",
    description: "Login using Portis hosted wallet",
    href: null,
    color: '#4A6C9B',
    mobile: true,
    connector: portis
}