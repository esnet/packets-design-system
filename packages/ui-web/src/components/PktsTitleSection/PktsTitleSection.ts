import { SlottedComponent } from "../../lib/SlottedComponent";
import {
  PktsTitleSectionDirection,
  PktsTitleSectionIconPosition,
  PktsTitleSectionIconTarget,
  PktsTitleSectionProps,
} from "./PktsTitleSection.types";

export class PktsTitleSection
  extends SlottedComponent
  implements PktsTitleSectionProps
{
  static tagName = "pkts-title-section";

  // direction and background are styled purely with CSS attribute
  // selectors, so only the attributes that change the DOM are observed.
  static get observedAttributes() {
    return ["title", "subtitle", "icon", "icon-target", "icon-position"];
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

  get icon(): string {
    return this.getAttribute("icon") || "";
  }
  set icon(v: string) {
    this.setAttribute("icon", v);
  }

  get iconTarget(): PktsTitleSectionIconTarget {
    return this.getAttribute("icon-target") === "title" ? "title" : "subtitle";
  }
  set iconTarget(v: PktsTitleSectionIconTarget) {
    this.setAttribute("icon-target", v);
  }

  get iconPosition(): PktsTitleSectionIconPosition {
    return this.getAttribute("icon-position") === "start" ? "start" : "end";
  }
  set iconPosition(v: PktsTitleSectionIconPosition) {
    this.setAttribute("icon-position", v);
  }

  get direction(): PktsTitleSectionDirection {
    return this.getAttribute("direction") === "horizontal"
      ? "horizontal"
      : "vertical";
  }
  set direction(v: PktsTitleSectionDirection) {
    this.setAttribute("direction", v);
  }

  get background(): boolean {
    return this.hasAttribute("background");
  }
  set background(v: boolean) {
    this.toggleAttribute("background", v);
  }

  // attributeChangedCallback can fire before the first render, so render()
  // waits for this flag instead of checking for a wrapper element.
  private ready = false;
  private titleEl?: HTMLHeadingElement;
  private titleTextEl?: HTMLSpanElement;
  private subtitleEl?: HTMLHeadingElement;
  private subtitleTextEl?: HTMLSpanElement;
  private iconEl?: HTMLElement;

  constructor() {
    super();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ) {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    this.innerHTML = `<slot></slot>`;

    this.ready = true;
    this.render();
  }

  protected render(): void {
    if (!this.ready) return;

    this.renderTitle();
    this.renderSubtitle();
    // Last, because it needs to know which headings exist.
    this.renderIcon();
  }

  private renderTitle(): void {
    if (!this.title) {
      this.titleEl?.remove();
      this.titleEl = undefined;
      this.titleTextEl = undefined;
      return;
    }

    if (!this.titleEl) {
      this.titleEl = document.createElement("h1");
      this.titleEl.className = "title";

      // Text lives in its own span so the icon can sit before or after it
      // and text updates never wipe the icon.
      this.titleTextEl = document.createElement("span");
      this.titleTextEl.className = "title-text";
      this.titleEl.appendChild(this.titleTextEl);

      this.prepend(this.titleEl);
    }

    this.titleTextEl!.textContent = this.title;
  }

  private renderSubtitle(): void {
    if (!this.subtitle) {
      this.subtitleEl?.remove();
      this.subtitleEl = undefined;
      this.subtitleTextEl = undefined;
      return;
    }

    if (!this.subtitleEl) {
      this.subtitleEl = document.createElement("h4");
      this.subtitleEl.className = "subtitle";

      this.subtitleTextEl = document.createElement("span");
      this.subtitleTextEl.className = "subtitle-text";
      this.subtitleEl.appendChild(this.subtitleTextEl);

      if (this.titleEl) {
        this.titleEl.after(this.subtitleEl);
      } else {
        this.prepend(this.subtitleEl);
      }
    }

    this.subtitleTextEl!.textContent = this.subtitle;
  }

  private renderIcon(): void {
    const target =
      this.iconTarget === "title" ? this.titleEl : this.subtitleEl;

    // No icon name, or the heading it should attach to doesn't exist.
    if (!this.icon || !target) {
      this.iconEl?.remove();
      this.iconEl = undefined;
      return;
    }

    if (!this.iconEl) {
      this.iconEl = document.createElement("pkts-icon");
      this.iconEl.setAttribute("aria-hidden", "true");
    }

    this.iconEl.setAttribute("name", this.icon);

    // prepend/append move an element that is already in the DOM, so this
    // also handles the target or position changing after the first render.
    if (this.iconPosition === "start") {
      target.prepend(this.iconEl);
    } else {
      target.append(this.iconEl);
    }
  }
}

customElements.define(PktsTitleSection.tagName, PktsTitleSection);