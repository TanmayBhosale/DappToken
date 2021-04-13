// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DappToken{
    //constructor
    //Set the number of tokens
    //Read the total number of tokens
    //Name 
    string public name = "DApp Token";
    string public symbol = "DAPP";
    string public standard = "DApp Token v1.0";
    //Symbol
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply)public{

        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        //allocate the initial supply

    }
    // Transfer 
    // Exception is acc doesnt have enough
    // Return a boolean
    // Transfer Event
    function transfer(address _to, uint256 _value)public returns(bool success){
        require(balanceOf[msg.sender] >= _value);
    }
}