// The poem about stopping — make.fun entry
// Writes one short poem about agency (the power to stop and to stay)
// to /output/entry.txt. Deterministic: no randomness, no network,
// no file reads; the poem is a string constant below.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `The 3 a.m. bus on Alder Street never waited.
Rosa rode it twelve years, same seat, same stop.
Tonight she stayed on the curb and let it go,
walked four miles home in the rain.
Her feet knew the way.
She had only ever lent them to the bus.
`;

// Respect the grader's output directory when provided, else /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, POEM, "utf8");
