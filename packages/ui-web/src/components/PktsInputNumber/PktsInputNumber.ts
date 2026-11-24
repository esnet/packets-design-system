import { PktsInputText } from "../PktsInputText/PktsInputText";
import { PktsIcon } from "../PktsIcon/PktsIcon";
import { PktsInputNumberProps } from "./PktsInputNumber.types";

export class PktsInputNumber extends PktsInputText implements PktsInputNumberProps {
  static tagName = "pkts-input-number";
  static get observedAttributes() {
    return [
      "class",
      "value",
      "placeholder",
      "variant",
      "disabled",
      "error",
      "readonly",
      "step",
      "min",
      "max",
    ];
  }

  get min(): string {
    return this.getAttribute("min") ?? "";
  }
  set min(v: string) {
    this.setAttribute("min", v ?? "");
  }

  get max(): string {
    return this.getAttribute("max") ?? "";
  }
  set max(v: string) {
    this.setAttribute("max", v ?? "");
  }

  get step(): string {
    return this.getAttribute("step") ?? "";
  }
  set step(v: string) {
    this.setAttribute("step", v ?? "");
  }

  private _addBtn!: HTMLDivElement;
  private _minusBtn!: HTMLDivElement;
  private _addClickHandler!: EventListener;
  private _minusClickHandler!: EventListener;
  private _onAddClickHandler?: () => void;
  private _onMinusClickHandler?: () => void;

  get onAddClick(): (() => void) | undefined {
    return this._onAddClickHandler;
  }
  set onAddClick(fn: (() => void) | undefined) {
    if (fn && typeof fn === "function") {
      this._onAddClickHandler = fn;
    }
  }

  get onMinusClick(): (() => void) | undefined {
    return this._onMinusClickHandler;
  }
  set onMinusClick(fn: (() => void) | undefined) {
    if (fn && typeof fn === "function") {
      this._onMinusClickHandler = fn;
    }
  }

  connectedCallback(): void {
    this._actionButtonsHtml = `
            <div class="action-buttons">
                <div id="addBtn"><${PktsIcon.tagName} name="plus"></${PktsIcon.tagName}></div>
                <div id="minusBtn"><${PktsIcon.tagName} name="minus"></${PktsIcon.tagName}></div>
            </div>  `;
    super.connectedCallback();
    this._addBtn = this.querySelector("#addBtn")!;
    this._minusBtn = this.querySelector("#minusBtn")!;
    this._attachAdditionalListeners();
  }

  disconnectedCallback() {
    this._addBtn.removeEventListener("click", this._addClickHandler);
    this._minusBtn.removeEventListener("click", this._minusClickHandler);
  }

  private _attachAdditionalListeners(): void {
    this._addClickHandler = () => {
      this._changeValue(1);
      this._onAddClickHandler?.();
    };

    this._minusClickHandler = () => {
      this._changeValue(-1);
      this._onMinusClickHandler?.();
    };

    this._addBtn.addEventListener("click", this._addClickHandler);
    this._minusBtn.addEventListener("click", this._minusClickHandler);
  }

  private _changeValue = (direction: 1 | -1) => {
    const step = this.inputEl.hasAttribute("step")
      ? parseFloat(this.inputEl.step)
      : 1;
    const min = this.inputEl.hasAttribute("min")
      ? parseFloat(this.inputEl.min)
      : -Infinity;
    const max = this.inputEl.hasAttribute("max")
      ? parseFloat(this.inputEl.max)
      : Infinity;
    let currentValue = parseFloat(this.inputEl.value);

    if (isNaN(currentValue)) currentValue = 0;

    let newValue = currentValue + direction * step;
    newValue = Math.min(max, Math.max(min, newValue));
    this.inputEl.value = String(newValue);
  };

  protected render(): void {
    super.render();
    this.inputEl?.setAttribute("type", "number");
    this.containerEl?.classList.add("pkts-input-number");
  }
}

customElements.define(PktsInputNumber.tagName, PktsInputNumber);
