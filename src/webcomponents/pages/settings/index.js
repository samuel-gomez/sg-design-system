import template from './template.html';

class SgSettings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `${template}`;
  }
}

customElements.define('sg-settings', SgSettings);
