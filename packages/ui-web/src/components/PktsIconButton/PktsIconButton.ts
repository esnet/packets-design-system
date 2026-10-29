import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsIconButtonProps } from "./PktsIconButton.types";

export class PktsIconButton
  extends SlottedComponent
  implements PktsIconButtonProps
{
  static tagName = "pkts-icon-button";
  static get observedAttributes() {
    return ["class", "variant", "disabled", "square"];
  }

  get variant():
    | "default"
    | "branded"
    | "fancy"
    | "destructive"
    | "borderless"
    | "minimal"
    | "simple"
    | "destructive" {
    return (this.getAttribute("variant") as any) ?? "secondary";
  }
  set variant(
    v:  "default" | "branded" | "fancy" | "destructive" | "borderless" | "minimal" | "simple",
  ) {
    this.setAttribute("variant", v ?? "secondary");
  }

  get size(): "medium" | "xxlarge" {
    return (this.getAttribute("size") as any) ?? "medium";
  }
  set size(v: "medium" | "xxlarge") {
    this.setAttribute("size", v);
  }


  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }
  set disabled(v: boolean) {
    v ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }

  get square(): boolean {
    return this.hasAttribute("square");
  }
  set square(v: boolean) {
    v ? this.setAttribute("square", "") : this.removeAttribute("square");
  }

  private buttonEl!: HTMLButtonElement;

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
    this.innerHTML = `
            <button type="button" ${this.disabled ? "disabled" : ""}>
                <slot></slot>
            </button>
        `;

    this.buttonEl = this.querySelector("button")!;
  }

  protected render(): void {
    if (!this.buttonEl) return;

    this.buttonEl.className = [
      "pkts-icon-button",
      `pkts-${this.variant}`,
      `pkts-${this.size}`,
      this.square ? "pkts-square" : "",
      this.getAttribute("class") || "",
    ]
      .filter(Boolean)
      .join(" ");

    if (this.disabled) {
      this.buttonEl.setAttribute("disabled", "");
    } else {
      this.buttonEl.removeAttribute("disabled");
    }
  }
}

customElements.define(PktsIconButton.tagName, PktsIconButton);
