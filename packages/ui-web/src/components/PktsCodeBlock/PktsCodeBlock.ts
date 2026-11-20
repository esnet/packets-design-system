import { PktsCodeBlockProps } from "./PktsCodeBlock.types";

function dedent(raw: string): string {
  if (!/^[ \t]*\r?\n/.test(raw)) return raw.trim();

  const lines = raw.replace(/\r\n/g, "\n").split("\n");

  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();

  const indent = Math.min(
    ...lines
      .filter((line) => line.trim())
      .map((line) => line.match(/^[ \t]*/)![0].length),
  );

  return lines.map((line) => line.slice(indent)).join("\n");
}

export class PktsCodeBlock extends HTMLElement implements PktsCodeBlockProps {
  static tagName = "pkts-code-block";

  static get observedAttributes() {
    return ["language", "code", "copyable", "comment"];
  }

  get language(): string {
    return this.getAttribute("language") || "code";
  }
  set language(v: string) {
    this.setAttribute("language", v);
  }

  get copyable(): boolean {
    return !this.hasAttribute("copyable") || this.getAttribute("copyable") !== "false";
  }
  set copyable(v: boolean) {
    this.setAttribute("copyable", String(v));
  }

  get code(): string {
    return this.getAttribute("code") || "";
  }
  set code(v: string) {
    this.setAttribute("code", v);
  }

  get comment(): boolean {
    return this.hasAttribute("comment") && this.getAttribute("comment") !== "false";
  }
  set comment(v: boolean) {
    this.setAttribute("comment", String(v));
  }

  private initialized = false;
  private source = "";
  private copyTimer?: number;

  connectedCallback(): void {
    if (this.initialized) return;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.initialize(), {
        once: true,
      });
      return;
    }

    this.initialize();
  }

  disconnectedCallback(): void {
    window.clearTimeout(this.copyTimer);
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null,
  ): void {
    if (oldVal !== newVal) this.render();
  }

  private initialize(): void {
    if (this.initialized) return;

    this.source = dedent(this.textContent ?? "");

    this.initialized = true;
    this.render();
  }

  private get displayText(): string {
    return this.code || this.source;
  }

  private render(): void {
    if (!this.initialized) return;

    this.replaceChildren(this.createBlock());
  }

  private createBlock(): HTMLElement {
    const figure = document.createElement("div");
    const pre = document.createElement("pre");
    const code = document.createElement("code");

    figure.className = "pkts-code-block";
    figure.classList.toggle("comment", this.comment);

    figure.appendChild(this.createHeader());

    code.textContent = this.displayText;
    pre.appendChild(code);
    figure.appendChild(pre);

    return figure;
  }

  private createHeader(): HTMLElement {
    const header = document.createElement("div");
    header.className = "pkts-code-block-top";

    const badge = document.createElement("span");
    badge.className = "pkts-code-block-lang-chip";
    badge.textContent = this.language;
    header.appendChild(badge);

    if (this.copyable) header.appendChild(this.createCopyButton());

    return header;
  }

  private createCopyButton(): HTMLButtonElement {
    const button = document.createElement("button");
    const icon = document.createElement("pkts-icon");

    button.type = "button";
    button.setAttribute("aria-label", "Copy code");

    icon.setAttribute("name", "copy");
    icon.setAttribute("aria-hidden", "true");
    button.appendChild(icon);

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(this.displayText);
      } catch {
        return; // clipboard blocked (insecure context or permissions)
      }

      icon.setAttribute("name", "check");
      button.setAttribute("aria-label", "Copied");

      window.clearTimeout(this.copyTimer);
      this.copyTimer = window.setTimeout(() => {
        icon.setAttribute("name", "copy");
        button.setAttribute("aria-label", "Copy code");
      }, 1000);
    });

    return button;
  }
}

customElements.define(PktsCodeBlock.tagName, PktsCodeBlock);
