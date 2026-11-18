import { PktsIconProps, PktsIconSize } from "./PktsIcon.types";

import { createElement, icons } from "lucide";

export class PktsIcon extends HTMLElement implements PktsIconProps {
  static tagName = "pkts-icon";

  static get observedAttributes() {
    return ["name", "size", "color", "stroke-width"];
  }

  get name(): string {
    return this.getAttribute("name") ?? "";
  }
  set name(v: string) {
    this.setAttribute("name", v);
  }

  get size(): PktsIconSize | "" {
    return (this.getAttribute("size") as PktsIconSize) ?? "";
  }
  set size(v: PktsIconSize) {
    this.setAttribute("size", v);
  }

  get color(): string {
    return this.getAttribute("color") ?? "";
  }
  set color(v: string) {
    this.setAttribute("color", v);
  }

  get strokeWidth(): string {
    return this.getAttribute("stroke-width") ?? "";
  }
  set strokeWidth(v: number | string) {
    this.setAttribute("stroke-width", String(v));
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ): void {
    if (oldVal !== newVal) this.render();
  }

  private _toPascalCase(str: string): string {
    return str
      .split(/-|_/)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("");
  }

  protected render(): void {
    const iconNode = icons[this._toPascalCase(this.name) as keyof typeof icons];
    if (!iconNode) return;

    const attrs: Record<string, string> = {};
    if (this.color) attrs.stroke = this.color;
    if (this.strokeWidth) attrs["stroke-width"] = this.strokeWidth;

    this.replaceChildren(createElement(iconNode, attrs));
  }
}

customElements.define(PktsIcon.tagName, PktsIcon);
