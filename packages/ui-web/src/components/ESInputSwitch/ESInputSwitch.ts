import { ESInputSwitchProps } from "./ESInputSwitch.types";
import { ESIcon } from "../ESIcon";


export class ESInputSwitch extends HTMLElement implements ESInputSwitchProps {
    static tagName = "es-input-switch";
    static get observedAttributes() {
        return ['class', 'variant', 'disabled', 'error', 'checked', 'hide-icon'];
    }

    get variant(): 'primary' | 'secondary' { return (this.getAttribute('variant') as any) ?? 'primary'; }
    set variant(v: 'primary' | 'secondary') { this.setAttribute('variant', v ?? 'primary'); }

    get disabled(): boolean { return this.hasAttribute('disabled'); }
    set disabled(v: boolean) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');}

    get error(): boolean { return this.hasAttribute('error');}
    set error(v: boolean) { v ? this.setAttribute('error', '') : this.removeAttribute('error');}

    get hideIcon(): boolean { return this.hasAttribute('hide-icon');}
    set hideIcon(v: boolean) { v ? this.setAttribute('hide-icon', '') : this.removeAttribute('hide-icon');}

    get checked(): boolean { return this.hasAttribute('checked'); }
    set checked(v: boolean) {
        v ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        if (this.inputEl) this.inputEl.checked = v;
    }
    set defaultChecked(v: boolean) {
        v ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        if (this.inputEl) this.inputEl.checked = v;
    }


    private inputEl!: HTMLInputElement;
    private containerEl!: HTMLDivElement;
    private _switchBtn!: HTMLSpanElement;

    constructor() {
        super();
    }

    connectedCallback(): void {
        this._renderInitial();
        this.attachEventListener();
        this.render();
    }

    disconnectedCallback() {
        this.inputEl?.removeEventListener("change", this._onSwitch);
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _renderInitial(): void {
        this.innerHTML = `
            <div class="es-input-switch">
                <input type="checkbox" ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}/>
                <span class="indicator"></span>
            </div>
        `;

        this.containerEl = this.querySelector("div")!;
        this.inputEl = this.querySelector("input")!;
        this._switchBtn = this.querySelector('span')!;
    }

    protected attachEventListener(): void {
        this.inputEl?.addEventListener("change", this._onSwitch);
    }

    private _onSwitch = () => {
        this.checked = this.inputEl.checked; // sync attribute & state
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };

    protected render(): void {
        if (!this.inputEl || !this.containerEl) return;

        const variant = this.getAttribute("variant") || "primary";
        this.containerEl.className = [
            'es-input-switch',
            variant === 'secondary' ? 'es-secondary' : '',
            this.hasAttribute('error') ? 'es-error' : '',
            this.getAttribute('class') || '',
        ].filter(Boolean).join(' ');

        this._switchBtn.innerHTML = !this.hideIcon
        ? `<${ESIcon.tagName} name="${this.checked ? 'check' : 'X'}"></${ESIcon.tagName}>`
        : '';
    }
}

customElements.define(ESInputSwitch.tagName, ESInputSwitch);
