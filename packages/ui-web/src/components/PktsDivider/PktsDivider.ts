import { PktsDividerProps } from "./PktsDivider.types";

class PktsDividerElement extends HTMLHRElement implements PktsDividerProps {
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

customElements.define(PktsDividerElement.tagName, PktsDividerElement, {
  extends: "hr",
});

export const PktsDivider = PktsDividerElement as typeof PktsDividerElement &
  PktsDividerProps;
