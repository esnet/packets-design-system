import { SlottedComponent } from "../../lib/SlottedComponent";

export class PktsBreadcrumbs extends SlottedComponent {
    static tagName = "pkts-breadcrumbs";
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
            <ul class="pkts-breadcrumbs">
                <slot></slot>
            </ul>
        `;

        this.containerEl = this.querySelector("ul")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'pkts-breadcrumbs',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(PktsBreadcrumbs.tagName, PktsBreadcrumbs);
