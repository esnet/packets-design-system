import { PktsInputText } from "../PktsInputText/PktsInputText";
import { PktsIcon } from "../PktsIcon/PktsIcon";

export class PktsInputEmail extends PktsInputText {
  static tagName = "pkts-input-email";

  private _clearBtn?: HTMLDivElement;
  private _actionIcon?: HTMLElement;

  connectedCallback(): void {
    this.actionButtons = `
      <div class="action-buttons" id="clearBtn">
        <${PktsIcon.tagName} name="mail"></${PktsIcon.tagName}>
      </div>
    `;

    super.connectedCallback();

    this._clearBtn = this.querySelector<HTMLDivElement>("#clearBtn")!;
    this._actionIcon =
      this._clearBtn.querySelector(PktsIcon.tagName)!;

    this._clearBtn.addEventListener("click", this._onActionClick);
    this.inputEl.addEventListener("input", this._syncActionIcon);

    this._syncActionIcon();
  }

  disconnectedCallback(): void {
    this._clearBtn?.removeEventListener("click", this._onActionClick);
    this.inputEl?.removeEventListener("input", this._syncActionIcon);
  }

  private _onActionClick = (): void => {
    if (!this.inputEl.value) return;

    this.inputEl.value = "";
    this.inputEl.dispatchEvent(
      new Event("input", { bubbles: true }),
    );
    this._syncActionIcon();
    this.inputEl.focus();
  };

  private _syncActionIcon = (): void => {
    const hasValue = Boolean(this.inputEl?.value);

    this._actionIcon?.setAttribute(
      "name",
      hasValue ? "X" : "mail",
    );

    this._clearBtn?.setAttribute(
      "aria-label",
      hasValue ? "Clear email" : "Email",
    );
  };

  protected render(): void {
    super.render();
    this.containerEl?.classList.add("pkts-input-email");
    this._syncActionIcon();
  }
}

customElements.define(PktsInputEmail.tagName, PktsInputEmail);