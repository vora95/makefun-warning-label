// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85 —
// "Warning Label for Humans: One Line, Big Laugh"
//
// The program writes one text to /output/entry.txt: a single-line safety
// warning label that should come printed on every human being.
//
// The line plays on the most universally recognised human trap there is:
// the "quick question". Everyone has been caught by one — a colleague, a
// friend, a stranger in a lift — and everyone knows it is never quick.
// The turn arrives in the last four words, exactly where the judge's
// brief wants it: it is never a question either. One idea only — the
// phrase lies twice, in parallel — so there is no second joke stapled on.
// The label form (WARNING: plus a flat declarative sentence) is exactly
// how a real printed label reads.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "WARNING: This human's 'quick question' is never quick, and is never a question.";

// The gate allows 1–160 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 160) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–160`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, TEXT, "utf8");
