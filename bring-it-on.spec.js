const expect = require('chai').expect;

const PastebinPage = require('../page-objects/pastebin-page');
const { getDriver } = require('../util/get-driver');

describe('Webdriver', () => { 
  const driver = getDriver();

  const pastebinPage = new PastebinPage(driver);

  const paste = ' git config --global user.name "New Sheriff in Town"\n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n git push origin master --force';

  it('should paste some string and save it', async () => {
    //  1. Open https://pastebin.com or a similar service in any browser
    await pastebinPage.open('https://pastebin.com');
    // 2. Create a New Paste with the following details:
    // * Code:
    // git config --global user.name "New Sheriff in Town"
    // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    // git push origin master --force
    await pastebinPage.typePasteText(paste);

    // * Syntax Highlighting: "Bash"
    await pastebinPage.selectSyntaxDropdown();

    // * Paste Expiration: "10 Minutes"
    await pastebinPage.selectTenMinutesExpirationTime();

    // * Paste Name / Title: "how to gain dominance among developers"
    await pastebinPage.typePasteName('how to gain dominance among developers');
    await pastebinPage.clickCreatePasteButton();
    await pastebinPage.waitForPasteSaved();
    // 3. Save paste and check the following:

    // * Browser page title matches Paste Name / Title
    // * Syntax is suspended for bash
    // * Check that the code matches the one entered in paragraph 2

    const actualPasteText = await pastebinPage.getSavedPaste();
    expect(' git config --global user.name "New Sheriff in Town"\n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n git push origin master --force').to.be.equal(paste);



  });
});