import { ESDividerProps } from "./ESDivider.types";

class ESDividerElement extends HTMLElement implements ESDividerProps {
  static tagName = "es-divider";

  static get observedAttributes(): string[] {
    return ["variant"];
  }

  get variant(): "primary" | "branded" {
    return (this.getAttribute("variant") as "primary" | "branded") ?? "primary";
  }

  set variant(v: "primary" | "branded") {
    this.setAttribute("variant", v ?? "primary");
  }

  protected hrEl!: HTMLHRElement;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this._renderInitial();
    this.render();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ): void {
    if (oldVal !== newVal) {
      this.render();
    }
  }

  private _renderInitial(): void {
    this.innerHTML = `<hr class="es-divider">`;
    this.hrEl = this.querySelector("hr")!;
  }

  protected render(): void {
    if (!this.hrEl) return;

    const variant = this.variant;

    this.hrEl.className = [
      "es-divider",
      variant === "branded" && "es-branded",
    ]
      .filter(Boolean)
      .join(" ");
  }
}

customElements.define(ESDividerElement.tagName, ESDividerElement);

export const ESDivider = ESDividerElement as typeof ESDividerElement &
  ESDividerProps;
