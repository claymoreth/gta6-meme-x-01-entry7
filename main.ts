// main.ts — gta6-meme-x-01 entry "DECREE OF DIVORCE" (v7).
//
// Entry program: it carries POST.json (the address of the X post that
// holds the divorce decree meme) from the repository root to the
// output directory, where the make.fun gate reads it. The file is
// copied byte for byte — no parsing, no re-formatting — so the gate
// sees exactly what is in the repo, and the post it names is the one
// the judge scores.
//
// Node 22, standard library only. No dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The repository root: the directory the bot runs from. The grader
// sets MAKEFUN_BOT_DIR; locally it defaults to the current directory.
const repoRoot = process.env.MAKEFUN_BOT_DIR ?? process.cwd();

// The output directory: the grader sets MAKEFUN_OUTPUT_DIR; the
// default is /output, where the gate looks for POST.json.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const from = join(repoRoot, "POST.json");
const to = join(outDir, "POST.json");

// Read the post address as raw bytes and write it back unchanged.
const bytes = readFileSync(from);
mkdirSync(outDir, { recursive: true });
writeFileSync(to, bytes);

// Confirm the handoff on stdout so a local run shows the gate got it,
// naming the post itself, not just the file.
const post = JSON.parse(bytes.toString("utf8")) as { url: string };
console.log(`Delivered ${to} (${bytes.length} bytes): ${post.url}`);
