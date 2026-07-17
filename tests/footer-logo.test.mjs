import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const footer = await readFile(
  new URL("../components/Footer.jsx", import.meta.url),
  "utf8",
);

test("footer logo is large and remains responsive", () => {
  assert.match(footer, /className="h-20 w-auto max-w-full object-contain md:h-24/);
});
