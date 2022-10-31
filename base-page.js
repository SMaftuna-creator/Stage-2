require('chromedriver');

const { until } = require("selenium-webdriver");

class BasePage { 
  constructor(driver) { 
    this.driver = driver;
  }

  async open(url) { 
    await this.driver.manage().window().maximize();
    await this.driver.get(url);
  }

  async getElement(locator) { 
    await this.driver.wait(until.elementLocated(locator), 3000);
    return this.driver.findElement(locator);
  }

  async clickElement(locator) { 
    const element = await this.getElement(locator);
    await element.click();
  }

  async typeTextToElement(text, locator) { 
    const element = await this.getElement(locator);
    await element.sendKeys(text);
  }

  async close() { 
    await this.driver.close();
  }
}

module.exports = BasePage;
