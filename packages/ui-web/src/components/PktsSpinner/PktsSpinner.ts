class PktsSpinnerElement extends HTMLElement {
  static tagName = "pkts-spinner";

  protected containerEl!: HTMLDivElement;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this._renderInitial();
  }

  private _renderInitial(): void {
    this.innerHTML = `
      <div role="alert" aria-busy="true" class="pkts-spinner">
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

customElements.define(PktsSpinnerElement.tagName, PktsSpinnerElement);

export const PktsSpinner = PktsSpinnerElement;
