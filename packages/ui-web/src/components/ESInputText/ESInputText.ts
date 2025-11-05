import styles from "./ESInputText.module.css";
import type { ESInputTextProps } from "./ESInputText.types";

export class ESInputText extends HTMLElement implements ESInputTextProps {
    static tagName = 'es-input-text';
    static get observedAttributes() {
        return ['class', 'value', 'placeholder', 'variant', 'disabled', 'error', 'action-buttons'];
    }

    get value(): string { return this.getAttribute('value') ?? '';}
    set value(v: string) { this.setAttribute('value', v ?? ''); }

    get placeholder(): string { return this.getAttribute('placeholder') ?? ''; }
    set placeholder(v: string) { this.setAttribute('placeholder', v ?? ''); }

    get variant(): 'default' | 'branded' { return (this.getAttribute('variant') as any) ?? 'default'; }
    set variant(v: 'default' | 'branded') { this.setAttribute('variant', v ?? 'default'); }

    get disabled(): boolean { return this.hasAttribute('disabled'); }
    set disabled(v: boolean) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');}

    get error(): boolean { return this.hasAttribute('error');}
    set error(v: boolean) { v ? this.setAttribute('error', '') : this.removeAttribute('error');}

    protected inputEl!: HTMLInputElement;
    protected containerEl!: HTMLDivElement;
    public actionButtons: string | undefined = undefined;

    constructor() {
        super();
    }

    connectedCallback(): void {
        this._renderInitial();
        this._attachEventListener();
        this.render();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _renderInitial(): void {
        this.innerHTML = `
            <div class="${styles.ESInputText}">
                <input type="text" />
                ${this.actionButtons || this.getAttribute('action-buttons') || ''}
            </div>
        `;

        this.containerEl = this.querySelector("div")!;
        this.inputEl = this.querySelector("input")!;
    }

    private _attachEventListener(): void {
        this.inputEl?.addEventListener("change", () => {
            this.value = this.inputEl.value;
            this.dispatchEvent(new Event("change", { bubbles: true }));
        });
    }

    protected render(): void {
        if (!this.inputEl || !this.containerEl) return;

        this.containerEl.className = [
            styles.ESInputText,
            styles[this.variant],
            this.error ? styles.error : '',
            this.disabled ? styles.disabled : '',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');


        // Pass along non-component attributes to input
        const excludeAttr = ['class', 'variant', 'error', 'actionButton'];
        Array.from(this.attributes)
        .filter(attr => !excludeAttr.includes(attr.name))
        .forEach(attr => {
            this.inputEl?.setAttribute(attr.name, attr.value);
        });
    }
}

customElements.define(ESInputText.tagName, ESInputText);