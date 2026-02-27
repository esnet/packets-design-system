import { SlottedComponent } from "../../lib/SlottedComponent";
import { PktsAlertProps } from "./PktsAlert.types";
import { PktsIcon } from "../PktsIcon/PktsIcon";

export class PktsAlert extends SlottedComponent implements PktsAlertProps {
    static tagName = "pkts-alert";
    static get observedAttributes() {
        return ['class', 'title', 'variant', 'closeable'];
    }

    get title(): string { return this.getAttribute('title') || ''; }
    set title(v: string) { this.setAttribute('title', v); }

    get variant(): 'info' | 'success' | 'warning' | 'error' | 'branded' {
        return (this.getAttribute('variant') as any) ?? 'info';
    }
    set variant(v: 'info' | 'success' | 'warning' | 'error' | 'branded') {
        this.setAttribute('variant', v ?? 'info');
    }

    get closeable(): boolean { return this.hasAttribute('closeable'); }
    set closeable(v: boolean) { v ? this.setAttribute('closeable', '') : this.removeAttribute('closeable'); }

    private containerEl!: HTMLDivElement;
    private iconEl!: HTMLElement;
    private titleEl!: HTMLElement;
    private contentEl!: HTMLDivElement;
    private closeButtonEl!: HTMLButtonElement;

    constructor() {
        super();
    }

    disconnectedCallback(): void {
        this.closeButtonEl?.removeEventListener('click', this._handleClose);
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _getIconForVariant(): string {
        const iconMap: Record<string, string> = {
            info: 'Info',
            success: 'CircleCheck',
            warning: 'TriangleAlert',
            error: 'CircleX',
            branded: 'Sparkles'
        };
        return iconMap[this.variant] || 'Info';
    }

    protected _renderInitial(): void {
        const iconName = this._getIconForVariant();

        this.innerHTML = `
            <div class="pkts-alert">
                <aside class="icon">
                    <${PktsIcon.tagName} name="${iconName}"></${PktsIcon.tagName}>
                </aside>
                <div class="content">
                    <h5 class="title">${this.title}</h5>
                    <slot></slot>
                </div>
                <aside class="icon">
                    <button class="close-button" style="${this.closeable ? '' : 'display: none;'}">
                        <${PktsIcon.tagName} name="CircleX"></${PktsIcon.tagName}>
                    </button>
                </aside>
            </div>
        `;

        this.containerEl = this.querySelector("div.pkts-alert")!;
        this.iconEl = this.querySelector("aside.icon")!;
        this.titleEl = this.querySelector("h5.title")!;
        this.contentEl = this.querySelector("div.content")!;
        this.closeButtonEl = this.querySelector("button.close-button")!;

        this._attachEventListeners();
    }

    private _attachEventListeners(): void {
        this.closeButtonEl?.addEventListener('click', this._handleClose);
    }

    private _handleClose = () => {
        this.dispatchEvent(new Event('close', { bubbles: true }));
        this.remove();
    };

    protected render(): void {
        if (!this.containerEl) return;

        this.containerEl.className = [
            'pkts-alert',
            `pkts-${this.variant}`,
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        if (this.titleEl) {
            this.titleEl.textContent = this.title;
        }

        // Update icon based on variant
        const iconName = this._getIconForVariant();
        const iconElement = this.iconEl?.querySelector('pkts-icon');
        if (iconElement) {
            iconElement.setAttribute('name', iconName);
        }

        // Show/hide close button
        if (this.closeButtonEl) {
            this.closeButtonEl.style.display = this.closeable ? '' : 'none';
        }
    }
}

customElements.define(PktsAlert.tagName, PktsAlert);
