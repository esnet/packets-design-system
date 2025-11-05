import styles from "./ESInputSearch.module.css";
import { ESInputText } from "../ESInputText";
import { createIcons, X, Search } from 'lucide'; 

export class ESInputSearch extends ESInputText {
    static tagName = 'es-input-search';

    private _clearBtn!: HTMLDivElement;
    private _searchBtn!: HTMLDivElement;

    public onSearchClick?: () => void;

    connectedCallback(): void {
        this._renderActionButton();
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
            this.actionButtons = `<div id="searchBtn"><i data-lucide="search"></i></div>`
            this._searchBtn = this.querySelector('#searchBtn')!;
        } else {
            this.actionButtons = `<div id="clearBtn"><i data-lucide="X"></i></div>`
            this._clearBtn = this.querySelector('#clearBtn')!;
        }
        createIcons({ icons: { X, Search } });
    }

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', 'search');
        this.containerEl?.classList.add(styles.ESInputSearch);
        createIcons({ icons: { X, Search } });
    }   
}

customElements.define(ESInputSearch.tagName, ESInputSearch);
