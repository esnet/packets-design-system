import styles from "./ESInputPassword.module.css";
import { ESInputText } from "../ESInputText";
import { createIcons, Eye, EyeOff, X } from 'lucide';

export class ESInputPassword extends ESInputText {
    static tagName = 'es-input-password';

    private _hidden = true;
    private _eyeBtn!: HTMLDivElement;
    private _clearBtn!: HTMLDivElement;

    connectedCallback(): void {
        this.actionButtons = `
            <div>
                <div id='eyeBtn'><i data-lucide='eye'></i></div>
                <div id='clearBtn'><i data-lucide='X'></i></div>
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
        if (this._eyeBtn) this._eyeBtn.innerHTML = `<i data-lucide='${this._hidden ? 'eye' : 'eye-off'}'></i>`;
        createIcons({ icons: { Eye, EyeOff, X } });
    }

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', `${this._hidden ? 'password' : 'text'}`);
        this.containerEl?.classList.add(styles.ESInputPassword);
        createIcons({ icons: { Eye, EyeOff, X } });
    }
}

customElements.define(ESInputPassword.tagName, ESInputPassword);