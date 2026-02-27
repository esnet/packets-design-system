/**
 * Base class for web components that use slots without Shadow DOM.
 *
 * Handles the common pattern of:
 * 1. Saving original child nodes before rendering
 * 2. Restoring them after innerHTML replacement
 * 3. Preventing re-initialization on reconnect
 *
 * Subclasses should:
 * - Call super.connectedCallback() in their connectedCallback
 * - Implement _renderInitial() to set up their initial structure
 * - Implement render() to update their appearance
 * - Store a reference to their main container element
 */
export abstract class SlottedComponent extends HTMLElement {
    private _initialized = false;

    connectedCallback(): void {
        // Only initialize once, even if disconnected/reconnected
        if (!this._initialized) {
            this._initialize();
            this._initialized = true;
        }
        this.render();
    }

    private _initialize(): void {
        // Save original child nodes before replacing innerHTML
        const originalChildren = Array.from(this.childNodes);

        // Let subclass set up its structure
        this._renderInitial();

        // Restore original children into the slot (since we don't use Shadow DOM)
        const slot = this.querySelector('slot');
        if (slot && originalChildren.length > 0) {
            slot.replaceWith(...originalChildren);
        }
    }

    /**
     * Called once during initialization to set up the component's structure.
     * Should set innerHTML with the component's template including <slot> elements.
     */
    protected abstract _renderInitial(): void;

    /**
     * Called whenever the component needs to update its appearance.
     * Can be called multiple times (on attribute changes, etc).
     */
    protected abstract render(): void;
}
