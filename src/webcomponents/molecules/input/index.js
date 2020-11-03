import style from './style.css';
import template from './template.html';

class SgInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${template}`;
  }
}

customElements.define('sg-input', SgInput);
