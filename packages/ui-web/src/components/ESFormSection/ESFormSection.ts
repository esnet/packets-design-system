import { SlottedComponent } from "../../lib/SlottedComponent";
import { ESFormSectionProps } from "./ESFormSection.types";

export class ESFormSection extends SlottedComponent implements ESFormSectionProps {
  static tagName = "es-form-section";

  static get observedAttributes() {
    return ["title", "use-column-layout"];
  }

  get title(): string {
    return this.getAttribute("title") || "";
  }
  set title(v: string) {
    this.setAttribute("title", v);
  }

  get useColumnLayout(): boolean {
    return this.getAttribute("use-column-layout") !== "false";
  }
  set useColumnLayout(v: boolean) {
    this.setAttribute("use-column-layout", String(v));
  }

  private sectionEl!: HTMLElement;
  private leftColEl!: HTMLDivElement;
  private rightColEl!: HTMLDivElement;
  private titleEl?: HTMLHeadingElement;

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
      <section class="es-form-section">
        <div class="grid-col-3 left-col">
          ${this.title ? `<h6>${this.title}</h6>` : ""}
        </div>
        <div class="grid-col-9 right-col">
          <slot></slot>
        </div>
      </section>
    `;

    this.sectionEl = this.querySelector("section")!;
    this.leftColEl = this.querySelector(".left-col")!;
    this.rightColEl = this.querySelector(".right-col")!;
    this.titleEl = this.querySelector("h6") || undefined;
  }

  protected render(): void {
    if (!this.sectionEl) return;

    // Build class list for section
    const classes = ["es-form-section"];
    if (this.useColumnLayout) {
      classes.push("packets-grid");
    }
    this.sectionEl.className = classes.join(" ");

    // Update title
    if (this.title && !this.titleEl) {
      this.titleEl = document.createElement("h6");
      this.titleEl.textContent = this.title;
      this.leftColEl.prepend(this.titleEl);
    } else if (this.title && this.titleEl) {
      this.titleEl.textContent = this.title;
    } else if (!this.title && this.titleEl) {
      this.titleEl.remove();
      this.titleEl = undefined;
    }
  }
}

customElements.define(ESFormSection.tagName, ESFormSection);
