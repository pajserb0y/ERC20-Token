const { getNamedAccounts, network, run, deployments } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify.js")

module.exports = async function () {
    const { deploy, log } = deployments
    const { deployer } = getNamedAccounts()
    const chainId = network.config.chainId

    const args = [networkConfig[chainId]["initialSupply"]]

    const outToken = deploy("OurToken", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await veryify(outToken.address, args)
    }
}

module.exports.tags = ["all", "token"]
