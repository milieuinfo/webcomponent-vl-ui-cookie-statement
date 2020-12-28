const VlCookieStatement = require('../components/vl-cookie-statement');
const {Page, Config} = require('vl-ui-core').Test;

class VlCookieStatementPage extends Page {
  async _getCookieStatement(selector) {
    return new VlCookieStatement(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-cookie-statement.html');
  }
}

module.exports = VlCookieStatementPage;
