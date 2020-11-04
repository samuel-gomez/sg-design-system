import style from './style.css';
import template from './template.html';
import replaceProps from '../../../_helpers/replaceProps';

class SgMenuItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.label = this.getAttribute('label');
    this.href = this.getAttribute('href');
    this.className =
      `${this.href}/` === window.location.pathname ? 'active' : '';
  }

  connectedCallback() {
    console.log('location', window.location.pathname);
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${replaceProps(
      {
        href: this.href,
        className: this.className,
        label: this.label,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-menu-item', SgMenuItem);
