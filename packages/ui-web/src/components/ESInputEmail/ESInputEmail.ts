import { ESInputText } from "../ESInputText";
import { ESIcon } from "../ESIcon";

export class ESInputEmail extends ESInputText {
    static tagName = 'es-input-email';

    private _clearBtn!: HTMLDivElement;

    connectedCallback(): void {
        this.actionButtons = `<div id="clearBtn"><${ESIcon.tagName} name="X"></${ESIcon.tagName} ></div>`
        super.connectedCallback();
        this._clearBtn = this.querySelector('#clearBtn')!;
        this._attachAdditionalListener();
    }

    disconnectedCallback(): void {
        this._clearBtn.removeEventListener('click', this._onXClick);
    }

    private _attachAdditionalListener(): void {
        this._clearBtn.addEventListener('click', this._onXClick);
    }

    private _onXClick = () => {
        this.inputEl.value = '';
    }

    protected render(): void {
        super.render();
        this.containerEl?.classList.add('es-input-email');
    }
}

customElements.define(ESInputEmail.tagName, ESInputEmail);
