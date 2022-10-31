const expect = require('chai').expect;

const PastebinPage = require('../page-objects/pastebin-page');
const { getDriver } = require('../util/get-driver');

describe('Webdriver', () => { 
  const driver = getDriver();

  const pastebinPage = new PastebinPage(driver);

  const paste = 'Hello from Webdriver';

  it('should paste some string and save it', async () => {
    //  1. Open https://pastebin.com or a similar service in any browser
    await pastebinPage.open('https://pastebin.com');
    // 2. Create a New Paste with the following details:
    // * Code: "Hello from WebDriver"
    await pastebinPage.typePasteText(paste);
    // * Paste Expiration: "10 Minutes"
    await pastebinPage.selectTenMinutesExpirationTime();
    // * Paste Name / Title: "helloweb"
    await pastebinPage.typePasteName('helloweb');
    await pastebinPage.clickCreatePasteButton();
    await pastebinPage.waitForPasteSaved();
    const actualPasteText = await pastebinPage.getSavedPaste();

    expect('Hello from Webdriver').to.be.equal(paste);
  });
});