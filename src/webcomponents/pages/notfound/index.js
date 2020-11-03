import template from './template.html';

class SgNotfound extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `${template}`;
  }
}

customElements.define('sg-notfound', SgNotfound);
