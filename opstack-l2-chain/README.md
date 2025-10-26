# OPstack L2 Chain

This project implements a Layer 2 (L2) blockchain using the OPstack infrastructure. It is designed to facilitate efficient asset transfers between Layer 1 (L1) and Layer 2, with a focus on utilizing stablecoins for network fees.

## Project Structure

- **contracts/**: Contains the smart contracts for bridging assets and managing stablecoin transactions.
  - `L1Bridge.sol`: Smart contract for bridging assets from Layer 1 to Layer 2.
  - `L2StandardBridge.sol`: Implements standard bridge functionality for asset transfers.
  - `StableCoin.sol`: Defines the stablecoin contract used for paying network fees.
  - `ERC20Portal.sol`: Provides a portal for transferring ERC20 tokens between chains.

- **src/**: Source code for the application.
  - `index.ts`: Entry point for the application.
  - `deploy/deploy.ts`: Deployment script for smart contracts.
  - `services/fee-processor.ts`: Logic for processing network fees with stablecoin.
  - `types/index.d.ts`: Type definitions and interfaces.

- **config/**: Configuration files for the project.
  - `chain.spec.json`: Configuration for the Layer 2 chain.
  - `opstack-config.yaml`: OPstack infrastructure settings.
  - `fees.stablecoin.json`: Fee structure for stablecoin transactions.

- **infra/**: Infrastructure as code.
  - `terraform/main.tf`: Terraform configuration for deploying resources.
  - `docker/docker-compose.yml`: Docker services configuration.

- **packages/**: Additional packages and tooling.
  - `op-node-config/package.json`: Configuration for the op-node-config package.
  - `tooling/`: Additional tooling related to the project.

- **scripts/**: Utility scripts for project management.
  - `bootstrap.sh`: Initializes the project environment.
  - `start-node.sh`: Starts the blockchain node.

- **test/**: Test files for the project.
  - `contracts/stablecoin.test.ts`: Unit tests for the stablecoin contract.
  - `integration/`: Integration tests.

- **.github/**: GitHub workflows for CI/CD.
  - `workflows/ci.yml`: Continuous integration workflow.

- **Configuration Files**:
  - `hardhat.config.ts`: Hardhat configuration for network settings.
  - `foundry.toml`: Foundry configuration settings.
  - `package.json`: NPM configuration for dependencies.
  - `tsconfig.json`: TypeScript configuration.

## Features

- **Stablecoin Payments**: Network fees are paid using a stablecoin, ensuring predictable costs for users.
- **Cross-Chain Transfers**: The project supports transferring assets between Layer 1 and Layer 2 seamlessly.
- **Modular Architecture**: The codebase is organized into contracts, services, and configurations for easy maintenance and scalability.

## Getting Started

To get started with the OPstack L2 Chain project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd opstack-l2-chain
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Initialize the project:
   ```
   ./scripts/bootstrap.sh
   ```

4. Deploy the contracts:
   ```
   ts-node src/deploy/deploy.ts
   ```

5. Start the blockchain node:
   ```
   ./scripts/start-node.sh
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.