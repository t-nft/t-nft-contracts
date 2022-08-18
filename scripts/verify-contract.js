require('dotenv').config()
const hre = require('hardhat')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000));

async function main() {
  const ethers = hre.ethers;
  
  console.log('network:', await ethers.provider.getNetwork())

  const signer = (await ethers.getSigners())[0]
  console.log('signer:', await signer.getAddress())

  const contractAddress = '0xcd501b818f5d901bf3a0b3808945d5cd4b6e5aca';

  // Verify Contract
  try {
    await hre.run('verify:verify', {
      address: contractAddress,
      constructorArguments: []
    })
    console.log('verified')
  } catch (error) {
    console.log('verification failed : ', error)
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
