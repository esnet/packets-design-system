import styles from "./ESInputEmail.module.css";
import { ESInputText } from "../ESInputText";
import { createIcons, X } from 'lucide'; 

export class ESInputEmail extends ESInputText {
    static observedAttributes = ['class', 'value', 'placeholder', 'variant', 'disabled', 'error'];
    static tagName = 'es-input-email';

    private XBtn: HTMLDivElement | null = null;

    constructor() {
        super();
        this.actionButtons = `<div id="x"><i data-lucide="X"></i></div>`
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.XBtn = this.querySelector('#x');
        this.attachEventListeners();
    }

    disconnectedCallback(): void {
        this.XBtn?.removeEventListener("click", this.onXClick);
    }

    private attachEventListeners(): void {
        this.XBtn?.addEventListener("click", this.onXClick);
    }

    private onXClick = () => {
        if (!this.inputEl) return;
        this.inputEl.value = '';
    }

    protected render(): void {
        super.render();
        this.containerEl?.classList.add(styles.ESInputEmail);
        createIcons({ icons: { X } });
    }   
}


customElements.define(ESInputEmail.tagName, ESInputEmail);
