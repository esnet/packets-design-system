import { PktsAvatarProps } from "./PktsAvatar.types";

const _colorOptions = ["grape", "lime", "berry", "orange"];

class PktsAvatarElement extends HTMLElement implements PktsAvatarProps {
  static tagName = "pkts-avatar";

  static get observedAttributes(): string[] {
    return ["alt", "src", "srcset", "size", "background-color", "hoverable"];
  }

  get alt(): string {
    return this.getAttribute("alt") ?? "avatar";
  }

  set alt(v: string) {
    this.setAttribute("alt", v ?? "avatar");
  }

  get src(): string {
    return this.getAttribute("src") ?? "";
  }

  set src(v: string) {
    if (v) {
      this.setAttribute("src", v);
    } else {
      this.removeAttribute("src");
    }
  }

  get srcset(): string {
    return this.getAttribute("srcset") ?? "";
  }

  set srcset(v: string) {
    if (v) {
      this.setAttribute("srcset", v);
    } else {
      this.removeAttribute("srcset");
    }
  }

  get size(): "small" | "medium" | "large" {
    return (this.getAttribute("size") as "small" | "medium" | "large") ?? "medium";
  }

  set size(v: "small" | "medium" | "large") {
    this.setAttribute("size", v ?? "medium");
  }

  get backgroundColor(): "grape" | "lime" | "berry" | "orange" {
    return (this.getAttribute("background-color") as "grape" | "lime" | "berry" | "orange") ?? "grape";
  }

  set backgroundColor(v: "grape" | "lime" | "berry" | "orange") {
    this.setAttribute("background-color", v);
  }

  get hoverable(): boolean {
    return this.hasAttribute("hoverable");
  }

  set hoverable(v: boolean) {
    if (v) {
      this.setAttribute("hoverable", "");
    } else {
      this.removeAttribute("hoverable");
    }
  }

  protected containerEl!: HTMLDivElement;
  protected imgEl?: HTMLImageElement;
  protected labelEl?: HTMLSpanElement;
  private _error: boolean = false;
  private _computedBackgroundColor: string = "";

  constructor() {
    super();
    // Compute random background color once
    this._computedBackgroundColor = _colorOptions[Math.floor(_colorOptions.length * Math.random())];
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
    this.innerHTML = `<div class="pkts-avatar"></div>`;
    this.containerEl = this.querySelector("div")!;
  }

  private _onImageError = (event: Event) => {
    console.error(
      `PktsAvatar::${event.type}`,
      `Image ${this.src || this.srcset} failed to load`,
    );
    this._error = true;
    this.render();
  };

  protected render(): void {
    if (!this.containerEl) return;

    const hasImageSrc = !!this.src || !!this.srcset;
    const size = this.size;
    const hoverable = this.hoverable;
    const bgColor = this.getAttribute("background-color") || this._computedBackgroundColor;

    // Update container classes
    this.containerEl.className = [
      "pkts-avatar",
      `pkts-${size}`,
      this._error && "broken-image",
      hoverable && "hoverable",
      `pkts-${bgColor}`,
    ]
      .filter(Boolean)
      .join(" ");

    // Generate fallback label
    const fallbackLabel = this.alt.slice(0, 2);

    // Update content
    if (hasImageSrc && !this._error) {
      this.containerEl.innerHTML = `<img alt="${this.alt}" src="${this.src}" ${this.srcset ? `srcset="${this.srcset}"` : ""}>`;
      this.imgEl = this.containerEl.querySelector("img")!;
      this.imgEl.addEventListener("error", this._onImageError);
    } else {
      this.containerEl.innerHTML = `<span>${fallbackLabel}</span>`;
      this.labelEl = this.containerEl.querySelector("span")!;
    }
  }

  disconnectedCallback(): void {
    if (this.imgEl) {
      this.imgEl.removeEventListener("error", this._onImageError);
    }
  }
}

customElements.define(PktsAvatarElement.tagName, PktsAvatarElement);

export const PktsAvatar = PktsAvatarElement as typeof PktsAvatarElement & PktsAvatarProps;
