import { SlottedComponent } from "../../lib/SlottedComponent";

export class PktsAccordion extends SlottedComponent {
  static tagName = "pkts-accordion";

  static get observedAttributes() {
    return ["header", "footer", "variant", "open"];
  }

  get header(): string {
    return this.getAttribute("header") || "";
  }

  set header(value: string) {
    this.setAttribute("header", value);
  }

  get footer(): string {
    return this.getAttribute("footer") || "";
  }

  set footer(value: string) {
    this.setAttribute("footer", value);
  }

  get variant(): string {
    return this.getAttribute("variant") || "default";
  }

  set variant(value: string) {
    this.setAttribute("variant", value);
  }

  get open(): boolean {
    return this.hasAttribute("open") &&
      this.getAttribute("open") !== "false";
  }

  set open(value: boolean) {
    this.toggleAttribute("open", value);
  }

  private _wrapperEl!: HTMLDivElement;
  private _openBtnEl!: HTMLButtonElement;
  private _iconButtonEl!: HTMLElement;
  private _iconEl!: HTMLElement;
  private _contentEl!: HTMLDivElement;
  private _footerEl?: HTMLDivElement;

  attributeChangedCallback(
    _name: string,
    oldVal: string | null,
    newVal: string | null,
  ): void {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    this.innerHTML = `
      <div class="pkts-accordion">
        <div class="pkts-accordion-header">
          <pkts-icon-button
            variant="simple"
            class="pkts-accordion-chevron-button"
          >
            <pkts-icon name="chevron-right"></pkts-icon>
          </pkts-icon-button>

          <button
            type="button"
            class="pkts-accordion-open-btn"
            aria-expanded="false"
          >
            <span class="pkts-accordion-header-label"></span>
          </button>
        </div>

        <div class="pkts-accordion-content">
          <slot></slot>
        </div>
      </div>
    `;

    this._wrapperEl = this.querySelector(".pkts-accordion")!;
    this._openBtnEl = this.querySelector(".pkts-accordion-open-btn")!;
    this._iconButtonEl = this.querySelector(
      ".pkts-accordion-chevron-button",
    )!;
    this._iconEl = this._iconButtonEl.querySelector("pkts-icon")!;
    this._contentEl = this.querySelector(".pkts-accordion-content")!;

    const toggle = () => {
      this.open = !this.open;
    };

    this._openBtnEl.addEventListener("click", toggle);
    this._iconButtonEl.addEventListener("click", toggle);

    this.render();
  }

  protected render(): void {
    if (!this._wrapperEl) return;

    this._wrapperEl.classList.toggle(
      "pkts-branded",
      this.variant === "branded",
    );
    this._wrapperEl.classList.toggle(
      "pkts-inline",
      this.variant === "inline",
    );

    const labelEl = this._openBtnEl.querySelector(
      ".pkts-accordion-header-label",
    );

    if (labelEl) labelEl.textContent = this.header;

    this._iconEl.setAttribute(
      "name",
      this.open ? "chevron-down" : "chevron-right",
    );

    this._openBtnEl.setAttribute(
      "aria-expanded",
      String(this.open),
    );

    this._iconButtonEl.setAttribute(
      "aria-label",
      `${this.open ? "Collapse" : "Expand"} ${this.header}`,
    );

    this._contentEl.classList.toggle("pkts-hidden", !this.open);

    if (this.footer && this.variant !== "inline") {
      if (!this._footerEl) {
        this._footerEl = document.createElement("div");
        this._footerEl.className = "pkts-accordion-footer";
        this._footerEl.innerHTML = "<span></span>";
        this._wrapperEl.appendChild(this._footerEl);
      }

      this._footerEl.querySelector("span")!.textContent = this.footer;
    } else if (this._footerEl) {
      this._footerEl.remove();
      this._footerEl = undefined;
    }
  }
}

customElements.define(PktsAccordion.tagName, PktsAccordion);