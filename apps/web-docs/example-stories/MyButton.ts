export class MyButton extends HTMLElement {
  label = 'Default';
  variant = 'primary';
  disabled = false;

  static get observedAttributes() {
    return ['label', 'variant', 'disabled'];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name: string, oldVal: any, newVal: any) {
    switch(name) {
      case 'label':
        this.label = newVal;
        break;
      case 'variant':
        this.variant = newVal;
        break;
      case 'disabled':
        this.disabled = newVal !== null;
        break;
    }
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button ${this.disabled ? 'disabled' : ''}>
        ${this.label}
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
