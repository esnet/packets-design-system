import { PktsDividerProps } from "./PktsDivider.types";

class PktsDividerElement extends HTMLElement implements PktsDividerProps {
  static tagName = "pkts-divider";

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
    this.innerHTML = `<hr class="pkts-divider">`;
    this.hrEl = this.querySelector("hr")!;
  }

  protected render(): void {
    if (!this.hrEl) return;

    const variant = this.variant;

    this.hrEl.className = [
      "pkts-divider",
      variant === "branded" && "pkts-branded",
    ]
      .filter(Boolean)
      .join(" ");
  }
}

customElements.define(PktsDividerElement.tagName, PktsDividerElement);

export const PktsDivider = PktsDividerElement as typeof PktsDividerElement &
  PktsDividerProps;
