import styles from "./ESButton.module.css";
import type { ESButtonProps } from "./ESButton.types";

export class ESButton extends HTMLElement implements ESButtonProps {
    static tagName = 'es-button';
    static get observedAttributes() {
        return ['class', 'label', 'variant', 'type', 'fill', 'disabled', 'as', 'href'];
    }

    get class() { return this.getAttribute('class') ?? ''; }
    set class(v: string) { this.setAttribute('class', v); }

    get label() { return this.getAttribute('label') ?? ''; }
    set label(v: string) { this.setAttribute('label', v); }

    get variant(): 'primary' | 'secondary' | 'branded' | 'tertiary' | 'destructive' { return (this.getAttribute('variant') as any) ?? 'secondary'; }
    set variant(v: 'primary' | 'secondary' | 'branded' | 'tertiary' | 'destructive' ) { this.setAttribute('variant', v ?? 'secondary'); }

    get type(): 'button' | 'submit' | 'reset' { return (this.getAttribute('type') as any) ?? 'button'; }
    set type(v: 'button' | 'submit' | 'reset') { this.setAttribute('type', v); }

    get size(): 'medium' | 'xxlarge' { return (this.getAttribute('size') as any) ?? 'medium'; }
    set size(v: 'medium' | 'xxlarge' ) { this.setAttribute('size', v); }

    get fill() { return this.hasAttribute('fill'); }
    set fill(v: boolean) { v ? this.setAttribute('fill', '') : this.removeAttribute('fill'); }

    get disabled() { return this.hasAttribute('disabled'); }
    set disabled(v: boolean) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled'); }

    get as(): 'button' | 'a'  { return (this.getAttribute('as') as any) ?? 'button'; }
    set as(v: 'button' | 'a' ) { this.setAttribute('as', v); }

    get href() { return this.getAttribute('href') ?? ''; }
    set href(v: string) { this.setAttribute('href', v); }
    
    get onClick(): ((e: Event) => void) | undefined {
        return this._onClick;
    }
    set onClick(fn: ((e: Event) => void) | undefined) {
        if (fn && typeof fn === 'function') {
            this._onClick = fn;
        } 
    }

    protected buttonEl!: HTMLButtonElement | HTMLAnchorElement;
    protected childEl!: HTMLSlotElement;
    private _onClick?: (e: Event) => void;

    constructor() {
        super();
    }

    connectedCallback(): void {
        this._renderInitial();
        this.render();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _renderInitial(): void {
        const tag = this.as || "button";
        this.innerHTML = `
            <${tag} type='${this.type}' class="${styles.button}">
                <slot></slot>
            </${tag}>
        `;
        this.buttonEl = this.querySelector(tag)!;
        this.childEl = this.querySelector('slot')!;
    }

    protected attachAttributes(): void {
        // tag-specific attributes
        if (this.as === "a") {
            const aEl = this.buttonEl as HTMLAnchorElement;
            if (this.href) aEl.href = this.href;
            if (this.disabled) {
                aEl.setAttribute("aria-disabled", "true");
                aEl.classList.add(styles.disabled);
                aEl.removeAttribute("href");
            } else {
                aEl.removeAttribute("aria-disabled");
            }
        } else {
            const btnEl = this.buttonEl as HTMLButtonElement;
            btnEl.type = this.type;
            if (this.disabled) btnEl.disabled = true;
            else btnEl.disabled = false;
        }
    }

    protected attachClickHandler(): void {
        if (!this.buttonEl || !this._onClick) return;
        this.buttonEl.removeEventListener('click', this._onClick);
        this.buttonEl.addEventListener('click', this._onClick);
    }

    protected render(): void {
        if (!this.buttonEl || !this.childEl) return;

        const variant = this.variant;
        const fill = this.fill ? styles.fill : "";
        const size = this.size ? styles[this.size] : "";

        this.buttonEl.className = [
            styles.button,
            styles[variant],
            fill,
            size,
            this.class,
            this.disabled ? styles.disabled : "",
        ].filter(Boolean).join(" ");

        if (this.label) this.childEl.textContent = this.label; // replace label with child?
        this.attachAttributes();
        this.attachClickHandler()
    }
}


customElements.define(ESButton.tagName, ESButton);
