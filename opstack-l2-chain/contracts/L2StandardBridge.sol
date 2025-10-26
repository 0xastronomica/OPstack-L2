// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./StableCoin.sol";
import "./ERC20Portal.sol";

contract L2StandardBridge {
    StableCoin public stableCoin;
    ERC20Portal public erc20Portal;

    event TransferToL1(address indexed user, uint256 amount);
    event TransferToL2(address indexed user, uint256 amount);

    constructor(address _stableCoin, address _erc20Portal) {
        stableCoin = StableCoin(_stableCoin);
        erc20Portal = ERC20Portal(_erc20Portal);
    }

    function transferToL1(uint256 amount) external {
        require(stableCoin.balanceOf(msg.sender) >= amount, "Insufficient balance");
        stableCoin.transferFrom(msg.sender, address(this), amount);
        emit TransferToL1(msg.sender, amount);
        // Logic to handle transfer to Layer 1
    }

    function transferToL2(uint256 amount) external {
        require(stableCoin.balanceOf(msg.sender) >= amount, "Insufficient balance");
        stableCoin.transferFrom(msg.sender, address(this), amount);
        emit TransferToL2(msg.sender, amount);
        // Logic to handle transfer to Layer 2
    }
}