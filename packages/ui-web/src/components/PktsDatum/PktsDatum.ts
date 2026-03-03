import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsDatumProps } from "./PktsDatum.types";

class PktsDatumElement extends SlottedComponent implements PktsDatumProps {
  static tagName = "pkts-datum";

  static get observedAttributes(): string[] {
    return ["title", "label"];
  }

  get title(): string {
    return this.getAttribute("title") ?? this.getAttribute("label") ?? "";
  }

  set title(v: string) {
    this.setAttribute("title", v ?? "");
  }

  get label(): string {
    return this.getAttribute("label") ?? this.getAttribute("title") ?? "";
  }

  set label(v: string) {
    this.setAttribute("label", v ?? "");
  }

  protected containerEl!: HTMLDivElement;
  protected labelEl!: HTMLLabelElement;
  protected valueEl!: HTMLSpanElement;

  constructor() {
    super();
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

  protected _renderInitial(): void {
    this.innerHTML = `
      <div class="pkts-datum">
        <label></label>
        <span><slot></slot></span>
      </div>
    `;

    this.containerEl = this.querySelector("div")!;
    this.labelEl = this.querySelector("label")!;
    this.valueEl = this.querySelector("span")!;
  }

  protected render(): void {
    if (!this.labelEl) return;

    // Update the label text (use title or label attribute)
    const labelText = this.title || this.label;
    this.labelEl.textContent = labelText;
  }
}

customElements.define(PktsDatumElement.tagName, PktsDatumElement);

export const PktsDatum = PktsDatumElement as typeof PktsDatumElement & PktsDatumProps;
