export interface ColumnDefinition {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
}

export interface PktsDataTableProps {
  columns?: ColumnDefinition[];
  data?: any[];
  sortable?: boolean;
}

type SortDirection = "ASC" | "DESC" | "NONE";

export class PktsDataTable extends HTMLElement implements PktsDataTableProps {
  static tagName = "pkts-data-table";

  static get observedAttributes() {
    return ["columns", "data", "sortable"];
  }

  private _columns?: ColumnDefinition[];
  private _data?: any[];
  private sortState: Record<string, SortDirection> = {};

  get columns(): ColumnDefinition[] | undefined {
    return this._columns;
  }
  set columns(v: ColumnDefinition[] | undefined) {
    this._columns = v;
    if (v) {
      this.setAttribute("columns", JSON.stringify(v));
    } else {
      this.removeAttribute("columns");
    }
  }

  get data(): any[] | undefined {
    return this._data;
  }
  set data(v: any[] | undefined) {
    this._data = v;
    if (v) {
      this.setAttribute("data", JSON.stringify(v));
    } else {
      this.removeAttribute("data");
    }
  }

  get sortable(): boolean {
    return this.hasAttribute("sortable");
  }
  set sortable(v: boolean) {
    if (v) {
      this.setAttribute("sortable", "");
    } else {
      this.removeAttribute("sortable");
    }
  }

  constructor() {
    super();
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (oldVal !== newVal) {
      if (name === "columns" && newVal) {
        try {
          this._columns = JSON.parse(newVal);
        } catch (e) {
          console.error("Failed to parse columns JSON:", e);
        }
      } else if (name === "data" && newVal) {
        try {
          this._data = JSON.parse(newVal);
        } catch (e) {
          console.error("Failed to parse data JSON:", e);
        }
      }
      this.render();
    }
  }

  private _handleSort = (columnKey: string): void => {
    // Reset all other columns to NONE
    Object.keys(this.sortState).forEach((key) => {
      if (key !== columnKey) {
        this.sortState[key] = "NONE";
      }
    });

    // Toggle current column
    const currentSort = this.sortState[columnKey] || "NONE";
    this.sortState[columnKey] = currentSort === "DESC" ? "ASC" : "DESC";

    this.render();

    // Dispatch change event
    this.dispatchEvent(
      new CustomEvent("sort-change", {
        detail: { sortState: this.sortState },
        bubbles: true,
      })
    );
  };

  private _getSortedData(): any[] {
    if (!this._data) return [];

    const sortColumn = Object.keys(this.sortState).find(
      (key) => this.sortState[key] !== "NONE"
    );

    if (!sortColumn) return this._data;

    return [...this._data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (this.sortState[sortColumn] === "ASC") {
        return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      } else {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      }
    });
  }

  private _renderSortIcon(direction: SortDirection): string {
    // Using Lucide icons matching the React implementation
    if (direction === "ASC") {
      // ArrowDownWideNarrowIcon
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h4"/><path d="M11 8h7"/><path d="M11 12h10"/></svg>`;
    } else if (direction === "DESC") {
      // ArrowUpNarrowWideIcon
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h4"/><path d="M11 16h7"/><path d="M11 20h10"/></svg>`;
    }
    return "";
  }

  protected render(): void {
    if (!this._columns || !this._data) {
      this.innerHTML = `<table class="pkts-data-table"></table>`;
      return;
    }

    const sortedData = this._getSortedData();

    // Render header
    const headerCells = this._columns
      .map((col) => {
        const sortDirection = this.sortState[col.key] || "NONE";
        const isSortable = this.sortable && col.sortable !== false;
        const widthAttr = col.width ? `style="width: ${col.width}"` : "";

        return `
          <th ${widthAttr}>
            <div class="labelWrapper" ${isSortable ? `data-sort-key="${col.key}"` : ""} ${isSortable ? `style="cursor: pointer;"` : ""}>
              ${col.label}
              ${isSortable && sortDirection !== "NONE" ? `<span class="pkts-data-table-sort-icon">${this._renderSortIcon(sortDirection)}</span>` : ""}
            </div>
          </th>
        `;
      })
      .join("");

    // Render rows
    const rows = sortedData
      .map((row) => {
        const cells = this._columns!.map((col) => {
          return `<td data-parent="${col.label}">${row[col.key] || ""}</td>`;
        }).join("");

        return `<tr>${cells}</tr>`;
      })
      .join("");

    this.innerHTML = `
      <table class="pkts-data-table">
        <thead>
          <tr>${headerCells}</tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;

    // Attach sort handlers AFTER rendering
    if (this.sortable) {
      this.querySelectorAll("[data-sort-key]").forEach((el) => {
        el.addEventListener("click", () => {
          const sortKey = (el as HTMLElement).dataset.sortKey;
          if (sortKey) {
            this._handleSort(sortKey);
          }
        });
      });
    }
  }
}

customElements.define(PktsDataTable.tagName, PktsDataTable);
