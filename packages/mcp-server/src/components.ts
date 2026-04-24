import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";

export type PackageType = "react" | "web" | "css";

export interface ComponentEntry {
    name: string;
    package: PackageType;
    types?: string;
}

const ROOT = process.cwd();

function getReactComponents(): ComponentEntry[] {
    const dir = join(ROOT, "packages/ui-react/src/components");
    return readdirSync(dir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => {
            const name = d.name;
            const typesPath = join(dir, name, `${name}.types.ts`);
            return {
                name,
                package: "react" as const,
                types: existsSync(typesPath) ? readFileSync(typesPath, "utf-8") : undefined,
            };
        });
}

function getWebComponents(): ComponentEntry[] {
    const dir = join(ROOT, "packages/ui-web/src/components");
    return readdirSync(dir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => {
            const name = d.name;
            const typesPath = join(dir, name, `${name}.types.ts`);
            return {
                name,
                package: "web" as const,
                types: existsSync(typesPath) ? readFileSync(typesPath, "utf-8") : undefined,
            };
        });
}

function kebabToPkts(name: string): string {
    return "Pkts" + name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function getCSSComponents(): ComponentEntry[] {
    const storiesDir = join(ROOT, "apps/css-docs/src");
    const fromStories = new Set(
        existsSync(storiesDir)
            ? readdirSync(storiesDir)
                .filter(f => f.endsWith(".stories.ts"))
                .map(f => f.replace(".stories.ts", ""))
            : []
    );

    const cssDir = join(ROOT, "packages/ui-css/src/components");
    const fromCss = existsSync(cssDir)
        ? readdirSync(cssDir)
            .filter(f => f.endsWith(".css"))
            .map(f => kebabToPkts(f.replace(".css", "")))
        : [];

    const all = new Set([...fromStories, ...fromCss]);
    return [...all].sort().map(name => ({ name, package: "css" as const }));
}

export function getAllComponents(pkg?: PackageType): ComponentEntry[] {
    const react = !pkg || pkg === "react" ? getReactComponents() : [];
    const web = !pkg || pkg === "web" ? getWebComponents() : [];
    const css = !pkg || pkg === "css" ? getCSSComponents() : [];
    return [...react, ...web, ...css];
}
