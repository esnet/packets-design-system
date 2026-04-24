import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export type PackageType = "react" | "web" | "css";

export interface ComponentEntry {
    name: string;
    package: PackageType;
    types?: string;
}

const ROOT = process.cwd();

function readTyped(pkg: PackageType, basePath: string): ComponentEntry[] {
    const dir = join(ROOT, basePath);
    return readdirSync(dir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => {
            const name = d.name;
            let types: string | undefined;
            try {
                types = readFileSync(join(dir, name, `${name}.types.ts`), "utf-8");
            } catch {
                types = undefined;
            }
            return { name, package: pkg, types };
        });
}

function kebabToPkts(name: string): string {
    return "Pkts" + name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function getCSSComponents(): ComponentEntry[] {
    const storyNames = new Set<string>();
    try {
        readdirSync(join(ROOT, "apps/css-docs/src"))
            .filter(f => f.endsWith(".stories.ts"))
            .forEach(f => storyNames.add(f.replace(".stories.ts", "")));
    } catch { /* dir missing */ }

    const cssNames = new Set<string>();
    try {
        readdirSync(join(ROOT, "packages/ui-css/src/components"))
            .filter(f => f.endsWith(".css"))
            .forEach(f => cssNames.add(kebabToPkts(f.replace(".css", ""))));
    } catch { /* dir missing */ }

    return [...new Set([...storyNames, ...cssNames])].sort()
        .map(name => ({ name, package: "css" }));
}

let cache: ComponentEntry[] | null = null;

export function getAllComponents(pkg?: PackageType): ComponentEntry[] {
    if (!cache) {
        cache = [
            ...readTyped("react", "packages/ui-react/src/components"),
            ...readTyped("web", "packages/ui-web/src/components"),
            ...getCSSComponents(),
        ];
    }
    return pkg ? cache.filter(c => c.package === pkg) : cache;
}
