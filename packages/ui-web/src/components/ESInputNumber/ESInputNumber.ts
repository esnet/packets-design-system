import styles from "./ESInputNumber.module.css";
import { ESInputText } from "../ESInputText";
import { createIcons, Plus, Minus } from 'lucide'; 

export class ESInputNumber extends ESInputText {
    static tagName = 'es-input-number';
    static get observedAttributes() {
        return ['class', 'value', 'placeholder', 'variant', 'disabled', 'error', 'step', 'min', 'max'];
    }

    get min(): string { return this.getAttribute('min') ?? ''; }
    set min(v: string) { this.setAttribute('min', v ?? ''); }
    
    get max(): string { return this.getAttribute('max') ?? ''; }
    set max(v: string) { this.setAttribute('max', v ?? ''); }

    get step(): string { return this.getAttribute('step') ?? ''; }
    set step(v: string) { this.setAttribute('step', v ?? ''); }

    private _addBtn!: HTMLDivElement;
    private _minusBtn!: HTMLDivElement;
    private _addClickHandler!: EventListener;
    private _minusClickHandler!: EventListener;

    onAddClick?: () => void;
    onMinusClick?: () => void;

    connectedCallback(): void {
        this.actionButtons = `
            <div>
                <div id="addBtn"><i data-lucide="plus"></i></div>
                <div id="minusBtn"><i data-lucide="minus"></i></div>
            </div>  `
        super.connectedCallback();
        this._addBtn = this.querySelector('#addBtn')!;
        this._minusBtn = this.querySelector('#minusBtn')!;
        this._attachAdditionalListeners();
    }

    disconnectedCallback() {
        this._addBtn.removeEventListener("click", this._addClickHandler);
        this._minusBtn.removeEventListener("click", this._minusClickHandler);
    }

    private _attachAdditionalListeners(): void {
        this._addClickHandler = (e: Event) => {
            if (this.onAddClick) this.onAddClick();
            else this._changeValue(1);
        };

        this._minusClickHandler = (e: Event) => {
            if (this.onMinusClick) this.onMinusClick();
            else this._changeValue(-1);
        };
        this._addBtn.addEventListener("click", this._addClickHandler);
        this._minusBtn.addEventListener("click", this._minusClickHandler);
    }

    private _changeValue = (direction: 1 | -1) => {
        const step = this.inputEl.hasAttribute('step') ? parseFloat(this.inputEl.step) : 1;
        const min = this.inputEl.hasAttribute('min') ? parseFloat(this.inputEl.min) : -Infinity;
        const max = this.inputEl.hasAttribute('max') ? parseFloat(this.inputEl.max) : Infinity;
        let currentValue = parseFloat(this.inputEl.value);

        if (isNaN(currentValue)) currentValue = 0;

        let newValue = currentValue + direction * step;
        newValue = Math.min(max, Math.max(min, newValue));
        this.inputEl.value = String(newValue);
    };

    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', 'number');
        this.containerEl?.classList.add(styles.ESInputNumber);
        createIcons({ icons: { Plus, Minus } });
    }   
}

customElements.define(ESInputNumber.tagName, ESInputNumber);
