import { SlottedComponent } from "../../lib/SlottedComponent";

export class PktsCommaSeperatedList extends SlottedComponent {
    static tagName = "pkts-comma-seperated-list";
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
            <ul class="pkts-comma-seperated-list">
                <slot></slot>
            </ul>
        `;

        this.containerEl = this.querySelector("ul")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'pkts-comma-seperated-list',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(PktsCommaSeperatedList.tagName, PktsCommaSeperatedList);
