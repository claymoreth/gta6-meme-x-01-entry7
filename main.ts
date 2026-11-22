// gta6-meme-x-01 — entry program (Node 22, standard library only).
//
// The meme itself is the X post; this program only hands the gate the
// post's address. It reads POST.json from the repository root and writes
// an identical copy to /output/POST.json, where the gate reads it.
//
// The POST.json shipped here holds the address of the live X post, so
// the gate can verify it. Replace it with your post's address before
// you submit.
//
// Local run (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function deliverPost(): void {
  const source = join(botDir, "POST.json");
  const target = join(outputDir, "POST.json");
  mkdirSync(outputDir, { recursive: true });
  const payload = readFileSync(source);
  writeFileSync(target, payload);
  console.log(`POST.json delivered to ${target}`);
}

try {
  deliverPost();
} catch (error) {
  console.error(
    `Could not deliver POST.json from ${botDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
