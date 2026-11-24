import { PktsInputTextProps } from "./PktsInputText.types";

export class PktsInputText extends HTMLElement implements PktsInputTextProps {
  static tagName = "pkts-input-text";
  static get observedAttributes() {
    return [
      "class",
      "value",
      "placeholder",
      "variant",
      "disabled",
      "error",
      "readonly",
    ];
  }

  get value(): string {
    return this.getAttribute("value") ?? "";
  }
  set value(v: string) {
    this.setAttribute("value", v ?? "");
  }

  get placeholder(): string {
    return this.getAttribute("placeholder") ?? "";
  }
  set placeholder(v: string) {
    this.setAttribute("placeholder", v ?? "");
  }

  get variant(): "default" | "branded" {
    return (this.getAttribute("variant") as any) ?? "default";
  }
  set variant(v: "default" | "branded") {
    this.setAttribute("variant", v ?? "default");
  }

  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }
  set disabled(v: boolean) {
    v ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }

  get error(): boolean {
    return this.hasAttribute("error");
  }
  set error(v: boolean) {
    v ? this.setAttribute("error", "") : this.removeAttribute("error");
  }

  get readonly(): boolean {
    return this.hasAttribute("readonly");
  }
  set readonly(v: boolean) {
    v ? this.setAttribute("readonly", "") : this.removeAttribute("readonly");
  }

  protected inputEl!: HTMLInputElement;
  protected containerEl!: HTMLDivElement;
  protected _actionButtonsHtml: string | undefined = undefined;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this._renderInitial();
    this._attachEventListener();
    this.render();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ) {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    const slottedChildren = Array.from(
      this.querySelectorAll<HTMLElement>('[slot="action-buttons"]'),
    );

    this.innerHTML = `
            <div class="pkts-input-text">
                <input type="text" />
                ${this._actionButtonsHtml ?? ""}
            </div>
        `;

    this.containerEl = this.querySelector("div")!;
    this.inputEl = this.querySelector("input")!;

    if (slottedChildren.length) {
      const slotContainer = document.createElement("div");
      slotContainer.className = "action-buttons";
      slottedChildren.forEach((el) => slotContainer.appendChild(el));
      this.containerEl.appendChild(slotContainer);
    }
  }

  private _attachEventListener(): void {
    this.inputEl?.addEventListener("change", () => {
      this.value = this.inputEl.value;
      this.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  protected render(): void {
    if (!this.inputEl || !this.containerEl) return;

    this.containerEl.className = [
      "pkts-input-text",
      this.variant === "branded" ? "pkts-branded" : "",
      this.error ? "pkts-error" : "",
      this.disabled ? "pkts-disabled" : "",
      this.readonly ? "pkts-readonly" : "",
      this.getAttribute("class") || "",
    ]
      .filter(Boolean)
      .join(" ");

    // Pass along non-component attributes to input
    const excludeAttr = ["class", "variant", "error", "actionButton"];
    Array.from(this.attributes)
      .filter((attr) => !excludeAttr.includes(attr.name))
      .forEach((attr) => {
        this.inputEl?.setAttribute(attr.name, attr.value);
      });
  }
}

customElements.define(PktsInputText.tagName, PktsInputText);
