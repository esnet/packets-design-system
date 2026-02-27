import { PktsInputDatePickerProps } from "./PktsInputDatePicker.types";
import {
  flattenedDateGrid,
  getMonthName,
  monthNames,
  orderDates,
  weekdayNames,
} from "./date-utils";

export class PktsInputDatePickerDate extends HTMLElement {
  static tagName = "pkts-input-date-picker-date";

  static get observedAttributes() {
    return ["value", "range-end-value", "is-date-range"];
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

  get isDateRange(): boolean {
    return this.hasAttribute("is-date-range");
  }
  set isDateRange(v: boolean) {
    if (v) {
      this.setAttribute("is-date-range", "");
    } else {
      this.removeAttribute("is-date-range");
    }
  }

  public settings?: PktsInputDatePickerDateSettings;

  private view: "day" | "month" | "year" = "day";
  private viewDate: Date;
  private firstSelectedDate: Date | null = null;

  constructor() {
    super();
    this.viewDate = this.value ? new Date(this.value) : new Date();
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
    // Event delegation for all button clicks
    this.addEventListener("click", (e) => {
      // Stop propagation to prevent outside click handler from closing the picker
      e.stopPropagation();

      const target = e.target as HTMLElement;
      const button = target.closest("button");
      if (!button || button.disabled) return;

      // Handle navigation
      if (button.classList.contains("nav-left")) {
        this._navigate(-1);
      } else if (button.classList.contains("nav-right")) {
        this._navigate(1);
      } else if (button.classList.contains("nav-month")) {
        this._changeView(this.view === "month" ? "day" : "month");
      } else if (button.classList.contains("nav-year")) {
        this._changeView(this.view === "year" ? "day" : "year");
      } else if (button.dataset.day) {
        this._handleDayClick(new Date(button.dataset.day));
      } else if (button.dataset.month !== undefined) {
        this._handleMonthClick(parseInt(button.dataset.month));
      } else if (button.dataset.year) {
        this._handleYearClick(parseInt(button.dataset.year));
      }
    });
  }

  private _navigate(direction: number): void {
    switch (this.view) {
      case "day":
        this.viewDate = new Date(
          this.viewDate.setMonth(this.viewDate.getMonth() + direction)
        );
        break;
      case "month":
        this.viewDate = new Date(
          this.viewDate.setFullYear(this.viewDate.getFullYear() + direction)
        );
        break;
      case "year":
        this.viewDate = new Date(
          this.viewDate.setFullYear(this.viewDate.getFullYear() + direction * 8)
        );
        break;
    }
    this.render();
  }

  private _changeView(newView: "day" | "month" | "year"): void {
    this.view = newView;
    this.render();
  }

  private _handleDayClick(dateInfo: Date): void {
    console.log("_handleDayClick called", { dateInfo, isDateRange: this.isDateRange, firstSelectedDate: this.firstSelectedDate });

    this.viewDate = new Date(dateInfo);

    // Preserve time from current value
    dateInfo.setHours(
      this.value?.getHours() ?? 0,
      this.value?.getMinutes() ?? 0,
      this.value?.getSeconds() ?? 0,
      this.value?.getMilliseconds() ?? 0
    );

    if (!this.isDateRange) {
      this.value = dateInfo;
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: { value: dateInfo },
          bubbles: true,
        })
      );
    } else {
      // Date range logic
      console.log("Date range logic - firstSelectedDate:", this.firstSelectedDate);
      if (this.firstSelectedDate === null) {
        console.log("Setting first date:", dateInfo);
        this.firstSelectedDate = new Date(dateInfo);
        this.value = this.firstSelectedDate;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { value: this.firstSelectedDate },
            bubbles: true,
          })
        );
        this.dispatchEvent(
          new CustomEvent("range-end-change", {
            detail: { rangeEndValue: undefined },
            bubbles: true,
          })
        );
      } else {
        console.log("Setting second date (range end):", dateInfo);
        const [start, end] = orderDates(this.firstSelectedDate, dateInfo);
        this.value = start;
        this.rangeEndValue = end;
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { value: start },
            bubbles: true,
          })
        );
        this.dispatchEvent(
          new CustomEvent("range-end-change", {
            detail: { rangeEndValue: end },
            bubbles: true,
          })
        );
        this.firstSelectedDate = null;
      }
    }
    console.log("After click - firstSelectedDate:", this.firstSelectedDate);
    this.render();
  }

  private _handleMonthClick(monthIndex: number): void {
    this.viewDate = new Date(this.viewDate.setMonth(monthIndex));
    this._changeView("day");
  }

  private _handleYearClick(year: number): void {
    this.viewDate = new Date(this.viewDate.setFullYear(year));
    this._changeView("day");
  }

  private _renderNavigation(): string {
    const monthButton = `
      <button class="nav-month" type="button">
        ${getMonthName(this.viewDate)}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    `;

    const yearButton = `
      <button class="nav-year" type="button">
        ${this.viewDate.getFullYear()}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    `;

    return `
      <div class="nav">
        <button class="nav-button nav-left" type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div class="nav-info">
          ${monthButton}
          ${yearButton}
        </div>
        <button class="nav-button nav-right" type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    `;
  }

  private _renderDayGrid(): string {
    const { min: minSetting, max: maxSetting } = this.settings ?? {};

    const weekdayHeaders = weekdayNames
      .map((day) => `<div class="day-grid-header">${day}</div>`)
      .join("");

    const dates = flattenedDateGrid(this.viewDate);
    const dateButtons = dates.map((dateInfo) => {
      const isDisabled =
        dateInfo.getMonth() !== this.viewDate.getMonth() ||
        (minSetting && dateInfo < minSetting) ||
        (maxSetting && dateInfo > maxSetting);

      const isSelected =
        this.value && dateInfo.toDateString() === this.value.toDateString();
      const isToday = dateInfo.toDateString() === new Date().toDateString();

      let classes = ["day-grid-button"];
      if (isSelected) classes.push("selected");
      if (isToday) classes.push("today");

      // Date range specific classes
      if (this.isDateRange && this.value && this.rangeEndValue) {
        if (dateInfo.toDateString() === this.value.toDateString()) {
          classes.push("date-range-start", "date-range-edge");
        } else if (
          dateInfo.toDateString() === this.rangeEndValue.toDateString()
        ) {
          classes.push("date-range-end", "date-range-edge");
        } else if (dateInfo > this.value && dateInfo < this.rangeEndValue) {
          classes.push("date-range-middle");
        }
      }

      return `
        <button
          class="${classes.join(" ")}"
          ${isDisabled ? "disabled" : ""}
          data-day="${dateInfo.toISOString()}"
          type="button"
        >
          ${dateInfo.getDate()}
        </button>
      `;
    }).join("");

    return `<div class="day-grid">${weekdayHeaders}${dateButtons}</div>`;
  }

  private _renderMonthGrid(): string {
    const { min: minSetting, max: maxSetting } = this.settings ?? {};

    const buttons = monthNames
      .map((monthName, monthIndex) => {
        const monthDate = new Date();
        monthDate.setFullYear(this.viewDate.getFullYear(), monthIndex, 1);

        const isDisabled =
          (minSetting && monthDate < minSetting) ||
          (maxSetting && monthDate > maxSetting);

        const isSelected =
          this.value &&
          monthDate.getMonth() === this.value.getMonth() &&
          monthDate.getFullYear() === this.value.getFullYear();

        return `
          <button
            class="month-grid-button ${isSelected ? "selected" : ""}"
            ${isDisabled ? "disabled" : ""}
            data-month="${monthIndex}"
            type="button"
          >
            ${monthName}
          </button>
        `;
      })
      .join("");

    return `<div class="month-grid">${buttons}</div>`;
  }

  private _renderYearGrid(): string {
    const { min: minSetting, max: maxSetting } = this.settings ?? {};

    const buttons = Array.from(
      { length: 20 },
      (_, i) => this.viewDate.getFullYear() + i - 10
    )
      .map((year) => {
        const yearDate = new Date(0);
        yearDate.setFullYear(year, 0, 1);

        const isDisabled =
          (minSetting && yearDate < minSetting) ||
          (maxSetting && yearDate > maxSetting);

        const isSelected = this.value && year === this.value.getFullYear();

        return `
          <button
            class="year-grid-button ${isSelected ? "selected" : ""}"
            ${isDisabled ? "disabled" : ""}
            data-year="${year}"
            type="button"
          >
            ${year}
          </button>
        `;
      })
      .join("");

    return `<div class="year-grid">${buttons}</div>`;
  }

  protected render(): void {
    let menuContent = "";
    switch (this.view) {
      case "day":
        menuContent = this._renderDayGrid();
        break;
      case "month":
        menuContent = this._renderMonthGrid();
        break;
      case "year":
        menuContent = this._renderYearGrid();
        break;
    }

    this.innerHTML = `
      <div class="pkts-input-date-picker-date">
        ${this._renderNavigation()}
        ${menuContent}
      </div>
    `;
  }
}

customElements.define(PktsInputDatePickerDate.tagName, PktsInputDatePickerDate);
