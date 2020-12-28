const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlCookieStatementPage = require('./pages/vl-cookie-statement.page');

describe('vl-cookie-statement', async () => {
  let vlCookieStatementPage;

  before(() => {
    vlCookieStatementPage = new VlCookieStatementPage(getDriver());
    return vlCookieStatementPage.load();
  });

  it('', async () => {
    assert.isTrue(true);
  });
});
