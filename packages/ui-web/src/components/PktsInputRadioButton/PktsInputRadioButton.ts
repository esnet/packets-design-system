import { PktsInputRadioButtonProps } from "./PktsInputRadioButton.types";

export class PktsInputRadioButton extends HTMLElement implements PktsInputRadioButtonProps {
    static tagName = "pkts-input-radio";
    static get observedAttributes() {
        return ['class', 'disabled', 'checked', 'name', 'value'];
    }

    get disabled(): boolean { return this.hasAttribute('disabled'); }
    set disabled(v: boolean) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');}

    get checked(): boolean { return this.hasAttribute('checked'); }
    set checked(v: boolean) {
        v ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        if (this.inputEl) this.inputEl.checked = v;
    }

    get name(): string { return this.getAttribute('name') || ''; }
    set name(v: string) { this.setAttribute('name', v); }

    get value(): string { return this.getAttribute('value') || ''; }
    set value(v: string) { this.setAttribute('value', v); }

    private inputEl!: HTMLInputElement;
    private containerEl!: HTMLDivElement;

    constructor() {
        super();
    }

    connectedCallback(): void {
        this._renderInitial();
        this.attachEventListener();
        this.render();
    }

    disconnectedCallback() {
        this.inputEl?.removeEventListener("change", this._onChange);
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _renderInitial(): void {
        this.innerHTML = `
            <div class="pkts-input-radio">
                <input type="radio" ${this.checked ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}/>
            </div>
        `;

        this.containerEl = this.querySelector("div")!;
        this.inputEl = this.querySelector("input")!;
    }

    protected attachEventListener(): void {
        this.inputEl?.addEventListener("change", this._onChange);
    }

    private _onChange = () => {
        this.checked = this.inputEl.checked;
        this.dispatchEvent(new Event("change", { bubbles: true }));
    };

    protected render(): void {
        if (!this.inputEl || !this.containerEl) return;

        this.containerEl.className = [
            'pkts-input-radio',
            this.hasAttribute('disabled') ? 'pkts-disabled' : '',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        this.inputEl?.setAttribute('type', 'radio');
        if (this.disabled) this.inputEl?.setAttribute('disabled', '');
        if (this.checked) this.inputEl?.setAttribute('checked', '');
        if (this.name) this.inputEl?.setAttribute('name', this.name);
        if (this.value) this.inputEl?.setAttribute('value', this.value);
    }
}

customElements.define(PktsInputRadioButton.tagName, PktsInputRadioButton);
