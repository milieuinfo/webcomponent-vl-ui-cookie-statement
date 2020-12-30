const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlCookieStatementPage = require('./pages/vl-cookie-statement.page');

describe('vl-cookie-statement', async () => {
  let vlCookieStatementPage;

  before(() => {
    vlCookieStatementPage = new VlCookieStatementPage(getDriver());
    return vlCookieStatementPage.load();
  });

  it('als gebruiker kan in de cookie pagina zien', async () => {
    const page = await vlCookieStatementPage.getCookieElement();
    await assert.eventually.isTrue(page.isDisplayed());
  });
});
