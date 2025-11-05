import styles from "./ESIcon.module.css";
import type { ESIconProps } from "./ESIcon.types";

import { createIcons, icons } from 'lucide';

export class ESIcon extends HTMLElement implements ESIconProps {
    static tagName = 'es-icon';
    static get observedAttributes() {
        return ['name', 'size', 'color', 'stroke-width', 'class', 'fill'];
    }

    get name() { return this.getAttribute('name') ?? ''; }
    set name(v: string) { this.setAttribute('name', v); }

    get class() { return this.getAttribute('class') ?? ''; }
    set class(v: string) { this.setAttribute('class', v); }

    get size() { return this.getAttribute('size') ?? '24px'; }
    set size(v: number | string) { this.setAttribute('size', String(v)); }

    get color() { return this.getAttribute('color') ?? ''; }
    set color(v: string) { this.setAttribute('color', v); }

    get strokeWidth() { return this.getAttribute('strokeWidth') ?? ''; }
    set strokeWidth(v: number | string) { this.setAttribute('strokeWidth', String(v)); }

    get fill() { return this.getAttribute('fill') ?? ''; }
    set fill(v: string) { this.setAttribute('fill', v); }

    private iconEl!: HTMLElement;

    constructor() {
        super();
    }

    connectedCallback(): void {
        this._renderInitial();
        this.render();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _renderInitial(): void {
        this.innerHTML = `<i class=${styles.ESIcon}></i>`;
        this.iconEl = this.querySelector('.' + styles.ESIcon)!;
    }

    private _toPascalCase(str: string) {
        return str
            .split(/-|_/)                 
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join('');
    }

    protected render(): void {
        if (!this.iconEl) return;

        const rawName = this.name;
        const iconName = this._toPascalCase(rawName);

        if (iconName && iconName in icons) {
            const key = iconName as keyof typeof icons;
            this.iconEl.setAttribute('data-lucide', key);
            createIcons({ icons: { [key]: icons[key] } });

            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.width = String(this.size);
                svg.style.height = String(this.size);
                svg.style.strokeWidth = String(this.strokeWidth);
                if (this.color) svg.style.stroke = this.color;
                if (this.fill) svg.style.fill = this.fill;
                if (this.class) svg.classList.add(this.class)
            }
        }
    }
}

customElements.define(ESIcon.tagName, ESIcon);
