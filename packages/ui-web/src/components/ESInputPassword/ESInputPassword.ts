import styles from "./ESInputPassword.module.css";
import { ESInputText } from "../ESInputText";
import { createIcons, Eye, EyeOff, X } from 'lucide'; 

export class ESInputPassword extends ESInputText {
    static observedAttributes = [...ESInputText.observedAttributes];
    static tagName = 'es-input-password';

    private _hidden = true;
    private eyeBtn: HTMLDivElement | null = null;
    private clearBtn: HTMLDivElement | null = null;

    constructor() {
        super();
        this.actionButtons = `
            <div id='eyeBtn'><i data-lucide='eye'></i></div>
            <div id='clearBtn'><i data-lucide='X'></i></div>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.eyeBtn = this.querySelector('#eyeBtn');
        this.clearBtn = this.querySelector('#clearBtn');
        this.attachEventListeners();
    }

    disconnectedCallback(): void {
        this.eyeBtn?.removeEventListener('click', this.toggleVisibility);
        this.clearBtn?.removeEventListener('click', this.onXClick);
    }

    private attachEventListeners(): void {
        this.eyeBtn?.addEventListener('click', this.toggleVisibility);
        this.clearBtn?.addEventListener('click', this.onXClick);
    }

    private toggleVisibility = (): void => {
        this._hidden = !this._hidden;
        if (!this.inputEl) return;

        this.inputEl.type = this._hidden ? 'password' : 'text';
        this.updateEyeIcon();
    }

    private onXClick = () => {
        if (!this.inputEl) return;
        this.inputEl.value = '';
    }

    private updateEyeIcon(): void {
        if (!this.eyeBtn) return;
        this.eyeBtn.innerHTML = `<i data-lucide='${this._hidden ? 'eye' : 'eye-off'}'></i>`;
        createIcons({ icons: { Eye, EyeOff, X } });
    }

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', `${this._hidden ? 'password' : 'text'}`);
        this.containerEl?.classList.add(styles.ESInputPassword);
        createIcons({ icons: { Eye, EyeOff, X } });
        
        this.updateEyeIcon();
    }
}

customElements.define(ESInputPassword.tagName, ESInputPassword);
