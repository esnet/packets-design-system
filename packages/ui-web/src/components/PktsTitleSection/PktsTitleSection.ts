import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsTitleSectionProps } from "./PktsTitleSection.types";
import { PktsModule } from "../PktsModule/PktsModule";

export class PktsTitleSection extends SlottedComponent implements PktsTitleSectionProps {
  static tagName = "pkts-title-section";

  static get observedAttributes() {
    return ["title", "subtitle"];
  }

  get title(): string {
    return this.getAttribute("title") || "";
  }
  set title(v: string) {
    this.setAttribute("title", v);
  }

  get subtitle(): string {
    return this.getAttribute("subtitle") || "";
  }
  set subtitle(v: string) {
    this.setAttribute("subtitle", v);
  }

  private moduleEl!: HTMLElement;
  private titleEl?: HTMLHeadingElement;
  private subtitleEl?: HTMLHeadingElement;

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
      <${PktsModule.tagName} class="titleLayout">
        ${this.title ? `<h1 class="title">${this.title}</h1>` : ""}
        ${this.subtitle ? `<h4 class="subtitle">${this.subtitle}</h4>` : ""}
        <slot></slot>
      </${PktsModule.tagName}>
    `;

    this.moduleEl = this.querySelector(PktsModule.tagName)!;
    this.titleEl = this.querySelector("h1.title") || undefined;
    this.subtitleEl = this.querySelector("h4.subtitle") || undefined;
  }

  protected render(): void {
    if (!this.moduleEl) return;

    // Update title
    if (this.title && !this.titleEl) {
      this.titleEl = document.createElement("h1");
      this.titleEl.className = "title";
      this.titleEl.textContent = this.title;
      this.moduleEl.prepend(this.titleEl);
    } else if (this.title && this.titleEl) {
      this.titleEl.textContent = this.title;
    } else if (!this.title && this.titleEl) {
      this.titleEl.remove();
      this.titleEl = undefined;
    }

    // Update subtitle
    const slot = this.moduleEl.querySelector("slot");
    if (this.subtitle && !this.subtitleEl) {
      this.subtitleEl = document.createElement("h4");
      this.subtitleEl.className = "subtitle";
      this.subtitleEl.textContent = this.subtitle;
      if (slot) {
        this.moduleEl.insertBefore(this.subtitleEl, slot);
      } else {
        this.moduleEl.appendChild(this.subtitleEl);
      }
    } else if (this.subtitle && this.subtitleEl) {
      this.subtitleEl.textContent = this.subtitle;
    } else if (!this.subtitle && this.subtitleEl) {
      this.subtitleEl.remove();
      this.subtitleEl = undefined;
    }
  }
}

customElements.define(PktsTitleSection.tagName, PktsTitleSection);
