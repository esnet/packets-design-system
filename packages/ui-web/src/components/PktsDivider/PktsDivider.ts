import { PktsDividerProps } from "./PktsDivider.types";

class PktsDividerElement extends HTMLElement implements PktsDividerProps {
  static tagName = "pkts-divider";

  static get observedAttributes(): string[] {
    return ["variant"];
  }

  get variant(): "default" | "branded" {
    return (this.getAttribute("variant") as "default" | "branded") ?? "default";
  }

  set variant(v: "default" | "branded") {
    this.setAttribute("variant", v ?? "default");
  }

  constructor() {
    super();
  }

  connectedCallback(): void {
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

  protected render(): void {
    this.className = [
      "pkts-divider",
      this.variant === "branded" && "pkts-branded",
    ]
      .filter(Boolean)
      .join(" ");
  }
}

customElements.define(PktsDividerElement.tagName, PktsDividerElement);

export const PktsDivider = PktsDividerElement as typeof PktsDividerElement &
  PktsDividerProps;
