import { ESInputText } from "../ESInputText";

export class ESInputCheckbox extends ESInputText {
    static tagName = 'es-input-checkbox';

    get checked(): boolean { return this.hasAttribute('checked'); }
    set checked(v: boolean) {
        v ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        if (this.inputEl) this.inputEl.checked = v;
    }

    protected render(): void {
        if (!this.inputEl || !this.containerEl) return;

        const variant = this.getAttribute('variant') || 'default';
        this.containerEl.className = [
            'es-input-checkbox',
            variant === 'branded' ? 'es-branded' : '',
            this.hasAttribute('error') ? 'es-error' : '',
            this.hasAttribute('disabled') ? 'es-disabled' : '',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        this.inputEl?.setAttribute('type', 'checkbox');
        if (this.disabled) this.inputEl?.setAttribute('disabled', '');
        if (this.checked) this.inputEl?.setAttribute('checked', '');
    }
}

customElements.define(ESInputCheckbox.tagName, ESInputCheckbox);