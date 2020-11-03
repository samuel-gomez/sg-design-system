import style from './style.css';
import template from './template.html';

const templateSvg = document.createElement('template');
templateSvg.innerHTML = `${template}`;

const sizes = {
  XS: {
    width: 15,
    height: 15,
  },
  S: {
    width: 30,
    height: 30,
  },
  M: {
    width: 50,
    height: 50,
  },
  L: {
    width: 80,
    height: 80,
  },
};

class SgIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.name = this.getAttribute('name');
    this.color = this.getAttribute('color') || 'var(--color-icon)';
    this.size = this.getAttribute('size') || 'S';
  }

  connectedCallback() {
    this.render();
  }

  setCustomStyle() {
    return `
      svg {
        fill: ${this.color};
        width: ${sizes[this.size].width}px;
        height: ${sizes[this.size].height}px;
      }
    `;
  }

  render() {
    const svgTemplate = templateSvg.content.getElementById(
      `sg-icon-${this.name}`,
    ).outerHTML;
    this.shadowRoot.innerHTML = `
    <style>
      ${style.toString()}
      ${this.setCustomStyle()}
    </style>
    ${svgTemplate}`;
  }
}

customElements.define('sg-icon', SgIcon);
