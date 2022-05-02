# dLottery

A smart contract driven lottery, the owner can start and end lottery, other addresses can enter lottery paying an entry ETH fee, the sum of all entry fees will be automatically dressed to the lottery winner when the owner ends lottery. The lottery uses Chainlink VRF contracts to fetch verifiable on-chain results.

## Features

**Lottery Contract**
- Get Entry Fee
- Enter Lottery
- Start Lottery
- End Lottery

**Lottery Contract**
- Openzeppelin Contracts for owner secure management.
- Chainlink VRF Contracts for On-Chain results randomization.

## Technologies

- [Solidity](https://docs.soliditylang.org/) 
- [Truffle](https://trufflesuite.com/)
- [Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf/)
- [Openzeppelin](https://docs.openzeppelin.com/contracts)

## Dependencies

```bash
npm install @chainlink/contracts --save
npm install @openzeppelin/contracts --save
npm install truffle --save
```

## Run App

```bash
truffle compile
truffle migrate --reset
```

## License

The MIT License (MIT). Please see [License File](https://spdx.org/licenses/MIT.html) for more information.
