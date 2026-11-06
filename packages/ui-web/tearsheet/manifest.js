/* Auto-generated — do not edit. Run: npm run generate-manifest */
window.__PKTS_MANIFEST__ = [
  {
    "id": "display",
    "tagName": null,
    "className": null,
    "displayName": "Display",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9982-47091&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Display"
    },
    "markup": null,
    "variants": [
      {
        "label": "Display",
        "markup": "<h1 class=\"display\">Display Text</h1>"
      },
      {
        "label": "Display Branded",
        "markup": "<h1 class=\"display branded\">Display Text Branded</h1>"
      },
      {
        "label": "Display 2",
        "markup": "<h1 class=\"display2\">Display 2 Text</h1>"
      },
      {
        "label": "Display 2 Branded",
        "markup": "<h1 class=\"display2 branded\">Display 2 Text Branded</h1>"
      }
    ],
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "headings",
    "tagName": null,
    "className": null,
    "displayName": "Headings",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9982-48434&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Headings"
    },
    "markup": null,
    "variants": [
      {
        "label": "Default",
        "markup": "<div style=\"display:flex;flex-direction:column;gap:4px\"><h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6></div>"
      },
      {
        "label": "Accent",
        "markup": "<div style=\"display:flex;flex-direction:column;gap:4px\"><h1 class=\"accent\">Heading 1</h1><h2 class=\"accent\">Heading 2</h2><h3 class=\"accent\">Heading 3</h3><h4 class=\"accent\">Heading 4</h4><h5 class=\"accent\">Heading 5</h5><h6 class=\"accent\">Heading 6</h6></div>"
      },
      {
        "label": "Accent 2",
        "markup": "<div style=\"display:flex;flex-direction:column;gap:4px\"><h1 class=\"accent2\">Heading 1</h1><h2 class=\"accent2\">Heading 2</h2><h3 class=\"accent2\">Heading 3</h3><h4 class=\"accent2\">Heading 4</h4><h5 class=\"accent2\">Heading 5</h5><h6 class=\"accent2\">Heading 6</h6></div>"
      }
    ],
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-title-section",
    "tagName": "pkts-title-section",
    "className": "PktsTitleSection",
    "displayName": "Title Section",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 3,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9982-37046&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Title Section",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "title",
      "subtitle",
      "icon",
      "icon-target",
      "icon-position"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "title",
        "attrName": "title",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "subtitle",
        "attrName": "subtitle",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "icon",
        "attrName": "icon",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "iconTarget",
        "attrName": "icon-target",
        "kind": "union",
        "allowedValues": [
          "title",
          "subtitle"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "iconPosition",
        "attrName": "icon-position",
        "kind": "union",
        "allowedValues": [
          "start",
          "end"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "direction",
        "attrName": "direction",
        "kind": "union",
        "allowedValues": [
          "horizontal",
          "vertical"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null,
        "warning": "\"direction\" (direction) not in observedAttributes"
      },
      {
        "name": "background",
        "attrName": "background",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": "toggle",
        "warning": "\"background\" (background) not in observedAttributes"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "title": {
          "x-attribute": "title",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "subtitle": {
          "x-attribute": "subtitle",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "icon": {
          "x-attribute": "icon",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "iconTarget": {
          "x-attribute": "icon-target",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "title",
            "subtitle"
          ]
        },
        "iconPosition": {
          "x-attribute": "icon-position",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "start",
            "end"
          ]
        },
        "direction": {
          "x-attribute": "direction",
          "x-kind": "attribute",
          "x-inObserved": false,
          "x-warning": "\"direction\" (direction) not in observedAttributes",
          "type": "string",
          "enum": [
            "horizontal",
            "vertical"
          ]
        },
        "background": {
          "x-attribute": "background",
          "x-kind": "attribute",
          "x-inObserved": false,
          "x-warning": "\"background\" (background) not in observedAttributes",
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "body",
    "tagName": null,
    "className": null,
    "displayName": "Body",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 4,
    "figma": null,
    "markup": null,
    "variants": [
      {
        "label": "Body",
        "markup": "<div style=\"display:flex;flex-direction:column;gap:4px\"><span>Span text</span><strong>Bold text</strong><del>Strikethrough text</del><em>Italics text</em></div>"
      },
      {
        "label": "Body 2",
        "markup": "<div style=\"display:flex;flex-direction:column;gap:4px\"><span class=\"body2\">Span text</span><strong class=\"body2\">Bold text</strong><del class=\"body2\">Strikethrough text</del><em class=\"body2\">Italics text</em></div>"
      },
      {
        "label": "Highlight",
        "markup": "<span class=\"highlight\">Highlighted text</span>"
      },
      {
        "label": "Highlight Yellow",
        "markup": "<span class=\"highlight-yellow\">Highlighted text</span>"
      },
      {
        "label": "Highlight Pink",
        "markup": "<span class=\"highlight-pink\">Highlighted text</span>"
      }
    ],
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "link",
    "tagName": null,
    "className": null,
    "displayName": "Link",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 5,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9300%3A37990&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Link"
    },
    "markup": null,
    "variants": [
      {
        "label": "Default (underline)",
        "markup": "<a href=\"#\">This is a link</a>"
      },
      {
        "label": "Branded",
        "markup": "<a href=\"#\" class=\"branded\">This is a link</a>"
      },
      {
        "label": "Copy (no underline)",
        "markup": "<a href=\"#\" class=\"copy\">This is a link</a>"
      }
    ],
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "quote",
    "tagName": null,
    "className": null,
    "displayName": "Quote",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 6,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9987%3A52272&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Quote"
    },
    "markup": null,
    "variants": [
      {
        "label": "Block",
        "markup": "<blockquote class=\"block\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac tristique diam.\"</blockquote>"
      },
      {
        "label": "Pull",
        "markup": "<blockquote class=\"pull\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac tristique diam.\"</blockquote>"
      },
      {
        "label": "Branded",
        "markup": "<blockquote class=\"branded\"><p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac tristique diam.\"</p></blockquote>"
      }
    ],
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-code",
    "tagName": "pkts-code",
    "className": "PktsCode",
    "displayName": "Code",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 7,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9987%3A53065&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Code",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "type",
      "language",
      "comment",
      "comment-prefix",
      "copyable",
      "code"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "type",
        "attrName": "type",
        "kind": "union",
        "allowedValues": [
          "inline",
          "block"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "language",
        "attrName": "language",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "comment",
        "attrName": "comment",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "commentPrefix",
        "attrName": "comment-prefix",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "copyable",
        "attrName": "copyable",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "false-string"
      },
      {
        "name": "code",
        "attrName": "code",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "type": {
          "x-attribute": "type",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "inline",
            "block"
          ]
        },
        "language": {
          "x-attribute": "language",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "comment": {
          "x-attribute": "comment",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "commentPrefix": {
          "x-attribute": "comment-prefix",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "copyable": {
          "x-attribute": "copyable",
          "x-kind": "attribute",
          "x-inObserved": true,
          "x-boolean-style": "false-string",
          "type": "boolean"
        },
        "code": {
          "x-attribute": "code",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-caption",
    "tagName": "pkts-caption",
    "className": "PktsCaption",
    "displayName": "Caption",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 8,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9989%3A53865&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Caption",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "label",
      "align",
      "italic",
      "caps"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "label",
        "attrName": "label",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "align",
        "attrName": "align",
        "kind": "union",
        "allowedValues": [
          "center",
          "left"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "italic",
        "attrName": "italic",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "caps",
        "attrName": "caps",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "label": {
          "x-attribute": "label",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "align": {
          "x-attribute": "align",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "center",
            "left"
          ]
        },
        "italic": {
          "x-attribute": "italic",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "caps": {
          "x-attribute": "caps",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "footer",
    "tagName": null,
    "className": null,
    "displayName": "Footer",
    "kind": "no-web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 9,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9982%3A51120&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Footer"
    },
    "markup": "<footer class=\"pkts-footer\">© 2024 ESnet. All rights reserved. Navigation links, legal text, and supplementary information go here.</footer>",
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "labels",
    "tagName": null,
    "className": null,
    "displayName": "Labels",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Rich Text",
    "order": 10,
    "figma": null,
    "markup": null,
    "variants": [
      {
        "label": "Label 1",
        "markup": "<span class=\"label-1\">Label 1 — Sans</span>"
      },
      {
        "label": "Label 1 Mono",
        "markup": "<span class=\"label-1 mono\">Label 1 — Mono</span>"
      },
      {
        "label": "Label 2",
        "markup": "<span class=\"label-2\">Label 2 — Bold</span>"
      }
    ],
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-icon",
    "tagName": "pkts-icon",
    "className": "PktsIcon",
    "displayName": "Icon",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Visual Primitives",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9212%3A3907&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Icon",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "name",
      "size",
      "color",
      "stroke-width",
      "class",
      "fill"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "name",
        "attrName": "name",
        "kind": "string",
        "allowedValues": null,
        "optional": false,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "size",
        "attrName": "size",
        "kind": "unknown",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null,
        "warning": "Complex union for \"size\" — using text input"
      },
      {
        "name": "color",
        "attrName": "color",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "strokeWidth",
        "attrName": "stroke-width",
        "kind": "unknown",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null,
        "warning": "Complex union for \"strokeWidth\" — using text input"
      },
      {
        "name": "class",
        "attrName": "class",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "fill",
        "attrName": "fill",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "name": {
          "x-attribute": "name",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "size": {
          "x-attribute": "size",
          "x-kind": "attribute",
          "x-inObserved": true,
          "x-warning": "Complex union for \"size\" — using text input",
          "type": "string"
        },
        "color": {
          "x-attribute": "color",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "strokeWidth": {
          "x-attribute": "stroke-width",
          "x-kind": "attribute",
          "x-inObserved": true,
          "x-warning": "Complex union for \"strokeWidth\" — using text input",
          "type": "string"
        },
        "class": {
          "x-attribute": "class",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "fill": {
          "x-attribute": "fill",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        }
      },
      "required": [
        "name"
      ]
    },
    "events": []
  },
  {
    "id": "pkts-divider",
    "tagName": "pkts-divider",
    "className": "PktsDivider",
    "displayName": "Divider",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Foundation",
    "subcategory": "Visual Primitives",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9186%3A1777&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Divider",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": "hr",
    "observedAttributes": [
      "variant"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "primary",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "primary",
            "branded"
          ]
        }
      }
    },
    "events": []
  },
  {
    "id": "skeleton-chip",
    "tagName": null,
    "className": null,
    "displayName": "Skeleton Chip",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Foundation",
    "subcategory": "Visual Primitives",
    "order": 3,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "skeleton-surface",
    "tagName": null,
    "className": null,
    "displayName": "Skeleton Surface",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Foundation",
    "subcategory": "Visual Primitives",
    "order": 4,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-button",
    "tagName": "pkts-button",
    "className": "PktsButton",
    "displayName": "Button",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Button Control",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9223%3A8426&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Button",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "label",
      "variant",
      "type",
      "fill",
      "disabled",
      "as",
      "href"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "label",
        "attrName": "label",
        "kind": "string",
        "allowedValues": null,
        "optional": false,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded",
          "gradient",
          "destructive",
          "success",
          "minimal",
          "access",
          "borderless"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "type",
        "attrName": "type",
        "kind": "union",
        "allowedValues": [
          "button",
          "submit",
          "reset"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "size",
        "attrName": "size",
        "kind": "union",
        "allowedValues": [
          "medium",
          "xxlarge"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null,
        "warning": "\"size\" (size) not in observedAttributes"
      },
      {
        "name": "fill",
        "attrName": "fill",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "as",
        "attrName": "as",
        "kind": "union",
        "allowedValues": [
          "button",
          "a"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "href",
        "attrName": "href",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "onClick",
        "attrName": "on-click",
        "kind": "event",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "label": {
          "x-attribute": "label",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded",
            "gradient",
            "destructive",
            "success",
            "minimal",
            "access",
            "borderless"
          ]
        },
        "type": {
          "x-attribute": "type",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "button",
            "submit",
            "reset"
          ]
        },
        "size": {
          "x-attribute": "size",
          "x-kind": "attribute",
          "x-inObserved": false,
          "x-warning": "\"size\" (size) not in observedAttributes",
          "type": "string",
          "enum": [
            "medium",
            "xxlarge"
          ]
        },
        "fill": {
          "x-attribute": "fill",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "as": {
          "x-attribute": "as",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "button",
            "a"
          ]
        },
        "href": {
          "x-attribute": "href",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        }
      },
      "required": [
        "label"
      ]
    },
    "events": [
      {
        "name": "onClick",
        "description": ""
      }
    ],
    "cssMarkup": "<button class=\"pkts-button\">Label</button>",
    "cssVariants": [
      "pkts-branded",
      "pkts-destructive",
      "pkts-primary",
      "pkts-secondary",
      "pkts-tertiary"
    ]
  },
  {
    "id": "pkts-icon-button",
    "tagName": "pkts-icon-button",
    "className": "PktsIconButton",
    "displayName": "Icon Button",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Button Control",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9289%3A29939&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Icon Button",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "variant",
      "disabled",
      "square"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded",
          "fancy",
          "destructive",
          "borderless",
          "minimal",
          "simple"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "square",
        "attrName": "square",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded",
            "fancy",
            "destructive",
            "borderless",
            "minimal",
            "simple"
          ]
        },
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "square": {
          "x-attribute": "square",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-button-group",
    "tagName": "pkts-button-group",
    "className": "PktsButtonGroup",
    "displayName": "Button Group",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Button Control",
    "order": 3,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9764%3A10054&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Button Group",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "label",
      "hide-label",
      "direction"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "label",
        "attrName": "label",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "hideLabel",
        "attrName": "hide-label",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "direction",
        "attrName": "direction",
        "kind": "union",
        "allowedValues": [
          "horizontal",
          "vertical"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "label": {
          "x-attribute": "label",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "hideLabel": {
          "x-attribute": "hide-label",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "direction": {
          "x-attribute": "direction",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "horizontal",
            "vertical"
          ]
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-input-checkbox",
    "tagName": "pkts-input-checkbox",
    "className": "PktsInputCheckbox",
    "displayName": "Input Checkbox",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Boolean Control",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9372%3A59027&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Checkbox",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": true,
    "inheritsTypesFrom": "PktsInputText",
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "actionButtons",
        "attrName": "action-buttons",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "actionButtons": {
          "x-attribute": "action-buttons",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-input-switch",
    "tagName": "pkts-input-switch",
    "className": "PktsInputSwitch",
    "displayName": "Input Switch",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Boolean Control",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9363%3A57521&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Switch",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "variant",
      "disabled",
      "error",
      "checked",
      "hide-icon"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "primary",
          "secondary"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "hideIcon",
        "attrName": "hide-icon",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "primary",
            "secondary"
          ]
        },
        "hideIcon": {
          "x-attribute": "hide-icon",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-input-text",
    "tagName": "pkts-input-text",
    "className": "PktsInputText",
    "displayName": "Input Text",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9237%3A11738&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Text",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "value",
      "placeholder",
      "variant",
      "disabled",
      "error",
      "action-buttons",
      "readonly"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "actionButtons",
        "attrName": "action-buttons",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "actionButtons": {
          "x-attribute": "action-buttons",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-input-text\"><input type=\"text\" placeholder=\"Text\"></div>",
    "cssVariants": [
      "pkts-branded"
    ]
  },
  {
    "id": "pkts-input-password",
    "tagName": "pkts-input-password",
    "className": "PktsInputPassword",
    "displayName": "Input Password",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9492%3A78089&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Password",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": true,
    "inheritsTypesFrom": "PktsInputText",
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "actionButtons",
        "attrName": "action-buttons",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "actionButtons": {
          "x-attribute": "action-buttons",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-input-text\"><input type=\"password\" placeholder=\"Password\"></div>",
    "cssVariants": [
      "pkts-branded"
    ]
  },
  {
    "id": "pkts-input-email",
    "tagName": "pkts-input-email",
    "className": "PktsInputEmail",
    "displayName": "Input Email",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 3,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9510%3A90325&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Email",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": true,
    "inheritsTypesFrom": "PktsInputText",
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "actionButtons",
        "attrName": "action-buttons",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "actionButtons": {
          "x-attribute": "action-buttons",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-input-text pkts-input-email\"><input type=\"email\" placeholder=\"Email\"></div>",
    "cssVariants": [
      "pkts-branded"
    ]
  },
  {
    "id": "pkts-input-search",
    "tagName": "pkts-input-search",
    "className": "PktsInputSearch",
    "displayName": "Input Search",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 4,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9460%3A71505&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Search",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": true,
    "inheritsTypesFrom": "PktsInputText",
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "actionButtons",
        "attrName": "action-buttons",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "actionButtons": {
          "x-attribute": "action-buttons",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-input-text\"><input type=\"search\" placeholder=\"Search\"></div>",
    "cssVariants": []
  },
  {
    "id": "pkts-input-number",
    "tagName": "pkts-input-number",
    "className": "PktsInputNumber",
    "displayName": "Input Number",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 5,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9510%3A86933&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Number",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "value",
      "placeholder",
      "variant",
      "disabled",
      "error",
      "readonly",
      "step",
      "min",
      "max"
    ],
    "hasTypesFile": true,
    "inheritsTypesFrom": "PktsInputText",
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "actionButtons",
        "attrName": "action-buttons",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null,
        "warning": "\"actionButtons\" (action-buttons) not in observedAttributes"
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "actionButtons": {
          "x-attribute": "action-buttons",
          "x-kind": "attribute",
          "x-inObserved": false,
          "x-warning": "\"actionButtons\" (action-buttons) not in observedAttributes",
          "type": "string"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-input-text\"><input type=\"number\" placeholder=\"0\"></div>",
    "cssVariants": [
      "pkts-branded"
    ]
  },
  {
    "id": "pkts-input-date",
    "tagName": "pkts-input-date",
    "className": "PktsInputDate",
    "displayName": "Input Date",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 6,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=12441%3A19381&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Date",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "type",
      "variant",
      "error",
      "disabled",
      "placeholder",
      "value",
      "value-start",
      "value-end"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {}
    },
    "events": []
  },
  {
    "id": "pkts-input-text-area",
    "tagName": "pkts-input-text-area",
    "className": "PktsInputTextArea",
    "displayName": "Input Text Area",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Text Control",
    "order": 7,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9389%3A60071&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Textarea",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "value",
      "placeholder",
      "variant",
      "resize",
      "disabled",
      "error",
      "readonly"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "value",
        "attrName": "value",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "placeholder",
        "attrName": "placeholder",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "resize",
        "attrName": "resize",
        "kind": "union",
        "allowedValues": [
          "vertical",
          "horizontal",
          "both",
          "none"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "value": {
          "x-attribute": "value",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "placeholder": {
          "x-attribute": "placeholder",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "resize": {
          "x-attribute": "resize",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "vertical",
            "horizontal",
            "both",
            "none"
          ]
        },
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-input-text-area\"><textarea placeholder=\"Text\"></textarea></div>",
    "cssVariants": [
      "pkts-branded",
      "pkts-vertical",
      "pkts-horizontal",
      "pkts-both",
      "pkts-none"
    ]
  },
  {
    "id": "pkts-input-select",
    "tagName": "pkts-input-select",
    "className": "PktsInputSelect",
    "displayName": "Input Select",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Select Control",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9321%3A52390&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Select",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "value",
      "placeholder",
      "variant",
      "disabled",
      "error",
      "readonly",
      "options",
      "aria-label",
      "aria-labelledby",
      "aria-describedby",
      "aria-invalid"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "options",
        "attrName": "options",
        "kind": "array",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "value",
        "attrName": "value",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "placeholder",
        "attrName": "placeholder",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "readonly",
        "attrName": "readonly",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "options": {
          "x-attribute": "options",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "array"
        },
        "value": {
          "x-attribute": "value",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "placeholder": {
          "x-attribute": "placeholder",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "readonly": {
          "x-attribute": "readonly",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-input-radio",
    "tagName": "pkts-input-radio",
    "className": "PktsInputRadioButton",
    "displayName": "Input Radio Button",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Select Control",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9323%3A55253&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Radio Button",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "disabled",
      "checked",
      "name",
      "value",
      "variant"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "checked",
        "attrName": "checked",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "name",
        "attrName": "name",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "value",
        "attrName": "value",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "checked": {
          "x-attribute": "checked",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "name": {
          "x-attribute": "name",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "value": {
          "x-attribute": "value",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-input-date-picker",
    "tagName": "pkts-input-date-picker",
    "className": "PktsInputDatePicker",
    "displayName": "Input Date Picker",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Select Control",
    "order": 3,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9797%3A10983&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Date Picker",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "type",
      "value",
      "range-end-value"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "type",
        "attrName": "type",
        "kind": "union",
        "allowedValues": [
          "date",
          "time",
          "datetime",
          "daterange"
        ],
        "optional": true,
        "description": "What to input. Datetime specifies both date and time. Daterange allows a selection of two dates",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "value",
        "attrName": "value",
        "kind": "object",
        "allowedValues": null,
        "optional": true,
        "description": "Value of the date",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "rangeEndValue",
        "attrName": "range-end-value",
        "kind": "object",
        "allowedValues": null,
        "optional": true,
        "description": "Value of the second end date when using date range mode",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "timeSettings",
        "attrName": "time-settings",
        "kind": "unknown",
        "allowedValues": null,
        "optional": true,
        "description": "Time settings",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null,
        "warning": "\"timeSettings\" (time-settings) not in observedAttributes"
      },
      {
        "name": "dateSettings",
        "attrName": "date-settings",
        "kind": "unknown",
        "allowedValues": null,
        "optional": true,
        "description": "Date settings",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null,
        "warning": "\"dateSettings\" (date-settings) not in observedAttributes"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "type": {
          "x-attribute": "type",
          "x-kind": "attribute",
          "x-inObserved": true,
          "description": "What to input. Datetime specifies both date and time. Daterange allows a selection of two dates",
          "type": "string",
          "enum": [
            "date",
            "time",
            "datetime",
            "daterange"
          ]
        },
        "value": {
          "x-attribute": "value",
          "x-kind": "attribute",
          "x-inObserved": true,
          "description": "Value of the date",
          "type": "object"
        },
        "rangeEndValue": {
          "x-attribute": "range-end-value",
          "x-kind": "attribute",
          "x-inObserved": true,
          "description": "Value of the second end date when using date range mode",
          "type": "object"
        },
        "timeSettings": {
          "x-attribute": "time-settings",
          "x-kind": "attribute",
          "x-inObserved": false,
          "description": "Time settings",
          "x-warning": "\"timeSettings\" (time-settings) not in observedAttributes",
          "type": "string"
        },
        "dateSettings": {
          "x-attribute": "date-settings",
          "x-kind": "attribute",
          "x-inObserved": false,
          "description": "Date settings",
          "x-warning": "\"dateSettings\" (date-settings) not in observedAttributes",
          "type": "string"
        }
      }
    },
    "events": []
  },
  {
    "id": "dropdown",
    "tagName": null,
    "className": null,
    "displayName": "Dropdown",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Controls",
    "subcategory": "Select Control",
    "order": 7,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "input-option",
    "tagName": null,
    "className": null,
    "displayName": "Input Option",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Controls",
    "subcategory": "Select Control",
    "order": 8,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "input-typeahead",
    "tagName": null,
    "className": null,
    "displayName": "Input Typeahead",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Controls",
    "subcategory": "Select Control",
    "order": 9,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-input-row",
    "tagName": "pkts-input-row",
    "className": "PktsInputRow",
    "displayName": "Input Row",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Form Structure",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9764%3A16140&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Input Row",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "label",
      "label-placement",
      "error",
      "success",
      "required",
      "disabled",
      "tooltip"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "label",
        "attrName": "label",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "labelPlacement",
        "attrName": "label-placement",
        "kind": "union",
        "allowedValues": [
          "top",
          "left",
          "right",
          "bottom"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "error",
        "attrName": "error",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "Truthy shows error caption. A string value is used as the caption text.",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null,
        "warning": "boolean | string — using text input"
      },
      {
        "name": "success",
        "attrName": "success",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "Truthy shows success caption. A string value is used as the caption text. error takes precedence.",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null,
        "warning": "boolean | string — using text input"
      },
      {
        "name": "required",
        "attrName": "required",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "tooltip",
        "attrName": "tooltip",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "Shows a help icon next to the label with this text as the title.",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "label": {
          "x-attribute": "label",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "labelPlacement": {
          "x-attribute": "label-placement",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "top",
            "left",
            "right",
            "bottom"
          ]
        },
        "error": {
          "x-attribute": "error",
          "x-kind": "attribute",
          "x-inObserved": true,
          "description": "Truthy shows error caption. A string value is used as the caption text.",
          "x-warning": "boolean | string — using text input",
          "type": "string"
        },
        "success": {
          "x-attribute": "success",
          "x-kind": "attribute",
          "x-inObserved": true,
          "description": "Truthy shows success caption. A string value is used as the caption text. error takes precedence.",
          "x-warning": "boolean | string — using text input",
          "type": "string"
        },
        "required": {
          "x-attribute": "required",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "tooltip": {
          "x-attribute": "tooltip",
          "x-kind": "attribute",
          "x-inObserved": true,
          "description": "Shows a help icon next to the label with this text as the title.",
          "type": "string"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-form-section",
    "tagName": "pkts-form-section",
    "className": "PktsFormSection",
    "displayName": "Form Section",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Controls",
    "subcategory": "Form Structure",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=10150%3A11054&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Form Section",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "title",
      "use-column-layout",
      "readonly"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "title",
        "attrName": "title",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "useColumnLayout",
        "attrName": "use-column-layout",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "false-string"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "title": {
          "x-attribute": "title",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "useColumnLayout": {
          "x-attribute": "use-column-layout",
          "x-kind": "attribute",
          "x-inObserved": true,
          "x-boolean-style": "false-string",
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "label",
    "tagName": null,
    "className": null,
    "displayName": "Label",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Controls",
    "subcategory": "Form Structure",
    "order": 4,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-breadcrumbs",
    "tagName": "pkts-breadcrumbs",
    "className": "PktsBreadcrumbs",
    "displayName": "Breadcrumbs",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Navigation",
    "subcategory": "Hierarchical",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9150%3A413&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Breadcrumbs",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        }
      }
    },
    "events": [],
    "cssMarkup": "<ul class=\"pkts-breadcrumbs\">Label</ul>",
    "cssVariants": []
  },
  {
    "id": "pkts-list-tree-view",
    "tagName": "pkts-list-tree-view",
    "className": "PktsListTreeView",
    "displayName": "List Tree View",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Navigation",
    "subcategory": "Hierarchical",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9212%3A12121&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Tree",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": true,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {}
    },
    "events": []
  },
  {
    "id": "pkts-tabs",
    "tagName": "pkts-tabs",
    "className": "PktsTabs",
    "displayName": "Tabs",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Navigation",
    "subcategory": "Sectional",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9156%3A362&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Tabs",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "variant"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "bordered"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "bordered"
          ]
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-tabs\">Label</div>",
    "cssVariants": [
      "pkts-has-border"
    ]
  },
  {
    "id": "tab",
    "tagName": null,
    "className": null,
    "displayName": "Tab",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Navigation",
    "subcategory": "Sectional",
    "order": 3,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "table-of-contents",
    "tagName": null,
    "className": null,
    "displayName": "Table Of Contents",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Navigation",
    "subcategory": "Sectional",
    "order": 4,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-avatar",
    "tagName": "pkts-avatar",
    "className": "PktsAvatar",
    "displayName": "Avatar",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Metadata & Identity",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9901%3A17234&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Avatar",
      "size": null
    },
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "alt",
      "label",
      "src",
      "srcset",
      "size",
      "color",
      "background-color",
      "hoverable"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "alt",
        "attrName": "alt",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "src",
        "attrName": "src",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "srcset",
        "attrName": "srcset",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "size",
        "attrName": "size",
        "kind": "union",
        "allowedValues": [
          "small",
          "medium",
          "large"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "backgroundColor",
        "attrName": "background-color",
        "kind": "union",
        "allowedValues": [
          "grape",
          "teal",
          "berry",
          "orange"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "hoverable",
        "attrName": "hoverable",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "alt": {
          "x-attribute": "alt",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "src": {
          "x-attribute": "src",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "srcset": {
          "x-attribute": "srcset",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "size": {
          "x-attribute": "size",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "small",
            "medium",
            "large"
          ]
        },
        "backgroundColor": {
          "x-attribute": "background-color",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "grape",
            "teal",
            "berry",
            "orange"
          ]
        },
        "hoverable": {
          "x-attribute": "hoverable",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-avatar\"></div>",
    "cssVariants": [
      "pkts-berry",
      "pkts-grape",
      "pkts-large",
      "pkts-medium",
      "pkts-orange",
      "pkts-small",
      "pkts-teal"
    ]
  },
  {
    "id": "pkts-badge",
    "tagName": "pkts-badge",
    "className": "PktsBadge",
    "displayName": "Badge",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Metadata & Identity",
    "order": 2,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9210%3A3115&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Badge",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "color",
      "offset",
      "outline"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        }
      }
    },
    "events": [],
    "cssMarkup": "<span class=\"pkts-badge\">Label</span>",
    "cssVariants": [
      "pkts-offset",
      "pkts-outline"
    ]
  },
  {
    "id": "pkts-chip",
    "tagName": "pkts-chip",
    "className": "PktsChip",
    "displayName": "Chip",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Metadata & Identity",
    "order": 3,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9901%3A16243&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Chip",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "variant",
      "rounded",
      "disabled",
      "deletable"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "primary",
          "outline"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "rounded",
        "attrName": "rounded",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "disabled",
        "attrName": "disabled",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "deletable",
        "attrName": "deletable",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "onDelete",
        "attrName": "on-delete",
        "kind": "event",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "primary",
            "outline"
          ]
        },
        "rounded": {
          "x-attribute": "rounded",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "disabled": {
          "x-attribute": "disabled",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "deletable": {
          "x-attribute": "deletable",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": [
      {
        "name": "onDelete",
        "description": ""
      }
    ],
    "cssMarkup": "<button class=\"pkts-chip\">Label</button>",
    "cssVariants": [
      "pkts-outline",
      "pkts-rounded"
    ]
  },
  {
    "id": "pkts-chip-group",
    "tagName": "pkts-chip-group",
    "className": "PktsChipGroup",
    "displayName": "Chip Group",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Metadata & Identity",
    "order": 4,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9912%3A22433&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Chip Group",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "className",
        "attrName": "class-name",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": false,
        "booleanStyle": null,
        "warning": "\"className\" (class-name) not in observedAttributes"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "className": {
          "x-attribute": "class-name",
          "x-kind": "attribute",
          "x-inObserved": false,
          "x-warning": "\"className\" (class-name) not in observedAttributes",
          "type": "string"
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-chip-group\">Label</div>",
    "cssVariants": []
  },
  {
    "id": "pkts-datum",
    "tagName": "pkts-datum",
    "className": "PktsDatum",
    "displayName": "Datum",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Structured Data",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9982%3A39274&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Datum",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "title",
      "label"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "title",
        "attrName": "title",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "label",
        "attrName": "label",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "title": {
          "x-attribute": "title",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "label": {
          "x-attribute": "label",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-data-table",
    "tagName": "pkts-data-table",
    "className": "PktsDataTable",
    "displayName": "Data Table",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Structured Data",
    "order": 2,
    "figma": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "columns",
      "data",
      "sortable"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {}
    },
    "events": [],
    "cssMarkup": "<table class=\"pkts-data-table\"></table>",
    "cssVariants": [
      "pkts-data-table-sort-icon"
    ]
  },
  {
    "id": "pkts-accordion",
    "tagName": "pkts-accordion",
    "className": "PktsAccordion",
    "displayName": "Accordion",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Content Display",
    "subcategory": "Disclosure",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9175%3A1743&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Accordion",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "header",
      "footer",
      "variant",
      "open"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "header",
        "attrName": "header",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "footer",
        "attrName": "footer",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "default",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "open",
        "attrName": "open",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "false-string"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "header": {
          "x-attribute": "header",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "footer": {
          "x-attribute": "footer",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "default",
            "branded"
          ]
        },
        "open": {
          "x-attribute": "open",
          "x-kind": "attribute",
          "x-inObserved": true,
          "x-boolean-style": "false-string",
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "tooltip",
    "tagName": null,
    "className": null,
    "displayName": "Tooltip",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Communication",
    "subcategory": "Overlays",
    "order": 1,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-alert",
    "tagName": "pkts-alert",
    "className": "PktsAlert",
    "displayName": "Alert",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Communication",
    "subcategory": "Alerts",
    "order": 1,
    "figma": {
      "url": "https://embed.figma.com/proto/ZaviovD9F8uKL0jCkd5j0J/Packets-Design-System?node-id=9934%3A33958&page-id=12427%3A14788&viewport=21%2C378%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false",
      "title": "Alert",
      "size": null
    },
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class",
      "title",
      "variant",
      "closeable"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "title",
        "attrName": "title",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "variant",
        "attrName": "variant",
        "kind": "union",
        "allowedValues": [
          "info",
          "success",
          "warning",
          "error",
          "branded"
        ],
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      },
      {
        "name": "closeable",
        "attrName": "closeable",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "title": {
          "x-attribute": "title",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        },
        "variant": {
          "x-attribute": "variant",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string",
          "enum": [
            "info",
            "success",
            "warning",
            "error",
            "branded"
          ]
        },
        "closeable": {
          "x-attribute": "closeable",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-spinner",
    "tagName": "pkts-spinner",
    "className": "PktsSpinner",
    "displayName": "Spinner",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Communication",
    "subcategory": "Loading and Progress",
    "order": 1,
    "figma": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {}
    },
    "events": []
  },
  {
    "id": "grid-system",
    "tagName": null,
    "className": null,
    "displayName": "Grid System",
    "kind": "no-web-component",
    "availability": "html-native",
    "noDemo": false,
    "category": "Layout",
    "subcategory": "Layout Foundations",
    "order": 1,
    "figma": null,
    "markup": "<div class=\"packets-grid\" style=\"width:100%\"><div class=\"full\" style=\"background:var(--pkts-color-surface-1);padding:12px;margin-bottom:4px\">Full (12 cols)</div><div class=\"grid-col-6\" style=\"background:var(--pkts-color-surface-1);padding:12px\">Half (6)</div><div class=\"grid-col-6\" style=\"background:var(--pkts-color-surface-1);padding:12px\">Half (6)</div><div class=\"grid-col-4\" style=\"background:var(--pkts-color-surface-1);padding:12px\">Third (4)</div><div class=\"grid-col-4\" style=\"background:var(--pkts-color-surface-1);padding:12px\">Third (4)</div><div class=\"grid-col-4\" style=\"background:var(--pkts-color-surface-1);padding:12px\">Third (4)</div></div>",
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "spacer",
    "tagName": null,
    "className": null,
    "displayName": "Spacer",
    "kind": "no-web-component",
    "availability": "html-native",
    "unclassified": true,
    "noDemo": true,
    "category": "Layout",
    "subcategory": "Layout Foundations",
    "order": 2,
    "figma": null,
    "markup": null,
    "variants": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [],
    "hasTypesFile": false,
    "props": []
  },
  {
    "id": "pkts-module",
    "tagName": "pkts-module",
    "className": "PktsModule",
    "displayName": "Module",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Layout",
    "subcategory": "Containers",
    "order": 1,
    "figma": null,
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "surface",
      "title"
    ],
    "hasTypesFile": true,
    "props": [
      {
        "name": "surface",
        "attrName": "surface",
        "kind": "boolean",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": "toggle"
      },
      {
        "name": "title",
        "attrName": "title",
        "kind": "string",
        "allowedValues": null,
        "optional": true,
        "description": "",
        "default": null,
        "inObservedAttributes": true,
        "booleanStyle": null
      }
    ],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        },
        "surface": {
          "x-attribute": "surface",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "boolean"
        },
        "title": {
          "x-attribute": "title",
          "x-kind": "attribute",
          "x-inObserved": true,
          "type": "string"
        }
      }
    },
    "events": []
  },
  {
    "id": "pkts-card",
    "tagName": "pkts-card",
    "className": "PktsCard",
    "displayName": "Card",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Layout",
    "subcategory": "Containers",
    "order": 2,
    "figma": null,
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        }
      }
    },
    "events": [],
    "cssMarkup": "<div class=\"pkts-card\">Label</div>",
    "cssVariants": []
  },
  {
    "id": "pkts-comma-seperated-list",
    "tagName": "pkts-comma-seperated-list",
    "className": "PktsCommaSeperatedList",
    "displayName": "Comma Seperated List",
    "kind": "web-component",
    "availability": "ui-css",
    "noDemo": false,
    "category": "Uncategorized",
    "subcategory": null,
    "order": 9999,
    "figma": null,
    "hasSlot": true,
    "customElementExtends": null,
    "observedAttributes": [
      "class"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "description": "Text rendered inside the element (slot content)",
          "x-kind": "slot",
          "x-inObserved": false
        }
      }
    },
    "events": [],
    "cssMarkup": "<ul class=\"pkts-comma-seperated-list\">Label</ul>",
    "cssVariants": []
  },
  {
    "id": "pkts-input-date-range",
    "tagName": "pkts-input-date-range",
    "className": "PktsInputDateRange",
    "displayName": "Input Date Range",
    "kind": "web-component",
    "availability": "web",
    "noDemo": false,
    "category": "Uncategorized",
    "subcategory": null,
    "order": 9999,
    "figma": null,
    "hasSlot": false,
    "customElementExtends": null,
    "observedAttributes": [
      "variant",
      "error",
      "disabled",
      "placeholder",
      "value-start",
      "value-end"
    ],
    "hasTypesFile": false,
    "props": [],
    "schema": {
      "type": "object",
      "properties": {}
    },
    "events": []
  }
];
