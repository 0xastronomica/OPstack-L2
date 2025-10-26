import { expect } from "chai";
import { ethers } from "hardhat";

describe("StableCoin Contract", function () {
    let stableCoin: any;
    let owner: any;
    let addr1: any;
    let addr2: any;

    beforeEach(async function () {
        const StableCoin = await ethers.getContractFactory("StableCoin");
        [owner, addr1, addr2] = await ethers.getSigners();
        stableCoin = await StableCoin.deploy("Test StableCoin", "TSC", ethers.utils.parseUnits("1000000", 18));
        await stableCoin.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await stableCoin.owner()).to.equal(owner.address);
        });

        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await stableCoin.balanceOf(owner.address);
            expect(await stableCoin.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            await stableCoin.transfer(addr1.address, 100);
            const addr1Balance = await stableCoin.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(100);

            await stableCoin.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await stableCoin.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        });

        it("Should fail if sender doesn’t have enough tokens", async function () {
            const initialOwnerBalance = await stableCoin.balanceOf(owner.address);
            await expect(stableCoin.connect(addr1).transfer(owner.address, 1)).to.be.revertedWith("Not enough tokens");

            expect(await stableCoin.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        });
    });
});