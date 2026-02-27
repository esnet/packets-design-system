import { PktsInputText } from "../PktsInputText/PktsInputText";

export class PktsInputCheckbox extends PktsInputText {
    static tagName = 'pkts-input-checkbox';

    get checked(): boolean { return this.hasAttribute('checked'); }
    set checked(v: boolean) {
        v ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        if (this.inputEl) this.inputEl.checked = v;
    }

    protected render(): void {
        if (!this.inputEl || !this.containerEl) return;

        const variant = this.getAttribute('variant') || 'default';
        this.containerEl.className = [
            'pkts-input-checkbox',
            variant === 'branded' ? 'pkts-branded' : '',
            this.hasAttribute('error') ? 'pkts-error' : '',
            this.hasAttribute('disabled') ? 'pkts-disabled' : '',
            this.getAttribute('class') || ''
        ].filter(Boolean).join(' ');

        this.inputEl?.setAttribute('type', 'checkbox');
        if (this.disabled) this.inputEl?.setAttribute('disabled', '');
        if (this.checked) this.inputEl?.setAttribute('checked', '');
    }
}

customElements.define(PktsInputCheckbox.tagName, PktsInputCheckbox);