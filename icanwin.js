require('chromedriver');
const { By, Builder } = require('selenium-webdriver');

async function runScript() {
  //Open https://pastebin.com or a similar service in any browser
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://pastebin.com');
  // Create a New Paste with the following details:
  //* Code: "Hello from WebDriver"
  const textArea = await driver.findElement(By.id('postform-text'));
  await textArea.sendKeys('Hello from WebDriver');
  //Paste Expiration: "10 Minutes"
  const timeDropdown = await driver.findElement(By.id('select2-postform-expiration-container'));
  await timeDropdown.click();
  const timeOption = await driver.findElement(By.xpath('//li[contains(text(), "10 Minutes")]'));
  await timeOption.click();
  //* Paste Name / Title: "helloweb"
  const postform = await driver.findElement(By.name('PostForm[name]'));
  await postform.sendKeys('helloweb');
}

(async () => {
  await runScript();
})();