import type { ESInputDatePickerDateSettings } from "../ESInputDatePicker/ESInputDatePicker.types";
import { formatDate } from "../ESInputDate/format-utils";

export interface DateRange {
  start?: Date;
  end?: Date;
}

export interface ESInputDateRangeProps {
  variant?: "primary" | "branded";
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  dateSettings?: ESInputDatePickerDateSettings;
}

export class ESInputDateRange
  extends HTMLElement
  implements ESInputDateRangeProps
{
  static tagName = "es-input-date-range";

  static get observedAttributes() {
    return ["variant", "error", "disabled", "placeholder", "value-start", "value-end"];
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

  get valueStart(): Date | undefined {
    const val = this.getAttribute("value-start");
    return val ? new Date(val) : undefined;
  }
  set valueStart(v: Date | undefined) {
    if (v) {
      this.setAttribute("value-start", v.toISOString());
    } else {
      this.removeAttribute("value-start");
    }
  }

  get valueEnd(): Date | undefined {
    const val = this.getAttribute("value-end");
    return val ? new Date(val) : undefined;
  }
  set valueEnd(v: Date | undefined) {
    if (v) {
      this.setAttribute("value-end", v.toISOString());
    } else {
      this.removeAttribute("value-end");
    }
  }

  public dateSettings?: ESInputDatePickerDateSettings;

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
      console.log("ESInputDateRange attributeChangedCallback", { name, oldVal, newVal, focused: this._focused });
      // Don't re-render while picker is open to avoid destroying it mid-selection
      if (!this._focused) {
        console.log("Re-rendering (focused=false)");
        this.render();
      } else {
        console.log("Just updating input value (focused=true)");
        // Just update the input value without destroying the picker
        this._updateInputValue();
      }
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
    this.pickerEl = this.querySelector("es-input-date-picker") as any;
    if (this.pickerEl) {
      this.pickerEl.addEventListener("change", (e: Event) => {
        const customEvent = e as CustomEvent;
        this.valueStart = customEvent.detail.value;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: {
              value: {
                start: this.valueStart,
                end: this.valueEnd,
              },
            },
            bubbles: true,
          })
        );
      });

      this.pickerEl.addEventListener("range-end-change", (e: Event) => {
        const customEvent = e as CustomEvent;
        this.valueEnd = customEvent.detail.rangeEndValue;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: {
              value: {
                start: this.valueStart,
                end: this.valueEnd,
              },
            },
            bubbles: true,
          })
        );
      });
    }
  }

  private _handleOutsideClick = (e: Event): void => {
    console.log("Outside click handler", { target: e.target, contains: this.contains(e.target as Node) });
    if (!this.contains(e.target as Node)) {
      console.log("Click was outside, closing picker");
      this._focused = false;
      this.render();
    }
  };

  disconnectedCallback(): void {
    document.removeEventListener("click", this._handleOutsideClick);
  }

  private _formatRangeValue(): string {
    if (!this.valueStart && !this.valueEnd) return "";
    return `${this.valueStart ? formatDate(this.valueStart) : ""} - ${this.valueEnd ? formatDate(this.valueEnd) : ""}`;
  }

  private _updateInputValue(): void {
    const inputEl = this.querySelector("input") as HTMLInputElement;
    if (inputEl) {
      inputEl.value = this._formatRangeValue();
    }

    // Also update the picker's value attributes
    const picker = this.querySelector("es-input-date-picker") as any;
    if (picker) {
      picker.value = this.valueStart;
      picker.rangeEndValue = this.valueEnd;
    }
  }

  protected render(): void {
    const formattedValue = this._formatRangeValue();
    const className = ["es-input-date-range"];
    if (this._focused) className.push("focus");
    if (this.variant) className.push(this.variant);

    // Build input with calendar icon
    const inputClasses = ["es-input-text"];
    if (this.variant === "branded") inputClasses.push("es-branded");
    if (this.error) inputClasses.push("es-error");
    if (this.disabled) inputClasses.push("es-disabled");

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
            ? `<es-input-date-picker
                 type="daterange"
                 ${this.valueStart ? `value="${this.valueStart.toISOString()}"` : ""}
                 ${this.valueEnd ? `range-end-value="${this.valueEnd.toISOString()}"` : ""}
               ></es-input-date-picker>`
            : ""
        }
      </div>
    `;

    // Re-attach event listeners after render
    this._attachEventListeners();

    // Pass settings to picker
    if (this._focused) {
      const picker = this.querySelector("es-input-date-picker") as any;
      if (picker) {
        picker.dateSettings = this.dateSettings;
      }
    }
  }
}

customElements.define(ESInputDateRange.tagName, ESInputDateRange);
