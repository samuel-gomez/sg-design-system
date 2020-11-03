import style from './style.css';
import template from './template.html';

class SgButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.getAttribute('id') !== null) {
      this.id = this.getAttribute('id');
    }
    this.className = this.getAttribute('class') || 'sg-button';
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log({
      id: this.id,
    });
    document.body.classList.toggle('dark');
    const alert = document.querySelector('sg-alert');
    alert.setAttribute('theme', 'info');
  }

  setButton() {
    this.sgButton = this.shadowRoot.querySelector('button');
    this.sgButton.addEventListener('click', this.handleClick.bind(this));
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<style>${style.toString()}</style>${template}`;
    this.setButton();
  }
}

customElements.define('sg-button', SgButton);
