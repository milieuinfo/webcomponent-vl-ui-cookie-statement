const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlCookieStatementPage = require('./pages/vl-cookie-statement.page');

describe('vl-cookie-statement', async () => {
  let vlCookieStatementPage;

  before(() => {
    vlCookieStatementPage = new VlCookieStatementPage(getDriver());
    return vlCookieStatementPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlCookieStatementPage.hasWcagIssues());
  });

  it('als gebruiker kan in de cookie pagina zien', async () => {
    const page = await vlCookieStatementPage.getCookieStatementElement();
    await assert.eventually.isTrue(page.isDisplayed());
  });
});
