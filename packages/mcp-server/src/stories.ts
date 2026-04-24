import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { PackageType } from "./components.js";

const ROOT = process.cwd();

const STORY_DIRS: Record<PackageType, string> = {
    react: "apps/react-docs/src/stories",
    web: "apps/web-docs/src",
    css: "apps/css-docs/src",
};

const STORY_EXTENSIONS: Record<PackageType, string> = {
    react: ".stories.tsx",
    web: ".stories.ts",
    css: ".stories.ts",
};

export function getStory(componentName: string, pkg: PackageType): string | undefined {
    const dir = join(ROOT, STORY_DIRS[pkg]);
    const ext = STORY_EXTENSIONS[pkg];
    const storyPath = join(dir, `${componentName}${ext}`);
    if (existsSync(storyPath)) {
        return readFileSync(storyPath, "utf-8");
    }
    return undefined;
}
