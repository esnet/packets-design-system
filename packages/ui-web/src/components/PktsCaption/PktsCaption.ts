import { PktsCaptionProps, PktsCaptionAlign } from "./PktsCaption.types";

export class PktsCaption extends HTMLElement implements PktsCaptionProps {
  static tagName = "pkts-caption";

  static get observedAttributes() {
    return ["label", "align", "italic", "caps"];
  }

  get label(): string {
    return this.getAttribute("label") || "";
  }
  set label(v: string) {
    this.setAttribute("label", v);
  }

  get align(): PktsCaptionAlign {
    return this.getAttribute("align") === "left" ? "left" : "center";
  }
  set align(v: PktsCaptionAlign) {
    this.setAttribute("align", v);
  }

  get italic(): boolean {
    return this.hasAttribute("italic");
  }
  set italic(v: boolean) {
    this.toggleAttribute("italic", v);
  }

  get caps(): boolean {
    return this.hasAttribute("caps");
  }
  set caps(v: boolean) {
    this.toggleAttribute("caps", v);
  }

  private initialized = false;
  private source = "";

  connectedCallback(): void {
    if (this.initialized) return;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.initialize(), {
        once: true,
      });
      return;
    }

    this.initialize();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ): void {
    if (oldVal !== newVal) this.render();
  }

  private initialize(): void {
    if (this.initialized) return;
    this.source = this.textContent?.trim() ?? "";
    this.initialized = true;
    this.render();
  }

  private render(): void {
    if (!this.initialized) return;

    const cap = document.createElement("caption");

    if (this.align === "left") cap.classList.add("left");
    if (this.italic) cap.classList.add("italic");
    if (this.caps) cap.classList.add("caps");

    if (this.label) {
      const strong = document.createElement("strong");
      strong.className = "caption-label";
      strong.textContent = this.label;
      cap.appendChild(strong);
    }

    if (this.source) {
      const span = document.createElement("span");
      span.className = "caption-text";
      span.textContent = this.source;
      cap.appendChild(span);
    }

    this.replaceChildren(cap);
  }
}

customElements.define(PktsCaption.tagName, PktsCaption);
