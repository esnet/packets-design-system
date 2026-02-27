import { PktsInputText } from "../PktsInputText/PktsInputText";
import { PktsIcon } from "../PktsIcon/PktsIcon";

export class PktsInputEmail extends PktsInputText {
    static tagName = 'pkts-input-email';

    private _clearBtn!: HTMLDivElement;

    connectedCallback(): void {
        this.actionButtons = `<div id="clearBtn"><${PktsIcon.tagName} name="X"></${PktsIcon.tagName} ></div>`
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
        this.containerEl?.classList.add('pkts-input-email');
    }
}

customElements.define(PktsInputEmail.tagName, PktsInputEmail);
