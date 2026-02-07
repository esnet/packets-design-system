import { SlottedComponent } from "../../lib/SlottedComponent";

export class ESBadge extends SlottedComponent {
    static tagName = "es-badge";
    static get observedAttributes() {
        return ['class'];
    }

    private containerEl!: HTMLSpanElement;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    protected _renderInitial(): void {
        this.innerHTML = `
            <span class="es-badge">
                <slot></slot>
            </span>
        `;

        this.containerEl = this.querySelector("span")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'es-badge',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(ESBadge.tagName, ESBadge);
