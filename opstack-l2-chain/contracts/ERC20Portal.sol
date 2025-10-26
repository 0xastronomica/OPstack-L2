// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Portal is Ownable {
    event TokenTransferred(address indexed token, address indexed from, address indexed to, uint256 amount);

    function transferToken(address token, address to, uint256 amount) external {
        require(IERC20(token).transferFrom(msg.sender, to, amount), "Transfer failed");
        emit TokenTransferred(token, msg.sender, to, amount);
    }

    function withdrawToken(address token, uint256 amount) external onlyOwner {
        require(IERC20(token).transfer(msg.sender, amount), "Withdrawal failed");
    }
}