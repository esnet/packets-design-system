import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsChipGroupProps } from "./PktsChipGroup.types";

export class PktsChipGroup extends SlottedComponent implements PktsChipGroupProps {
  static tagName = "pkts-chip-group";

  static get observedAttributes() {
    return ["class"];
  }

  get className(): string {
    return this.getAttribute("class") || "";
  }
  set className(v: string) {
    v ? this.setAttribute("class", v) : this.removeAttribute("class");
  }

  private containerEl!: HTMLElement;

  constructor() {
    super();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    this.innerHTML = `
      <div class="pkts-chip-group">
        <slot></slot>
      </div>
    `;

    this.containerEl = this.querySelector("div")!;
  }

  protected render(): void {
    if (!this.containerEl) return;

    this.containerEl.className = [
      "pkts-chip-group",
      this.getAttribute("class") || "",
    ]
      .filter(Boolean)
      .join(" ");
  }
}

customElements.define(PktsChipGroup.tagName, PktsChipGroup);
