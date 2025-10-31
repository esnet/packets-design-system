import styles from "./ESButton.module.css";
// import { createIcons } from 'lucide';

export class ESButton extends HTMLElement {
  static tagName = 'es-button';
  static observedAttributes = [
    "class",
    "label",
    "variant",
    "type",
    "fill",
    "disabled",
    "as",
    "href",
    "data-lefticon",
    "data-righticon",
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    this.render();
    // createIcons();
  }

  render() {
    const hrefbool = this.getAttribute('a') === 'a';
    const variant = this.getAttribute('variant') || 'primary';
    const fill = this.getAttribute('fill') ? 'fill' : '';
    const size = this.getAttribute('size') || 'medium';

    this.innerHTML = `
      ${hrefbool ? `<a href="${this.getAttribute('href')}">` : ''}
      <button 
        ${this.getAttribute('type') ? `type="${this.getAttribute('type')}"` : ''}
        class="${styles.button} ${styles[variant]} ${styles[fill]} ${styles[size]} ${this.getAttribute('class')}"
        ${this.getAttribute('disabled') ? 'disabled' : ''}>
        ${this.getAttribute('label')}
      </button>
      ${hrefbool ? `</a>` : ''}
    `;
  }
}
