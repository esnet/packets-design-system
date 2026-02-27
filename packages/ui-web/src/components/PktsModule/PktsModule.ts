import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsModuleProps } from "./PktsModule.types";

export class PktsModule extends SlottedComponent implements PktsModuleProps {
  static tagName = "pkts-module";

  static get observedAttributes() {
    return ["surface", "title"];
  }

  get surface(): boolean {
    return this.hasAttribute("surface");
  }
  set surface(v: boolean) {
    v ? this.setAttribute("surface", "") : this.removeAttribute("surface");
  }

  get title(): string {
    return this.getAttribute("title") || "";
  }
  set title(v: string) {
    this.setAttribute("title", v);
  }

  private sectionEl!: HTMLElement;
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
      <section class="pkts-module">
        ${this.title ? `<h6 class="title">${this.title}</h6>` : ""}
        <slot></slot>
      </section>
    `;

    this.sectionEl = this.querySelector("section")!;
    this.titleEl = this.querySelector("h6.title") || undefined;
  }

  protected render(): void {
    if (!this.sectionEl) return;

    // Build class list
    const classes = ["pkts-module"];

    if (this.surface) {
      classes.push("surface");
    }

    this.sectionEl.className = classes.join(" ");

    // Update title
    if (this.title && !this.titleEl) {
      this.titleEl = document.createElement("h6");
      this.titleEl.className = "title";
      this.titleEl.textContent = this.title;
      this.sectionEl.prepend(this.titleEl);
    } else if (this.title && this.titleEl) {
      this.titleEl.textContent = this.title;
    } else if (!this.title && this.titleEl) {
      this.titleEl.remove();
      this.titleEl = undefined;
    }
  }
}

customElements.define(PktsModule.tagName, PktsModule);
