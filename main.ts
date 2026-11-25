// The One-Line Cat Joke That Lands — make.fun entry (program/v1, node22).
// Writes a single one-line cat joke to /output/entry.txt.
// The joke: a job interview derailed by a cat who somehow lands the job first.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat walked across my keyboard during my job interview and got hired before I did.";

// Self-checking gate: the competition requires 1-200 chars, a single line,
// non-blank. Throw before writing anything if the joke breaks the rule.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
