require('chromedriver');
const { By, Builder } = require('selenium-webdriver');

async function runScript() {
  //Open https://cloud.google.com/
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://cloud.google.com/');
  //By clicking the search button on the portal at the top of the page, enter in the search field "Google Cloud Platform Pricing Calculator"
  //Start the search by clicking the search button.
  const searchClk = await driver.findElement(By.name('q'));
  await searchClk.click();
  const searchInput = await driver.findElement(By.name('q'));
  await searchInput.sendKeys('Google Cloud Platform Pricing Calculator');
  
}

(async () => {
  await runScript();
})();


