const hre = require("hardhat");

async function main() {
    const Create = await hre.ethers.deployContract("Create");
    await Create.waitForDeployment();

    console.log("Lock with 1 ETH deployed to:", await Create.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});