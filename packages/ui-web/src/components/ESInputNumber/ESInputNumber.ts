import styles from "./ESInputNumber.module.css";
import { ESInputText } from "../ESInputText";
import { createIcons, Plus, Minus } from 'lucide'; 

export class ESInputNumber extends ESInputText {
    static observedAttributes = ['class', 'value', 'placeholder', 'variant', 'disabled', 'error', 'step', 'min', 'max'];
    static tagName = 'es-input-number';
    
    private addBtn: HTMLDivElement | null = null;
    private minusBtn: HTMLDivElement | null = null;

    constructor() {
        super();
        this.actionButtons = `
        <div>
            <div id="addBtn"><i data-lucide="plus"></i></div>
            <div id="minusBtn"><i data-lucide="minus"></i></div>
        </div>  `
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.addBtn = this.querySelector('#addBtn');
        this.minusBtn = this.querySelector('#minusBtn');
        this.attachEventListeners();
    }

    disconnectedCallback() {
        this.addBtn?.removeEventListener("click", this.onAddClick);
        this.minusBtn?.removeEventListener("click", this.onMinusClick);
    }

    private attachEventListeners(): void {
        this.addBtn?.addEventListener("click", this.onAddClick);
        this.minusBtn?.addEventListener("click", this.onMinusClick);
    }


    private changeValue = (direction: 1 | -1) => {
        const input = this.querySelector("input");
        if (!input) return;

        const step = input.hasAttribute('step') ? parseFloat(input.step) : 1;
        const min = input.hasAttribute('min') ? parseFloat(input.min) : -Infinity;
        const max = input.hasAttribute('max') ? parseFloat(input.max) : Infinity;
        let currentValue = parseFloat(input.value);

        if (isNaN(currentValue)) currentValue = 0;

        let newValue = currentValue + direction * step;
        newValue = Math.min(max, Math.max(min, newValue));
        input.value = String(newValue);
    };

    private onAddClick = () => this.changeValue(1);
    private onMinusClick = () => this.changeValue(-1);


    protected render(): void {
        super.render();
        this.inputEl?.setAttribute('type', 'number');
        this.containerEl?.classList.add(styles.ESInputNumber);
        createIcons({ icons: { Plus, Minus } });
    }   
}


customElements.define(ESInputNumber.tagName, ESInputNumber);
