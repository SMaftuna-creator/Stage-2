const { By } = require("selenium-webdriver");
const BasePage = require("./base-page");

class PasebinPage extends BasePage { 
  constructor(driver) { 
    super(driver);

    this.newPasteTextArea = By.id('postform-text');
    // * Syntax Highlighting: "Bash"
    this.syntaxHighlightingDropdown = By.id('select2-postform-format-container');
    this.syntaxDropdown = By.xpath('//li[contains(text(), "Bash")]');
    // * Paste Expiration: "10 Minutes"
    this.pasteExpirationDropdown = By.id('select2-postform-expiration-container');
    this.tenMinutesOption = By.xpath('//li[contains(text(), "10 Minutes")]');
    this.pasteNameInput = By.id('postform-name');
    this.createNewPasteButton = By.css('button.btn');
    this.successMessageNotification = By.css('div.-success');
    this.savedPasteTextArea = By.css('ol.text');
  }

  async typePasteText(pasteText) { 
    await this.typeTextToElement(pasteText, this.newPasteTextArea);
  }

  async selectTenMinutesExpirationTime() {
    await this.clickElement(this.pasteExpirationDropdown);
    await this.clickElement(this.tenMinutesOption);
  }

  async selectSyntaxDropdown() {
    await this.clickElement(this.syntaxHighlightingDropdown);
    await this.clickElement(this.syntaxDropdown);
  }

  async typePasteName(pasteName) { 
    await this.typeTextToElement(pasteName, this.pasteNameInput);
  }

  async clickCreatePasteButton() { 
    await this.clickElement(this.createNewPasteButton);
  }

  async waitForPasteSaved() { 
    await this.getElement(this.successMessageNotification);
  }

  async getSavedPaste() { 
    const element = await this.getElement(this.savedPasteTextArea);
    return element.getText();
  }

}

module.exports = PasebinPage;
