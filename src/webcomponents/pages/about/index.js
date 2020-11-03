import template from './template.html';

class SgAbout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `${template}`;
  }
}

customElements.define('sg-about', SgAbout);
