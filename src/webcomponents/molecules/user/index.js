import style from './style.css';
import template from './template.html';

import replaceProps from '../../_helpers/replaceProps';

class SgUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.src = this.getAttribute('src');
    this.title = this.getAttribute('title');
    this.alt = this.getAttribute('alt');
    this.subtitle = this.getAttribute('subtitle');
  }

  static get observedAttributes() {
    return ['src', 'title', 'alt', 'subtitle'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title' && oldValue !== newValue) {
      this.updateTitle(newValue);
    }

    if (name === 'subtitle' && oldValue !== newValue) {
      this.updateSubtitle(newValue);
    }
  }

  updateTitle(title) {
    this.title = title;
    this.render();
  }

  updateSubtitle(subtitle) {
    this.subtitle = subtitle;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${replaceProps(
      {
        subtitle: this.subtitle,
        title: this.title,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-user', SgUser);
