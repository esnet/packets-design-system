import { addons, types } from "@storybook/manager-api";
import { createElement as h } from "react";

const isDev = window.location.hostname === "localhost";

const NAV = [
  { key: "home",  label: "Home",  prod: "/",       dev: "http://localhost:6008" },
  { key: "react", label: "React", prod: "/react/", dev: "http://localhost:6006" },
  { key: "css",   label: "CSS",   prod: "/css/",   dev: "http://localhost:6009" },
  { key: "web",   label: "Web",   prod: "/web/",   dev: "http://localhost:6007" },
];

const CURRENT = "home";

addons.register("packets-nav", () => {
  addons.add("packets-nav/tool", {
    type: types.TOOL,
    title: "Switch Storybook",
    match: () => true,
    render: () =>
      h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "0 8px",
            borderLeft: "1px solid rgba(128,128,128,0.2)",
          },
        },
        ...NAV.map(({ key, label, prod, dev }) =>
          h(
            "a",
            {
              key,
              href: isDev ? dev : prod,
              style: {
                fontSize: "12px",
                fontWeight: key === CURRENT ? "700" : "400",
                textDecoration: "none",
                color: "inherit",
                opacity: key === CURRENT ? 1 : 0.6,
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: key === CURRENT ? "default" : "pointer",
                pointerEvents: key === CURRENT ? "none" : "auto",
              },
            },
            label
          )
        )
      ),
  });
});
