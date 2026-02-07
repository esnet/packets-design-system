import type { ESIconProps } from "./ESIcon.types";

import { createElement, icons } from 'lucide';

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

    constructor() {
        super();
    }

    connectedCallback(): void {
        this.render();
    }

    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
        if (oldVal !== newVal) this.render();
    }

    private _toPascalCase(str: string) {
        return str
            .split(/-|_/)                 
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join('');
    }

    protected render(): void {
        const rawName = this.name;
        const iconName = this._toPascalCase(rawName);
        const key = iconName as keyof typeof icons;

        const iconNode = icons[key];
        if (!iconNode) return;

        const attrs: Record<string, string> = {};

        // Only set attributes if the values exist
        if (this.class) attrs.class = this.class;
        if (this.color) attrs.stroke = this.color;
        if (this.strokeWidth) attrs["stroke-width"] = String(this.strokeWidth);
        if (this.size) {
            attrs.width = String(this.size);
            attrs.height = String(this.size);
        }
        if (this.fill) attrs.fill = this.fill; 

        // Create the SVG element
        const svg = createElement(iconNode, attrs);

        // Clear existing content and append SVG
        this.innerHTML = '';
        this.appendChild(svg);
    }
}

customElements.define(ESIcon.tagName, ESIcon);
