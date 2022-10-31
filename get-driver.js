const { Builder } = require("selenium-webdriver");

function getDriver() { 
  return new Builder()
    .forBrowser('chrome')
    .build();
}

module.exports = { getDriver };
