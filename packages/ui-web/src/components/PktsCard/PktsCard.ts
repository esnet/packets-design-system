import { SlottedComponent } from "../../lib/SlottedComponent";

export class PktsCard extends SlottedComponent {
    static tagName = "pkts-card";
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
            <div class="pkts-card">
                <slot></slot>
            </div>
        `;

        this.containerEl = this.querySelector("div")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'pkts-card',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(PktsCard.tagName, PktsCard);
