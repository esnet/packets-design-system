import { SlottedComponent } from "../../lib/SlottedComponent";

export class ESBreadcrumbs extends SlottedComponent {
    static tagName = "es-breadcrumbs";
    static get observedAttributes() {
        return ['class'];
    }

    private containerEl!: HTMLUListElement;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    protected _renderInitial(): void {
        this.innerHTML = `
            <ul class="es-breadcrumbs">
                <slot></slot>
            </ul>
        `;

        this.containerEl = this.querySelector("ul")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'es-breadcrumbs',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(ESBreadcrumbs.tagName, ESBreadcrumbs);
