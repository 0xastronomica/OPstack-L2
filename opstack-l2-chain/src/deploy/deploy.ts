import { ethers } from "hardhat";
import { StableCoin } from "../../contracts/StableCoin.sol";

async function main() {
    // Deploy StableCoin contract
    const StableCoinFactory = await ethers.getContractFactory("StableCoin");
    const stableCoin = await StableCoinFactory.deploy();
    await stableCoin.deployed();
    console.log("StableCoin deployed to:", stableCoin.address);

    // Deploy L1Bridge contract
    const L1BridgeFactory = await ethers.getContractFactory("L1Bridge");
    const l1Bridge = await L1BridgeFactory.deploy(stableCoin.address);
    await l1Bridge.deployed();
    console.log("L1Bridge deployed to:", l1Bridge.address);

    // Deploy L2StandardBridge contract
    const L2StandardBridgeFactory = await ethers.getContractFactory("L2StandardBridge");
    const l2StandardBridge = await L2StandardBridgeFactory.deploy(l1Bridge.address, stableCoin.address);
    await l2StandardBridge.deployed();
    console.log("L2StandardBridge deployed to:", l2StandardBridge.address);

    // Deploy ERC20Portal contract
    const ERC20PortalFactory = await ethers.getContractFactory("ERC20Portal");
    const erc20Portal = await ERC20PortalFactory.deploy();
    await erc20Portal.deployed();
    console.log("ERC20Portal deployed to:", erc20Portal.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });