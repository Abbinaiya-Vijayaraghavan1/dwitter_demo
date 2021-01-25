const DwitterManage = artifacts.require("DwitterManage");

module.exports = function (deployer) {
  deployer.deploy(DwitterManage);
};
