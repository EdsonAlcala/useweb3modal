import { fortmatic } from '../../connectors'

import { IWalletProvider } from "../types";

// @ts-ignore
import FortmaticLogo from "./fortmaticIcon.png"

export const FORTMATIC: IWalletProvider = {
    id: "fortmatic",
    name: "Fortmatic",
    logo: FortmaticLogo,
    type: "web",
    description: "Login using Fortmatic hosted wallet",
    connector: fortmatic,
    href: null,
    mobile: true,
    color: "#6748FF"
};
