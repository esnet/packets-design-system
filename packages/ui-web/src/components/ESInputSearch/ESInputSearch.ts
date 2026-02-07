import { ESInputText } from "../ESInputText";
import { ESIcon } from "../ESIcon";

export class ESInputSearch extends ESInputText {
    static tagName = 'es-input-search';

    private _clearBtn!: HTMLDivElement;
    private _searchBtn!: HTMLDivElement;
    public onSearchClick?: () => void;

    connectedCallback(): void {
        super.connectedCallback();
        this._attachAdditionalListener();
    }

    disconnectedCallback(): void {
        this._searchBtn?.removeEventListener("click", this._onSearchClick);
        this._clearBtn?.removeEventListener("click", this._onXClick);
        this.inputEl?.removeEventListener('input', this._onInput);
    }

    private _attachAdditionalListener(): void {
        this.inputEl?.addEventListener('input', this._onInput);
    }

    private _onInput = (): void => {
        this._renderActionButton();
    };

    private _onSearchClick = (): void => {
        if (typeof this.onSearchClick === "function") {
            this.onSearchClick();
        }
    };

    private _onXClick = () => {
        this.inputEl.value = '';
        this._renderActionButton();
    }

    private _renderActionButton(): void {
        const hasValue = !!this.inputEl?.value?.trim();

        // Remove existing action buttons
        const existingBtn = this.containerEl?.querySelector('#searchBtn, #clearBtn');
        if (existingBtn) {
            existingBtn.remove();
        }

        // Create and append new action button
        if (!hasValue) {
            const searchBtnHtml = `<div id="searchBtn"><${ESIcon.tagName} name="search"></${ESIcon.tagName}></div>`;
            this.containerEl?.insertAdjacentHTML('beforeend', searchBtnHtml);
            this._searchBtn = this.querySelector('#searchBtn')!;
            this._searchBtn?.addEventListener("click", this._onSearchClick);
        } else {
            const clearBtnHtml = `<div id="clearBtn"><${ESIcon.tagName} name="X"></${ESIcon.tagName}></div>`;
            this.containerEl?.insertAdjacentHTML('beforeend', clearBtnHtml);
            this._clearBtn = this.querySelector('#clearBtn')!;
            this._clearBtn?.addEventListener('click', this._onXClick);
        }
    }

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', 'search');
        this.containerEl?.classList.add('es-input-search');
        this._renderActionButton()
    }   
}

customElements.define(ESInputSearch.tagName, ESInputSearch);
