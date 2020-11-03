import style from './style.css';

class SgList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.getAttribute('id') !== null) {
      this.id = this.getAttribute('id');
    }
    this.className = this.getAttribute('class') || 'sg-button';
    this.items = this.getAttribute('items') || [];
  }

  setList() {
    let items;
    try {
      items = JSON.parse(this.items);
      return `<ul>
      ${items.map((item) => `<li>${item}</li>`).join('')}
      </ul>`;
    } catch (error) {
      return '<p class="error"><strong>Error</strong> : parsing string list</p>';
    }
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${this.setList()}`;
  }
}

customElements.define('sg-list', SgList);
