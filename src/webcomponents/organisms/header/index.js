import style from './style.css';
import template from './template.html';
import replaceProps from '../../_helpers/replaceProps';

const itemsMenu = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/settings',
    label: 'Settings',
  },
  {
    href: '/random',
    label: 'Not found',
  },
];

class SgHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.activeMenuItem = this.getAttribute('activeMenuItem');
    this.title = this.getAttribute('title') || 'title header';
  }

  connectedCallback() {
    const menuItems = JSON.stringify(itemsMenu).replace(/"/g, "'");
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${replaceProps(
      {
        title: this.title,
        subtitle: this.subtitle,
        activeItem: this.activeMenuItem,
        menuItems,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-header', SgHeader);
