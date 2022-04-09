const app = artifacts.require("app");

module.exports = function (deployer) {
  deployer.deploy(app);
};
