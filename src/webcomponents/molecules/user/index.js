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
  }

  static get observedAttributes() {
    return ['src', 'title', 'alt'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && oldValue !== newValue) {
      this.updateSrc(newValue);
    }
    if (name === 'title' && oldValue !== newValue) {
      this.updateTitle(newValue);
    }
    if (name === 'alt' && oldValue !== newValue) {
      this.updateAlt(newValue);
    }
  }

  updateSrc(src) {
    this.src = src;
    this.render();
  }

  updateTitle(title) {
    this.title = title;
    this.render();
  }

  updateAlt(alt) {
    this.alt = alt;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${replaceProps(
      {
        title: this.title,
        alt: this.alt,
        src: this.src,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-user', SgUser);
