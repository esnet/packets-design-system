import { PktsInputTextAreaProps } from "./PktsInputTextArea.types";

export class PktsInputTextArea
  extends HTMLElement
  implements PktsInputTextAreaProps
{
  static tagName = "pkts-input-text-area";

  static get observedAttributes() {
    return ["value", "placeholder", "variant", "resize", "disabled", "error", "readonly"];
  }

  get value(): string {
    return this.getAttribute("value") ?? "";
  }
  set value(v: string) {
    this.setAttribute("value", v);
  }

  get placeholder(): string {
    return this.getAttribute("placeholder") ?? "";
  }
  set placeholder(v: string) {
    this.setAttribute("placeholder", v);
  }

  get variant(): "default" | "branded" {
    return (this.getAttribute("variant") as "branded") ?? "default";
  }
  set variant(v: "default" | "branded") {
    this.setAttribute("variant", v);
  }

  get resize(): "vertical" | "horizontal" | "both" | "none" | null {
    return this.getAttribute("resize") as "vertical" | "horizontal" | "both" | "none" | null;
  }
  set resize(v: "vertical" | "horizontal" | "both" | "none" | null) {
    if (v) this.setAttribute("resize", v);
    else this.removeAttribute("resize");
  }

  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }
  set disabled(v: boolean) {
    this.toggleAttribute("disabled", v);
  }

  get error(): boolean {
    return this.hasAttribute("error");
  }
  set error(v: boolean) {
    this.toggleAttribute("error", v);
  }

  get readonly(): boolean {
    return this.hasAttribute("readonly");
  }
  set readonly(v: boolean) {
    this.toggleAttribute("readonly", v);
  }

  private containerEl!: HTMLDivElement;
  private textareaEl!: HTMLTextAreaElement;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this._renderInitial();
    this._attachEventListeners();
    this.render();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ) {
    if (oldVal !== newVal) this.render();
  }

  private _renderInitial(): void {
    this.innerHTML = `<div class="pkts-input-text-area"><textarea></textarea></div>`;
    this.containerEl = this.querySelector("div")!;
    this.textareaEl = this.querySelector("textarea")!;
  }

  private _attachEventListeners(): void {
    this.textareaEl?.addEventListener("change", () => {
      this.value = this.textareaEl.value;
      this.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  protected render(): void {
    if (!this.containerEl || !this.textareaEl) return;

    this.containerEl.className = [
      "pkts-input-text-area",
      this.variant === "branded" && "pkts-branded",
      this.resize && `pkts-${this.resize}`,
      this.error && "pkts-error",
      this.disabled && "pkts-disabled",
      this.readonly && "pkts-readonly",
    ]
      .filter(Boolean)
      .join(" ");

    this.textareaEl.placeholder = this.placeholder;
    this.textareaEl.value = this.value;
    this.textareaEl.disabled = this.disabled;
    this.textareaEl.readOnly = this.readonly;
  }
}

customElements.define(PktsInputTextArea.tagName, PktsInputTextArea);
