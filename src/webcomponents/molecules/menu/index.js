import style from './style.css';
import template from './template.html';
import replaceProps from '../../_helpers/replaceProps';

class SgMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.activeItem = this.getAttribute('activeItem');
    //const items =  JSON.stringify(this.getAttribute('items')).replace(/'/g, '"');
    //this.items = items.substring(1, items.length - 1);
  }

  /* static get observedAttributes() {
    return ['activeItem'];
  }

  updateActiveItem(activeItem) {
    this.activeItem = activeItem;
    console.log('update',this.activeItem);
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'activeItem' && oldValue !== newValue) {
      this.updateActiveItem(newValue);
    }
  } */

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${replaceProps(
      {
        activeItem: this.activeItem,
      },
      `${template}`,
    )}`;
  }
}

customElements.define('sg-menu', SgMenu);
