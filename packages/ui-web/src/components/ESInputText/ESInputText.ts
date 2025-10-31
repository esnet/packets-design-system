import styles from "./ESInputText.module.css";

export class ESInputText extends HTMLElement {
    static observedAttributes = ['class', 'value', 'placeholder', 'variant', 'disabled', 'error'];
    static tagName = 'es-input-text';
    public actionButtons: string | null = null; 

    protected inputEl: HTMLInputElement | null = null;
    protected containerEl: HTMLDivElement | null = null;

    constructor() {
        super();
    }

    connectedCallback(): void {
        this.renderInitial();

        this.attachListener();
        this.render(); 
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render(); 
    }

    private renderInitial(): void {
        this.innerHTML = `
            <div>
                <input type="text" />
                ${this.actionButtons || ''}
            </div>
        `;
        this.containerEl = this.querySelector('div');
        this.inputEl = this.querySelector('input');
    }

    private attachListener(): void {
        this.inputEl?.addEventListener('change', (e) => {
            e.preventDefault();
            if (!this.inputEl) return;
            this.setAttribute('value', this.inputEl.value);
            this.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    protected render(): void {
        if (!this.inputEl || !this.containerEl) return;

        const variant = this.getAttribute('variant') || 'default';
        this.containerEl.className = [
            styles.ESInputText,
            styles[variant],
            this.hasAttribute('error') ? styles.error : '',
            this.hasAttribute('disabled') ? styles.disabled : '',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        // Pass along non-component attributes to input
        const excludeAttr = ['variant', 'disabled', 'error'];
        Array.from(this.attributes)
        .filter(attr => !excludeAttr.includes(attr.name))
        .forEach(attr => {
            this.inputEl?.setAttribute(attr.name, attr.value);
        });
    }
}

customElements.define(ESInputText.tagName, ESInputText);

