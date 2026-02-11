import type {
  PktsInputDatePickerTimeSettings,
  PktsInputDatePickerDateSettings,
} from "../PktsInputDatePicker/PktsInputDatePicker.types";
import { formatValue } from "./format-utils";

export interface PktsInputDateProps {
  type?: "date" | "time" | "datetime";
  variant?: "primary" | "branded";
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  timeSettings?: PktsInputDatePickerTimeSettings;
  dateSettings?: PktsInputDatePickerDateSettings;
}

export class PktsInputDate extends HTMLElement implements PktsInputDateProps {
  static tagName = "pkts-input-date";

  static get observedAttributes() {
    return ["type", "variant", "error", "disabled", "placeholder", "value"];
  }

  get type(): "date" | "time" | "datetime" {
    return (this.getAttribute("type") as any) ?? "datetime";
  }
  set type(v: "date" | "time" | "datetime") {
    this.setAttribute("type", v ?? "datetime");
  }

  get variant(): "primary" | "branded" {
    return (this.getAttribute("variant") as any) ?? "primary";
  }
  set variant(v: "primary" | "branded") {
    this.setAttribute("variant", v ?? "primary");
  }

  get error(): boolean {
    return this.hasAttribute("error");
  }
  set error(v: boolean) {
    if (v) {
      this.setAttribute("error", "");
    } else {
      this.removeAttribute("error");
    }
  }

  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }
  set disabled(v: boolean) {
    if (v) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get placeholder(): string {
    return this.getAttribute("placeholder") ?? "";
  }
  set placeholder(v: string) {
    this.setAttribute("placeholder", v);
  }

  get value(): Date | undefined {
    const val = this.getAttribute("value");
    return val ? new Date(val) : undefined;
  }
  set value(v: Date | undefined) {
    if (v) {
      this.setAttribute("value", v.toISOString());
    } else {
      this.removeAttribute("value");
    }
  }

  public timeSettings?: PktsInputDatePickerTimeSettings;
  public dateSettings?: PktsInputDatePickerDateSettings;

  private _focused: boolean = false;
  private inputEl?: HTMLInputElement;
  private pickerEl?: HTMLElement;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this.render();
    this._attachEventListeners();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (oldVal !== newVal) {
      this.render();
    }
  }

  private _attachEventListeners(): void {
    // Handle input focus
    this.inputEl = this.querySelector("input") as HTMLInputElement;
    if (this.inputEl) {
      this.inputEl.addEventListener("focus", () => {
        this._focused = true;
        this.render();
      });

      // Handle calendar icon click
      const calendarIcon = this.querySelector(".calendar-icon");
      if (calendarIcon) {
        calendarIcon.addEventListener("click", () => {
          this._focused = !this._focused;
          this.render();
        });
      }
    }

    // Handle clicks outside to close picker
    document.addEventListener("click", this._handleOutsideClick);

    // Handle picker changes
    this.pickerEl = this.querySelector("pkts-input-date-picker") as HTMLElement;
    if (this.pickerEl) {
      this.pickerEl.addEventListener("change", (e: Event) => {
        const customEvent = e as CustomEvent;
        this.value = customEvent.detail.value;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { value: customEvent.detail.value },
            bubbles: true,
          })
        );
      });
    }
  }

  private _handleOutsideClick = (e: Event): void => {
    if (!this.contains(e.target as Node)) {
      this._focused = false;
      this.render();
    }
  };

  disconnectedCallback(): void {
    document.removeEventListener("click", this._handleOutsideClick);
  }

  protected render(): void {
    const formattedValue = formatValue(this.value, this.type);
    const className = ["pkts-input-date"];
    if (this._focused) className.push("focus");
    if (this.variant) className.push(this.variant);

    // Build input with calendar icon
    const inputClasses = ["pkts-input-text"];
    if (this.variant === "branded") inputClasses.push("pkts-branded");
    if (this.error) inputClasses.push("pkts-error");
    if (this.disabled) inputClasses.push("pkts-disabled");

    this.innerHTML = `
      <div class="${className.join(" ")}">
        <div class="${inputClasses.join(" ")}">
          <input
            type="text"
            value="${formattedValue}"
            placeholder="${this.placeholder}"
            readonly
            ${this.disabled ? "disabled" : ""}
          />
          <div class="action-buttons calendar-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>
        ${
          this._focused
            ? `<pkts-input-date-picker
                 type="${this.type}"
                 ${this.value ? `value="${this.value.toISOString()}"` : ""}
               ></pkts-input-date-picker>`
            : ""
        }
      </div>
    `;

    // Re-attach event listeners after render
    this._attachEventListeners();

    // Pass settings to picker
    if (this._focused) {
      const picker = this.querySelector("pkts-input-date-picker") as any;
      if (picker) {
        picker.timeSettings = this.timeSettings;
        picker.dateSettings = this.dateSettings;
      }
    }
  }
}

customElements.define(PktsInputDate.tagName, PktsInputDate);
