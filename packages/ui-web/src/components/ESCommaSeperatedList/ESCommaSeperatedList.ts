import { SlottedComponent } from "../../lib/SlottedComponent";

export class ESCommaSeperatedList extends SlottedComponent {
    static tagName = "es-comma-seperated-list";
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
            <ul class="es-comma-seperated-list">
                <slot></slot>
            </ul>
        `;

        this.containerEl = this.querySelector("ul")!;
    }

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'es-comma-seperated-list',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');
    }
}

customElements.define(ESCommaSeperatedList.tagName, ESCommaSeperatedList);
