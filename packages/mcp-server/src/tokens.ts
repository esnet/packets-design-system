import { readFileSync, existsSync } from "fs";
import { join } from "path";

type TokenCategory = "color" | "typography" | "size" | "time" | "font" | "box-shadow";

const ROOT = process.cwd();
const TOKENS_PATH = join(ROOT, "packages/design-tokens/dist/tokens.json");

export function getTokens(category?: TokenCategory): object {
    if (!existsSync(TOKENS_PATH)) {
        return { error: "tokens.json not found - run `pnpm build --filter @esnet/pkts-tokens` first" };
    }
    const all: Record<string, unknown> = JSON.parse(readFileSync(TOKENS_PATH, "utf-8"));
    if (category) {
        return (all[category] as object) ?? { error: `Category "${category}" not found` };
    }
    // return a summary of top-level categories
    return Object.fromEntries(
        Object.entries(all).map(([key, value]) => [
            key,
            `(${Object.keys(value as object).length} groups)`,
        ])
    );
}
