import { PktsInputText } from "../PktsInputText/PktsInputText";
import { PktsIcon } from "../PktsIcon/PktsIcon";

export class PktsInputPassword extends PktsInputText {
    static tagName = 'pkts-input-password';

    private _hidden = true;
    private _eyeBtn!: HTMLDivElement;
    private _clearBtn!: HTMLDivElement;

    connectedCallback(): void {
        this.actionButtons = `
            <div>
                <div id='eyeBtn'><${PktsIcon.tagName} name='eye'></${PktsIcon.tagName}></div>
                <div id='clearBtn'><${PktsIcon.tagName} name='X'></${PktsIcon.tagName}></div>
            </div>
            `;
        super.connectedCallback();
        this._eyeBtn = this.querySelector('#eyeBtn')!;
        this._clearBtn = this.querySelector('#clearBtn')!;
        this._attachAdditionalListeners();
    }

    disconnectedCallback(): void {
        this._eyeBtn.removeEventListener('click', this._toggleVisibility);
        this._clearBtn.removeEventListener('click', this._onXClick);
    }

    private _attachAdditionalListeners(): void {
        this._eyeBtn.addEventListener('click', this._toggleVisibility);
        this._clearBtn.addEventListener('click', this._onXClick);
    }

    private _toggleVisibility = (): void => {
        this._hidden = !this._hidden;
        this.inputEl.type = this._hidden ? 'password' : 'text';
        this._updateEyeIcon();
    }

    private _onXClick = () => {
        this.inputEl.value = '';
    }

    private _updateEyeIcon(): void {
        if (this._eyeBtn) this._eyeBtn.innerHTML = `<${PktsIcon.tagName} name='${this._hidden ? 'eye' : 'eye-off'}'></${PktsIcon.tagName}>`;
    }

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', `${this._hidden ? 'password' : 'text'}`);
        this.containerEl?.classList.add('pkts-input-password');
    }
}

customElements.define(PktsInputPassword.tagName, PktsInputPassword);