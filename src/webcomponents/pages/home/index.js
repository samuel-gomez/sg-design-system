import template from './template.html';
import style from './style.css';

class SgHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${template}`;
  }
}

customElements.define('sg-home', SgHome);
