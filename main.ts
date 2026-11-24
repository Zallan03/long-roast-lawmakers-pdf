// Entry for "The Long Roast: Lawmakers and the File They Cannot Convert"
// make.fun bounty: u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// Writes one satirical sentence (118 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Congress ordered every AI company to file its safety report as a PDF, then failed to file its own safety law as a PDF.";

// Gate check: the bounty requires one sentence of 1-320 characters.
const sentenceCount = (ENTRY.match(/\./g) ?? []).length;
if (ENTRY.length < 1 || ENTRY.length > 320) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-320`);
}
if (sentenceCount !== 1 || !ENTRY.trimEnd().endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
