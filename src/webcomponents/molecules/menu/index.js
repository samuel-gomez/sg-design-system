import style from './style.css';
import template from './template.html';

class SgMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${template}`;
  }
}

customElements.define('sg-menu', SgMenu);
