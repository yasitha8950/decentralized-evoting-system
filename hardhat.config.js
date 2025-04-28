


require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.0"},
      {version: "0.8.28"}
    ]
  },

  networks: {
    hardhat: {
      chainId: 1337,
    },
    
 },
};
