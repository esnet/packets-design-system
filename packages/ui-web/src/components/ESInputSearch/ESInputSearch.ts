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
    }

    private _attachAdditionalListener(): void {
        this._searchBtn?.addEventListener("click", this._onSearchClick);
        this._clearBtn?.addEventListener('click', this._onXClick);
    }

    private _onSearchClick = (): void => {
        if (typeof this.onSearchClick === "function") {
            this.onSearchClick();
        }
    };

    private _onXClick = () => {
        this.inputEl.value = '';
    }

    private _renderActionButton(): void {
        const hasValue = !!this.inputEl?.value?.trim();

        if (!hasValue) {
            this.actionButtons = `<div id="searchBtn"><${ESIcon.tagName} name="search"></${ESIcon.tagName} ></div>`
            this._searchBtn = this.querySelector('#searchBtn')!;
        } else {
            this.actionButtons = `<div id="clearBtn"><${ESIcon.tagName} name="X"></${ESIcon.tagName} ></div>`
            this._clearBtn = this.querySelector('#clearBtn')!;
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
