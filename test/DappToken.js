var DappToken = artifacts.require("./DappToken.sol")

contract("DappToken",function(accounts){
    var tokenInstance;

    it("initializes the contract with the correct values",function(){
        return DappToken.deployed().then((instance)=>{
            tokenInstance = instance;
            return tokenInstance.name()
        }).then((name)=>{
            assert.equal(name,"DApp Token","has the correct name")
            return tokenInstance.symbol();
        }).then((symbol)=>{
            assert.equal(symbol,"DAPP","Has the correct symbol")
            return tokenInstance.standard();
        }).then((standard)=>{
            assert.equal(standard,"DApp Token v1.0","Has correct standard")
        })
    })

    it("allocates the initial supply upon deployment",function(){
        return DappToken.deployed().then((instance)=>{
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(),1000000,"sets the total supply to 1,000,000")
            return tokenInstance.balanceOf(accounts[0]);
        }).then((adminBalance)=>{
            assert.equal(adminBalance.toNumber(),1000000,"it allocates the initial supplyto the admin acc")
        })
    })

    it("transfers token ownership",function(){
        return DappToken.deployed().then((instance)=>{
            tokenInstance = instance
            // Test "require" statement first by transfering something larger than the senders balance
            return tokenInstance.transfer.call(accounts[1],9999999999999999999999)
        }).then(assert.fail).catch((error)=>{
            assert(error.message.indexOf("revert") >=0 ,"error message must contain revert")
        })
    })
})