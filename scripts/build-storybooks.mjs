/**
 * Builds all storybooks and assembles them into a single deployable output.
 *
 * Output structure (inside apps/host-docs/storybook-static/):
 *   /           ← host-docs
 *   /react/     ← react-docs (built with base=/react/)
 *   /web/       ← web-docs   (built with base=/web/)
 *   /css/       ← css-docs   (built with base=/css/)
 *
 * Deploy apps/host-docs/storybook-static/ to Cloudflare.
 */

import { execSync } from "child_process";
import { cpSync, rmSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: root, stdio: "inherit" });
}

function copy(src, dest) {
  if (existsSync(dest)) rmSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`Copied ${src.replace(root, "")} -> ${dest.replace(root, "")}`);
}

// 1. Build packages that storybooks depend on
run("pnpm turbo run build --filter=host-docs^...");

// 2. Build each sub-storybook (viteFinal sets base=/<name>/ when configType=PRODUCTION)
run("pnpm --filter react-docs exec storybook build");
run("pnpm --filter web-docs exec storybook build");
run("pnpm --filter css-docs exec storybook build");

// 3. Build host-docs
run("pnpm --filter host-docs exec storybook build");

// 4. Copy sub-storybook outputs into host-docs output
const out = resolve(root, "apps/host-docs/storybook-static");
copy(resolve(root, "apps/react-docs/storybook-static"), `${out}/react`);
copy(resolve(root, "apps/web-docs/storybook-static"),   `${out}/web`);
copy(resolve(root, "apps/css-docs/storybook-static"),   `${out}/css`);

console.log("\nBuild complete. Deploy apps/host-docs/storybook-static/ to Cloudflare.");
