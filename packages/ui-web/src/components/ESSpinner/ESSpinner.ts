class ESSpinnerElement extends HTMLElement {
  static tagName = "es-spinner";

  protected containerEl!: HTMLDivElement;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this._renderInitial();
  }

  private _renderInitial(): void {
    this.innerHTML = `
      <div role="alert" aria-busy="true" class="es-spinner">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="no-motion-message">Loading...</span>
      </div>
    `;

    this.containerEl = this.querySelector("div")!;
  }
}

customElements.define(ESSpinnerElement.tagName, ESSpinnerElement);

export const ESSpinner = ESSpinnerElement;
