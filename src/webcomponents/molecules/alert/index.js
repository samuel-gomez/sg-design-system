import style from './style.css';
import template from './template.html';

import replaceProps from '../../_helpers/replaceProps';

class SgAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.theme = this.getAttribute('theme');
    this.title = this.getAttribute('title');
    this.icon = this.getAttribute('icon');
  }

  static get observedAttributes() {
    return ['theme', 'title', 'icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'theme' && oldValue !== newValue) {
      this.updateTheme(newValue);
    }
    if (name === 'title' && oldValue !== newValue) {
      this.updateTitle(newValue);
    }
    if (name === 'icon' && oldValue !== newValue) {
      this.updateIcon(newValue);
    }
  }

  updateTheme(theme) {
    this.theme = theme;
    this.render();
  }

  updateTitle(title) {
    this.title = title;
    this.render();
  }

  updateIcon(icon) {
    this.icon = icon;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>
    :host{
      --color-theme: var(--color-${this.theme || 'danger'});
      --color-theme-light: var(--color-${this.theme || 'danger'}-light);
    }
    ${style.toString()}</style>
    ${replaceProps(
      {
        title: this.title,
        icon: this.icon,
        iconColor: `var(--color-${this.theme || 'danger'})`,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-alert', SgAlert);
