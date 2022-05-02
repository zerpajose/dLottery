require('dotenv').config({ path: '../.env' });

const Lottery = artifacts.require("Lottery");

module.exports = function(deployer) {
  deployer.deploy(Lottery, process.env.VRF_SUB_ID);
};
