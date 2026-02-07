import { SlottedComponent } from "../../lib/SlottedComponent";
import { ESIconButtonProps } from "./ESIconButton.types";

export class ESIconButton extends SlottedComponent implements ESIconButtonProps {
    static tagName = "es-icon-button";
    static get observedAttributes() {
        return ['class', 'variant', 'disabled', 'square'];
    }

    get variant(): 'primary' | 'secondary' | 'branded' | 'tertiary' | 'destructive' {
        return (this.getAttribute('variant') as any) ?? 'secondary';
    }
    set variant(v: 'primary' | 'secondary' | 'branded' | 'tertiary' | 'destructive') {
        this.setAttribute('variant', v ?? 'secondary');
    }

    get disabled(): boolean { return this.hasAttribute('disabled'); }
    set disabled(v: boolean) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled'); }

    get square(): boolean { return this.hasAttribute('square'); }
    set square(v: boolean) { v ? this.setAttribute('square', '') : this.removeAttribute('square'); }

    private buttonEl!: HTMLButtonElement;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    protected _renderInitial(): void {
        this.innerHTML = `
            <button type="button" ${this.disabled ? 'disabled' : ''}>
                <slot></slot>
            </button>
        `;

        this.buttonEl = this.querySelector("button")!;
    }

    protected render(): void {
        if (!this.buttonEl) return;

        this.buttonEl.className = [
            'es-icon-button',
            `es-${this.variant}`,
            this.square ? 'es-square' : '',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        if (this.disabled) {
            this.buttonEl.setAttribute('disabled', '');
        } else {
            this.buttonEl.removeAttribute('disabled');
        }
    }
}

customElements.define(ESIconButton.tagName, ESIconButton);
