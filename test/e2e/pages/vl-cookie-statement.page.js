const VlCookieStatement = require('../components/vl-cookie-statement');
const {Page, Config} = require('vl-ui-core').Test;

class VlCookieStatementPage extends Page {
  async getCookieStatementElement() {
    return this._getCookieStatement('vl-cookie-statement');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-cookie-statement-demo.html');
  }

  async _getCookieStatement(selector) {
    return new VlCookieStatement(this.driver, selector);
  }
}

module.exports = VlCookieStatementPage;
