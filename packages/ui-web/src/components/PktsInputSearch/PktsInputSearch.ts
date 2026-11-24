import { PktsInputText } from "../PktsInputText/PktsInputText";
import { PktsIcon } from "../PktsIcon/PktsIcon";
import { PktsInputSearchProps } from "./PktsInputSearch.types";

export class PktsInputSearch extends PktsInputText implements PktsInputSearchProps {
  static tagName = "pkts-input-search";

  private _clearBtn!: HTMLDivElement;
  private _searchBtn!: HTMLDivElement;
  private _onSearchClickHandler?: () => void;
  private _onXClickHandler?: () => void;

  get onSearchClick(): (() => void) | undefined {
    return this._onSearchClickHandler;
  }
  set onSearchClick(fn: (() => void) | undefined) {
    if (fn && typeof fn === "function") {
      this._onSearchClickHandler = fn;
    }
  }

  get onXClick(): (() => void) | undefined {
    return this._onXClickHandler;
  }
  set onXClick(fn: (() => void) | undefined) {
    if (fn && typeof fn === "function") {
      this._onXClickHandler = fn;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._attachAdditionalListener();
  }

  disconnectedCallback(): void {
    this._searchBtn?.removeEventListener("click", this._onSearchClick);
    this._clearBtn?.removeEventListener("click", this._onXClick);
    this.inputEl?.removeEventListener("input", this._onInput);
  }

  private _attachAdditionalListener(): void {
    this.inputEl?.addEventListener("input", this._onInput);
  }

  private _onInput = (): void => {
    this._renderActionButton();
  };

  private _onSearchClick = (): void => {
    this._onSearchClickHandler?.();
  };

  private _onXClick = (): void => {
    this.inputEl.value = "";
    this._renderActionButton();
    this._onXClickHandler?.();
  };

  private _renderActionButton(): void {
    const hasValue = !!this.inputEl?.value?.trim();

    // Remove existing action buttons
    const existingBtn = this.containerEl?.querySelector(
      "#searchBtn, #clearBtn",
    );
    if (existingBtn) {
      existingBtn.remove();
    }

    // Create and append new action button
    if (!hasValue) {
      const searchBtnHtml = `<div id="searchBtn"><${PktsIcon.tagName} name="search"></${PktsIcon.tagName}></div>`;
      this.containerEl?.insertAdjacentHTML("beforeend", searchBtnHtml);
      this._searchBtn = this.querySelector("#searchBtn")!;
      this._searchBtn?.addEventListener("click", this._onSearchClick);
    } else {
      const clearBtnHtml = `<div id="clearBtn"><${PktsIcon.tagName} name="X"></${PktsIcon.tagName}></div>`;
      this.containerEl?.insertAdjacentHTML("beforeend", clearBtnHtml);
      this._clearBtn = this.querySelector("#clearBtn")!;
      this._clearBtn?.addEventListener("click", this._onXClick);
    }
  }

  protected render(): void {
    super.render();
    this.inputEl?.setAttribute("type", "search");
    this.containerEl?.classList.add("pkts-input-search");
    this._renderActionButton();
  }
}

customElements.define(PktsInputSearch.tagName, PktsInputSearch);
