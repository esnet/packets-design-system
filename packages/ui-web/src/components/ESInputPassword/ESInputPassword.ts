import { ESInputText } from "../ESInputText";
import { ESIcon } from "../ESIcon";

export class ESInputPassword extends ESInputText {
    static tagName = 'es-input-password';

    private _hidden = true;
    private _eyeBtn!: HTMLDivElement;
    private _clearBtn!: HTMLDivElement;

    connectedCallback(): void {
        this.actionButtons = `
            <div>
                <div id='eyeBtn'><${ESIcon.tagName} name='eye'></${ESIcon.tagName}></div>
                <div id='clearBtn'><${ESIcon.tagName} name='X'></${ESIcon.tagName}></div>
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
        if (this._eyeBtn) this._eyeBtn.innerHTML = `<${ESIcon.tagName} name='${this._hidden ? 'eye' : 'eye-off'}'></${ESIcon.tagName}>`;
    }

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', `${this._hidden ? 'password' : 'text'}`);
        this.containerEl?.classList.add('es-input-password');
    }
}

customElements.define(ESInputPassword.tagName, ESInputPassword);