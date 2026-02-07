import { SlottedComponent } from "../../lib/SlottedComponent";

export class ESTabs extends SlottedComponent {
    static tagName = "es-tabs";
    static get observedAttributes() {
        return ['class'];
    }

    private containerEl!: HTMLDivElement;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    protected _renderInitial(): void {
        this.innerHTML = `
            <div class="es-tabs">
                <slot></slot>
            </div>
        `;

        this.containerEl = this.querySelector("div")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'es-tabs',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(ESTabs.tagName, ESTabs);
