import style from './style.css';
import template from './template.html';
import replaceProps from '../../../_helpers/replaceProps';

const setActive = ({ href, pathname }) =>
  `${pathname === '/' ? href : `${href}/`}` === pathname ? 'active' : '';
class SgMenuItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.label = this.getAttribute('label');
    this.href = this.getAttribute('href');
    this.className = setActive({
      href: this.href,
      pathname: window.location.pathname,
    });
  }

  connectedCallback() {
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
