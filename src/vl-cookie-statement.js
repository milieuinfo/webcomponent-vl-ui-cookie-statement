import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlCookieStatement
 * @class
 * @classdesc Cookieverklaring pagina
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-statement.html|Demo}
 *
 */
export class VlCookieStatement extends vlElement(HTMLElement) {}

define('vl-cookie-statement', VlCookieStatement);
