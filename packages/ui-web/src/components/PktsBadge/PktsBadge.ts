import { SlottedComponent } from "../../lib/SlottedComponent";

export class PktsBadge extends SlottedComponent {
    static tagName = "pkts-badge";
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
            <span class="pkts-badge">
                <slot></slot>
            </span>
        `;

        this.containerEl = this.querySelector("span")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'pkts-badge',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(PktsBadge.tagName, PktsBadge);
