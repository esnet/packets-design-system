import type {
  PktsInputDatePickerTimeSettings,
  Meridiem,
  TimePrecision,
} from "./PktsInputDatePicker.types";
import {
  getHoursOnChangeMeridiem,
  getMeridiem,
  getTimeWheel,
  getCurrentDateWithoutTime,
  mergeSettings,
  defaultSettings,
} from "./time-utils";

export class PktsInputDatePickerTime extends HTMLElement {
  static tagName = "pkts-input-date-picker-time";

  static get observedAttributes() {
    return ["value"];
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

  public settings?: PktsInputDatePickerTimeSettings;

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
    // Event delegation for wheel button clicks
    this.addEventListener("click", (e) => {
      // Stop propagation to prevent outside click handler from closing the picker
      e.stopPropagation();

      const target = e.target as HTMLElement;
      const button = target.closest("button.time-wheel-button");
      if (!button) return;

      const wheel = button.closest(".time-wheel") as HTMLElement;
      if (!wheel) return;

      const precision = wheel.dataset.precision as TimePrecision | "meridiem";
      const wheelValue = button.textContent?.trim() || "";

      if (precision === "meridiem") {
        this._handleMeridiemChange(wheelValue as Meridiem);
      } else {
        this._handleTimeChange(precision as TimePrecision, Number(wheelValue));
      }

      // Scroll to the selected button
      this._scrollToButton(button);
    });
  }

  private _scrollToButton(button: Element): void {
    const container = button.parentElement;
    if (!container) return;

    const buttonEl = button as HTMLElement;
    container.scrollTo({
      top:
        buttonEl.offsetTop -
        container.offsetHeight / 2 +
        buttonEl.offsetHeight / 2,
      behavior: "smooth",
    });
  }

  private _handleTimeChange(precision: TimePrecision, timeValue: number): void {
    let updateDate: Date;
    if (this.value) {
      updateDate = new Date(this.value);
    } else {
      updateDate = getCurrentDateWithoutTime();
    }

    switch (precision) {
      case "second":
        updateDate.setSeconds(timeValue);
        break;
      case "minute":
        updateDate.setMinutes(timeValue);
        break;
      case "hour":
        updateDate.setHours(timeValue);
        break;
    }

    this.value = updateDate;
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: updateDate },
        bubbles: true,
      })
    );
  }

  private _handleMeridiemChange(newMeridiem: Meridiem): void {
    const currentHours = this.value?.getHours() ?? 0;
    const newHours = getHoursOnChangeMeridiem(currentHours, newMeridiem);
    this._handleTimeChange("hour", newHours);
  }

  private _renderTimeWheel(
    label: string,
    precision: TimePrecision | "meridiem",
    values: string[],
    currentValue: string
  ): string {
    const buttons = values
      .map(
        (v) => `
        <button
          class="time-wheel-button ${v === currentValue ? "selected" : ""}"
          type="button"
        >
          ${v}
        </button>
      `
      )
      .join("");

    return `
      <div class="time-wheel" data-precision="${precision}">
        <div class="label">${label}</div>
        <div class="time-wheel-button-group">
          <div class="padding"></div>
          ${buttons}
          <div class="padding"></div>
        </div>
      </div>
    `;
  }

  protected render(): void {
    const mergedSettings = mergeSettings(this.settings);
    const {
      format: formatSetting,
      hour: hourSetting,
      minute: minuteSetting,
      second: secondSetting,
    } = mergedSettings;

    const wheels: string[] = [];

    // Hour wheel
    if (hourSetting) {
      const values =
        typeof hourSetting === "boolean"
          ? getTimeWheel("hour")
          : getTimeWheel(
              "hour",
              hourSetting.min,
              formatSetting === "12-hour" ? hourSetting.max : 23,
              hourSetting.step
            );

      const hourValue = this.value
        ? formatSetting === "12-hour"
          ? String(this.value.getHours() % 12)
          : String(this.value.getHours())
        : "";

      wheels.push(this._renderTimeWheel("Hr", "hour", values, hourValue));
    }

    // Minute wheel
    if (minuteSetting) {
      const values =
        typeof minuteSetting === "boolean"
          ? getTimeWheel("minute")
          : getTimeWheel(
              "minute",
              minuteSetting.min,
              minuteSetting.max,
              minuteSetting.step
            );

      const minuteValue = String(this.value?.getMinutes() ?? "");
      wheels.push(this._renderTimeWheel("Min", "minute", values, minuteValue));
    }

    // Second wheel
    if (secondSetting) {
      const values =
        typeof secondSetting === "boolean"
          ? getTimeWheel("second")
          : getTimeWheel(
              "second",
              secondSetting.min,
              secondSetting.max,
              secondSetting.step
            );

      const secondValue = String(this.value?.getSeconds() ?? "");
      wheels.push(this._renderTimeWheel("Sec", "second", values, secondValue));
    }

    // Meridiem wheel for 12-hour format
    if (formatSetting === "12-hour") {
      const merValue = this.value ? getMeridiem(this.value) : "";
      wheels.push(
        this._renderTimeWheel("Mer", "meridiem", ["AM", "PM"], merValue)
      );
    }

    this.innerHTML = `
      <div class="pkts-input-date-picker-time">
        ${wheels.join("")}
      </div>
    `;

    // Scroll to selected values after render
    setTimeout(() => {
      this.querySelectorAll(".time-wheel-button.selected").forEach((button) => {
        this._scrollToButton(button);
      });
    }, 0);
  }
}

customElements.define(PktsInputDatePickerTime.tagName, PktsInputDatePickerTime);
