# Web3 React Wallet

Web3 React with wallet and modal wallet integrated.

This is a Wrapper around Web3-React, the library contains a set of hooks that extend web3 react functionality and provide
custom hooks to add modal wallet and wallet connections.

### Hooks

Same as Web3 React but we include an additional hook:

- useModalWallet
- useWallet

Example:

In order to make it work you need to wrap your components with the Web3WalletProvider

### Configuration

The web3-react-wallet exposes a ProviderOptions interface.

```
const options: any = {
    formaticKey: "XX",
    portisId: "XX",
    networkUrl: "XX",
    chainId: "1"
}

 <ModalWalletProvider options={options}>
    // components
  </ModalWalletProvider>
```

### Getting Started

```
> yarn add web3-react-wallet

or 

> npm install web3-react-wallet

```

### Development

```
> git clone git@github.com:EdsonAlcala/web3-react-wallet.git

> yarn

```

### Commands

```
> yarn start:dev

> yarn compile

> yarn storybook

```

### Roadmap

- Add ledger support [ ]

- Allow users to configure views [ ]

- Publish storybook as github page [ ]

- Improve theming interface and docs [ ]

- Check Jest integration https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#plugins

