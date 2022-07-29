networkConfig = {
    default: {
        name: "hardhat",
    },
    31337: {
        name: "localhost",
        initialSupply: "1000000000000000000000000",
    },
    4: {
        name: "rinkeby",
        initialSupply: "1000000000000000000000000",
    },
}

developmentChains = ["hardhat", "localhost"]

module.exports = { networkConfig, developmentChains }
