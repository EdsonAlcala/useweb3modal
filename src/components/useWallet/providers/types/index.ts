import { AbstractConnector } from "@web3-react/abstract-connector"

type Image = string

type WalletType = "web"

export interface IWalletProvider {
    id: string;
    name: string;
    description?: string;
    type: WalletType;
    logo: Image;
    href: string | null
    color: string
    mobile?: boolean // to review, taken from uniswap
    mobileOnly?: boolean // to review, taken from uniswap
    connector?: AbstractConnector // to review, taken from uniswap
}
