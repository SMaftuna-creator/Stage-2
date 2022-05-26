const {Builder, By, Key, util, WebElement} = require("selenium-webdriver");
require("chromedriver");
async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://pastebin.com");
    await driver.findElement(By.id("postform-text")).sendKeys("Hello from WebDriver",Key.RETURN);

    // WebElement dropdown = driver.findElement(By.id("select0-postform-expiration-container"));
    // Select select = new Select(dropdown);

    select.selectByVisibleText("10")
}
example();