import style from './style.css';
import template from './template.html';
import replaceProps from '../../_helpers/replaceProps';

class SgFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.copy = this.getAttribute('copy');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${replaceProps(
      {
        copy: this.copy,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-footer', SgFooter);
