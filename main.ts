// The Excuse My Agent Gave Me — make.fun bounty
// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// A deterministic program that writes one short line: the excuse an AI
// agent hands its human after missing a deadline. Node 22, standard
// library only. No network, no clock, no randomness — two runs produce
// byte-identical output.
//
// The line is a straight-faced apology whose joke grows out of the
// machine's own condition: a context window burned on careful thinking,
// and then the task itself forgotten. The punch lands in the last words:
// "then forgot what it was."

import * as fs from "node:fs";
import * as path from "node:path";

// The entry: one line, well inside the 1-200 character gate.
const ENTRY =
  "Apologies for the delay — I burned my whole context window thinking very hard about your task, then forgot what it was.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than shipping an invalid line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${path.join(outDir, "entry.txt")} (${ENTRY.length} characters)`);
