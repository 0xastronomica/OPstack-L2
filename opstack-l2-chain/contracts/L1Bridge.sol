// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract L1Bridge {
    IERC20 public stableCoin;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor(address _stableCoin) {
        stableCoin = IERC20(_stableCoin);
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        stableCoin.transferFrom(msg.sender, address(this), amount);
        emit Deposited(msg.sender, amount);
    }

    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        stableCoin.transfer(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }
}