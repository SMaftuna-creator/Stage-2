require('chromedriver');
const { By, Builder } = require('selenium-webdriver');

async function runScript() {
    // //Open https://cloud.google.com/
    // const driver = await new Builder().forBrowser('chrome').build();
    // await driver.get('https://cloud.google.com');
    // //2. By clicking the search button on the portal at the top of the page, enter in the search field "Google Cloud Platform Pricing Calculator"
    // //3. Start the search by clicking the search button.
    // const searchField = await driver.findElement(By.className('devsite-search-field devsite-search-query'));
    // await searchField.click();
    // const textArea = await driver.findElement(By.className('devsite-search-field devsite-search-query'));
    // await textArea.sendKeys('Google Cloud Platform Pricing Calculator');
    // //4. In the search results, click "Google Cloud Platform Pricing Calculator" and go to the calculator page.
    // // const resultOption = await driver.findElement(By.xpath('//li[contains(text(), "google cloud platform pricing calculator")]'));
    // // await resultOption.click();
    // const resultOption = await driver.findElement(By.xpath('/html/body/section/devsite-header/div/div[1]/div/div/div[2]/devsite-search/form/div[1]/button'));
    // await resultOption.click();
    // WebDriver.Close()
   
    const driver2 = await new Builder().forBrowser('chrome').build();
    await driver2.get('https://cloud.google.com/products/calculator');
    //Number of instances: 4
    const instanceNum = await driver2.findElement(By.className('ng-pristine ng-untouched md-input ng-empty ng-valid-min ng-invalid ng-invalid-required'));
    await instanceNum.click();
    const pasteNum = await driver2.findElement(By.id('input_90'));
    await pasteNum.sendKeys('4');
    //What are these instances for ?: leave blank
    //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
    const selectOs = await driver2.findElement(By.id('select_value_label_82'));
    await selectOs.click();
    

    

   




    
    



}

(async () => {
  await runScript();
})();




