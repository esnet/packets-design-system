/**
 * Assembles all 4 storybooks into apps/react-docs/storybook-static for Cloudflare Pages.
 *
 * Called as the react-docs "build" script so Cloudflare Pages picks up its locked
 * output directory (apps/react-docs/storybook-static).
 *
 * Cloudflare runs: pnpm turbo run build --filter=react-docs...
 * That builds: tokens, ui-css, ui-react, doc-ui — but NOT ui-web.
 * This script builds ui-web first, then all 4 storybooks, then assembles.
 *
 * Output structure:
 *   apps/react-docs/storybook-static/         <- host-docs (main entry)
 *   apps/react-docs/storybook-static/react/   <- react-docs (base=/react/)
 *   apps/react-docs/storybook-static/css/     <- css-docs   (base=/css/)
 *   apps/react-docs/storybook-static/web/     <- web-docs   (base=/web/)
 */

import { execSync } from "child_process";
import { cpSync, rmSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const out = resolve(root, "apps/react-docs/storybook-static");

function run(cmd, cwd = root) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

function copy(src, dest) {
  if (existsSync(dest)) rmSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`Copied ${src.replace(root, "")} -> ${dest.replace(root, "")}`);
}

// 1. Build ui-web — not covered by --filter=react-docs... but needed by web-docs
run("pnpm --filter=@esnet/packets-ui-web run build");

// 2. Build react-docs to a temp dir (its normal storybook-static would be overwritten)
run(
  "pnpm exec storybook build --output-dir storybook-static-react-tmp",
  resolve(root, "apps/react-docs")
);

// 3. Build the remaining storybooks
run("pnpm exec storybook build", resolve(root, "apps/host-docs"));
run("pnpm exec storybook build", resolve(root, "apps/css-docs"));
run("pnpm exec storybook build", resolve(root, "apps/web-docs"));

// 4. Assemble: host-docs at root, sub-storybooks in subdirs
if (existsSync(out)) rmSync(out, { recursive: true });
copy(resolve(root, "apps/host-docs/storybook-static"), out);
copy(resolve(root, "apps/react-docs/storybook-static-react-tmp"), `${out}/react`);
copy(resolve(root, "apps/css-docs/storybook-static"), `${out}/css`);
copy(resolve(root, "apps/web-docs/storybook-static"), `${out}/web`);

// 5. Clean up temp dir
rmSync(resolve(root, "apps/react-docs/storybook-static-react-tmp"), {
  recursive: true,
});

console.log(
  "\nAssembly complete. Output at apps/react-docs/storybook-static"
);
