import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-properties/dist/vl-properties.js';

/**
 * VlCookie
 * @class
 * @classdesc Cookie beschrijving
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie.html|Demo}
 *
 */
export class VlCookie extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/node_modules/vl-ui-cookie-statement/dist/style.css';
            @import '/node_modules/vl-ui-properties/dist/style.css';
        </style>
    `);

    this._element.insertAdjacentHTML('afterend', `
        <vl-properties>
            <h1>${this.dataset.vlTitle}</h1>
            <dl is="vl-properties-list">
                <dt is="vl-property-term">Naam</dt>
                <dd is="vl-property-value">${this.dataset.vlName}</dd>
                <dt is="vl-property-term">Doel</dt>
                <dd is="vl-property-value">${this.dataset.vlPurpose}</dd>
                <dt is="vl-property-term">Type</dt>
                <dd is="vl-property-value">Cookie</dd>
                <dt is="vl-property-term">Domein</dt>
                <dd is="vl-property-value">${this.dataset.vlDomain}</dd>
                <dt is="vl-property-term">Verwerker</dt>
                <dd is="vl-property-value">${this.dataset.vlProcessor}</dd>
                <dt is="vl-property-term">Geldigheid</dt>
                <dd is="vl-property-value">${this.dataset.vlValidity}</dd>
            </dl>
        </vl-properties>
    `);
  }
}

define('vl-cookie', VlCookie);
