require('chromedriver');
const { By, Builder } = require('selenium-webdriver');

async function runScript() {
  //Open https://pastebin.com or a similar service in any browser  
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://pastebin.com');
  //Create a New Paste with the following details:
  //* Code:
  //git config --global user.name "New Sheriff in Town"
  //git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
  //git push origin master --force
  const textArea = await driver.findElement(By.id('postform-text'));
  await textArea.sendKeys(' git config --global user.name "New Sheriff in Town"\n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n git push origin master --force');
  //Syntax Highlighting: "Bash"
  const syntaxDropdown = await driver.findElement(By.id('select2-postform-format-container'));
  await syntaxDropdown.click();
  const syntaxOption = await driver.findElement(By.xpath('//li[contains(text(), "Bash")]'));
  await syntaxOption.click();
  //Paste Expiration: "10 Minutes"
  const timeDropdown = await driver.findElement(By.id('select2-postform-expiration-container'));
  await timeDropdown.click();
  const timeOption = await driver.findElement(By.xpath('//li[contains(text(), "10 Minutes")]'));
  await timeOption.click();
  //Paste Name / Title: "how to gain dominance among developers"
  const postform = await driver.findElement(By.name('PostForm[name]'));
  await postform.sendKeys('how to gain dominance among developers');
  const btnClk = await driver.findElement(By.className('btn -big'))
  await btnClk.click();
}

(async () => {
  await runScript();
})();