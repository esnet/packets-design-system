import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsButtonGroupProps } from "./PktsButtonGroup.types";

export class PktsButtonGroup extends SlottedComponent implements PktsButtonGroupProps {
    static tagName = "pkts-button-group";
    static get observedAttributes() {
        return ['class', 'label', 'hide-label', 'direction'];
    }

    get label(): string { return this.getAttribute('label') || ''; }
    set label(v: string) { this.setAttribute('label', v); }

    get hideLabel(): boolean { return this.hasAttribute('hide-label'); }
    set hideLabel(v: boolean) { v ? this.setAttribute('hide-label', '') : this.removeAttribute('hide-label'); }

    get direction(): 'horizontal' | 'vertical' {
        return (this.getAttribute('direction') as any) ?? 'horizontal';
    }
    set direction(v: 'horizontal' | 'vertical') {
        this.setAttribute('direction', v ?? 'horizontal');
    }

    private containerEl!: HTMLElement;
    private labelEl!: HTMLLabelElement;
    private listEl!: HTMLUListElement;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    protected _renderInitial(): void {
        this.innerHTML = `
            <section class="pkts-button-group">
                <label style="${this.label && !this.hideLabel ? '' : 'display: none;'}">${this.label}</label>
                <ul class="list">
                    <slot></slot>
                </ul>
            </section>
        `;

        this.containerEl = this.querySelector("section")!;
        this.labelEl = this.querySelector("label")!;
        this.listEl = this.querySelector("ul")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'pkts-button-group',
            `pkts-${this.direction}`,
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        this.listEl.className = 'list';

        if (this.label && !this.hideLabel) {
            this.labelEl.textContent = this.label;
            this.labelEl.style.display = '';
        } else {
            this.labelEl.style.display = 'none';
        }
    }
}

customElements.define(PktsButtonGroup.tagName, PktsButtonGroup);
