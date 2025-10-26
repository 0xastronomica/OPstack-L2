import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    opstack: {
      url: "https://your-opstack-node-url",
      accounts: ["0xYourPrivateKey"],
      chainId: 1234, // Replace with your actual chain ID
    },
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY", // Replace with your Etherscan API key
  },
};

export default config;