# dLottery

A smart contract driven lottery, the owner can start and end lottery, other addresses can enter lottery paying an entry ETH fee, the sum of all entry fees will be automatically dressed to the lottery winner when the owner ends lottery. The lottery uses Chainlink VRFv2 contracts to fetch verifiable on-chain results.

## Features

**Lottery Contract**
- Get Entry Fee
- Enter Lottery
- Start Lottery
- End Lottery

**External Contracts**
- Openzeppelin Contracts for owner secure management.
- Chainlink VRFv2 Contracts for On-Chain results randomization.

## Technologies

- [Solidity](https://docs.soliditylang.org/) 
- [Truffle](https://trufflesuite.com/)
- [Chainlink VRFv2](https://docs.chain.link/docs/chainlink-vrf/)
- [Openzeppelin](https://docs.openzeppelin.com/contracts)

## Dependencies

```bash
npm install @chainlink/contracts --save
npm install @openzeppelin/contracts --save
npm install truffle --save
```
- In order to use Chainlink VRFv2, you should go to [Subscription](https://vrf.chain.link/) and follow the step by step to configure your Subscriptor, when your contract is deployed add it to Consumers and deposit some Testnet $LINK to the suscriber.

## Compile & Deploy

```bash
truffle compile
truffle migrate --reset
```

## License

The MIT License (MIT). Please see [License File](https://spdx.org/licenses/MIT.html) for more information.
