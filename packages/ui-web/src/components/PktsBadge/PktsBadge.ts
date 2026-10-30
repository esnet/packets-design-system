import { SlottedComponent } from "../../lib/SlottedComponent";

type PktsBadgeColor = "grape" | "teal" | "berry" | "orange";

export class PktsBadge extends SlottedComponent {
  static tagName = "pkts-badge";

  static get observedAttributes() {
    return ["color", "offset", "outline"];
  }

  private containerEl!: HTMLSpanElement;

  constructor() {
    super();
  }

  get color(): PktsBadgeColor | null {
    return this.getAttribute("color") as PktsBadgeColor | null;
  }
  set color(v: PktsBadgeColor | null) {
    if (v) this.setAttribute("color", v);
    else this.removeAttribute("color");
  }

  get offset(): boolean {
    return this.hasAttribute("offset");
  }
  set offset(v: boolean) {
    this.toggleAttribute("offset", v);
  }

  get outline(): boolean {
    return this.hasAttribute("outline");
  }
  set outline(v: boolean) {
    this.toggleAttribute("outline", v);
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ) {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    this.innerHTML = `<span class="pkts-badge"><slot></slot></span>`;
    this.containerEl = this.querySelector("span")!;
  }

  protected render(): void {
    if (!this.containerEl) return;

    this.containerEl.className = [
      "pkts-badge",
      this.color && `pkts-${this.color}`,
      this.offset && "pkts-offset",
      this.outline && "pkts-outline",
    ]
      .filter(Boolean)
      .join(" ");
  }
}

customElements.define(PktsBadge.tagName, PktsBadge);
