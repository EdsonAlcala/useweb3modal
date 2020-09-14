import React from 'react'

import { ModalWallet } from '../components/ModalWallet'

export default {
    title: 'Components/ModalWallet',
    component: ModalWallet
};

const ModalOpen: React.FC<{}> = () => {
    return (<ModalWallet isOpen={true} onClose={() => console.log("on close")} />)
}

export { ModalOpen }