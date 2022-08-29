require('dotenv').config()
const hre = require('hardhat')

async function main() {
  const ethers = hre.ethers
  const upgrades = hre.upgrades;

  console.log('network:', await ethers.provider.getNetwork())

  const signer = (await ethers.getSigners())[0]
  console.log('signer:', await signer.getAddress())
  
  

  /**
   * Upgrade SingleFixed
   */
   const SingleFixedAddress = "0x9fd95b0dc0a42d8adf5855fed985a5b290ba2e53";

   const SingleFixedV2 = await ethers.getContractFactory('SingleFixed', {
     signer: (await ethers.getSigners())[0]
   })

   const upgradedContract = await upgrades.upgradeProxy(SingleFixedAddress, SingleFixedV2);
   console.log('SingleFixed upgraded: ', upgradedContract.address)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
