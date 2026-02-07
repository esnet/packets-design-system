import { SlottedComponent } from "../../lib/SlottedComponent";
import { ESChipProps } from "./ESChip.types";
import { ESIcon } from "../ESIcon";

export class ESChip extends SlottedComponent implements ESChipProps {
  static tagName = "es-chip";

  static get observedAttributes() {
    return ["variant", "rounded", "disabled", "deletable"];
  }

  get variant(): "primary" | "outline" {
    return (this.getAttribute("variant") as any) ?? "primary";
  }
  set variant(v: "primary" | "outline") {
    this.setAttribute("variant", v ?? "primary");
  }

  get rounded(): boolean {
    return this.hasAttribute("rounded");
  }
  set rounded(v: boolean) {
    v ? this.setAttribute("rounded", "") : this.removeAttribute("rounded");
  }

  get disabled(): boolean {
    return this.hasAttribute("disabled");
  }
  set disabled(v: boolean) {
    v ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }

  get deletable(): boolean {
    return this.hasAttribute("deletable");
  }
  set deletable(v: boolean) {
    v ? this.setAttribute("deletable", "") : this.removeAttribute("deletable");
  }

  private buttonEl!: HTMLButtonElement;
  private deleteIconEl?: HTMLElement;
  onDelete?: () => void;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._attachEventListeners();
  }

  disconnectedCallback(): void {
    this.buttonEl?.removeEventListener("click", this._handleClick);
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (oldVal !== newVal) this.render();
  }

  protected _renderInitial(): void {
    this.innerHTML = `
      <button type="button" class="es-chip">
        <slot></slot>
      </button>
    `;

    this.buttonEl = this.querySelector("button")!;

    if (this.deletable || this.onDelete) {
      this._addDeleteIcon();
    }

    this._attachEventListeners();
  }

  private _addDeleteIcon(): void {
    if (!this.deleteIconEl) {
      this.deleteIconEl = document.createElement(ESIcon.tagName);
      this.deleteIconEl.setAttribute("name", "X");
      this.deleteIconEl.classList.add("delete-icon");
      this.buttonEl.appendChild(this.deleteIconEl);
    }
  }

  private _removeDeleteIcon(): void {
    if (this.deleteIconEl) {
      this.deleteIconEl.remove();
      this.deleteIconEl = undefined;
    }
  }

  private _attachEventListeners(): void {
    if (this.buttonEl) {
      this.buttonEl.addEventListener("click", this._handleClick);
    }
  }

  private _handleClick = (e: Event) => {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    if (this.deletable || this.onDelete) {
      // Dispatch custom event for addEventListener pattern
      this.dispatchEvent(new CustomEvent('delete', { bubbles: true, cancelable: true }));

      // Call onDelete if set (for direct property assignment pattern)
      if (this.onDelete) {
        this.onDelete();
      } else {
        this.remove();
      }
    }
  };

  protected render(): void {
    if (!this.buttonEl) return;

    // Build class list
    const classes = ["es-chip"];

    if (this.variant === "outline") {
      classes.push("es-outline");
    }

    if (this.rounded) {
      classes.push("es-rounded");
    }

    if (this.disabled) {
      classes.push("es-disabled");
    }

    this.buttonEl.className = classes.join(" ");
    this.buttonEl.disabled = this.disabled;

    // Handle delete icon
    if (this.deletable || this.onDelete) {
      this._addDeleteIcon();
    } else {
      this._removeDeleteIcon();
    }
  }
}

customElements.define(ESChip.tagName, ESChip);
