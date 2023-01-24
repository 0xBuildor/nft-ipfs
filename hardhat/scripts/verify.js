const { ethers } = require ("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";

  // Verify the contract after deploying
    await hre.run("verify:verify", {
    address: "0x82B1A012cA10F11eb442C3398BfB733082a397A5",
    constructorArguments: [metadataURL],
    });
}

// Call the main function and catch is there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })