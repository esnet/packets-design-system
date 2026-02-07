import type {
  ESInputDatePickerProps,
  ESInputDatePickerTimeSettings,
  ESInputDatePickerDateSettings,
} from "./ESInputDatePicker.types";

export class ESInputDatePicker
  extends HTMLElement
  implements ESInputDatePickerProps
{
  static tagName = "es-input-date-picker";

  static get observedAttributes() {
    return ["type", "value", "range-end-value"];
  }

  get type(): "date" | "time" | "datetime" | "daterange" {
    return (this.getAttribute("type") as any) ?? "daterange";
  }
  set type(v: "date" | "time" | "datetime" | "daterange") {
    this.setAttribute("type", v ?? "daterange");
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

  get rangeEndValue(): Date | undefined {
    const val = this.getAttribute("range-end-value");
    return val ? new Date(val) : undefined;
  }
  set rangeEndValue(v: Date | undefined) {
    if (v) {
      this.setAttribute("range-end-value", v.toISOString());
    } else {
      this.removeAttribute("range-end-value");
    }
  }

  public timeSettings?: ESInputDatePickerTimeSettings;
  public dateSettings?: ESInputDatePickerDateSettings;

  constructor() {
    super();
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (oldVal !== newVal) {
      // Don't re-render after initial render - this would destroy child components
      if (!this.querySelector(".es-input-date-picker")) {
        this.render();
      } else {
        // Update child component properties directly without re-rendering
        const datePickerEl = this.querySelector("es-input-date-picker-date") as any;
        const timePickerEl = this.querySelector("es-input-date-picker-time") as any;

        if (datePickerEl) {
          if (name === "value" && this.value) {
            datePickerEl.value = this.value;
          }
          if (name === "range-end-value" && this.rangeEndValue) {
            datePickerEl.rangeEndValue = this.rangeEndValue;
          }
        }

        if (timePickerEl && name === "value" && this.value) {
          timePickerEl.value = this.value;
        }
      }
    }
  }

  protected render(): void {
    const type = this.type;
    const className = ["es-input-date-picker"];

    // Build the inner content based on type
    let innerContent = "";

    switch (type) {
      case "time":
        innerContent = `<es-input-date-picker-time></es-input-date-picker-time>`;
        break;
      case "datetime":
        innerContent = `
          <es-input-date-picker-date></es-input-date-picker-date>
          <es-input-date-picker-time></es-input-date-picker-time>
        `;
        break;
      case "daterange":
        innerContent = `<es-input-date-picker-date is-date-range="true"></es-input-date-picker-date>`;
        break;
      case "date":
      default:
        innerContent = `<es-input-date-picker-date></es-input-date-picker-date>`;
        break;
    }

    this.innerHTML = `<div class="${className.join(" ")}">${innerContent}</div>`;

    // Pass props to child components
    this._updateChildComponents();
  }

  private _updateChildComponents(): void {
    const datePickerEl = this.querySelector(
      "es-input-date-picker-date"
    ) as any;
    const timePickerEl = this.querySelector(
      "es-input-date-picker-time"
    ) as any;

    if (datePickerEl) {
      datePickerEl.value = this.value;
      datePickerEl.rangeEndValue = this.rangeEndValue;
      datePickerEl.settings = this.dateSettings;

      // Listen for changes from date picker
      datePickerEl.addEventListener("change", (e: CustomEvent) => {
        this.value = e.detail.value;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { value: e.detail.value },
            bubbles: true,
          })
        );
      });

      datePickerEl.addEventListener("range-end-change", (e: CustomEvent) => {
        this.rangeEndValue = e.detail.rangeEndValue;
        this.dispatchEvent(
          new CustomEvent("range-end-change", {
            detail: { rangeEndValue: e.detail.rangeEndValue },
            bubbles: true,
          })
        );
      });
    }

    if (timePickerEl) {
      timePickerEl.value = this.value;
      timePickerEl.settings = this.timeSettings;

      // Listen for changes from time picker
      timePickerEl.addEventListener("change", (e: CustomEvent) => {
        this.value = e.detail.value;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { value: e.detail.value },
            bubbles: true,
          })
        );
      });
    }
  }
}

customElements.define(ESInputDatePicker.tagName, ESInputDatePicker);
