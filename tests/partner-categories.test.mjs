import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const partnerCategories = await readFile(
  new URL("../components/PartnerCategories.jsx", import.meta.url),
  "utf8",
);
const categoryCard = await readFile(
  new URL("../components/BusinessCategoryCard.jsx", import.meta.url),
  "utf8",
);

test("partner categories use local photo assets instead of icon elements", () => {
  assert.match(partnerCategories, /image:\s*"\/categories\/schools\.jpg"/);
  assert.doesNotMatch(partnerCategories, /lucide-react/);
  assert.match(partnerCategories, /image=\{item\.image\}/);
});

test("category cards render optimized, accessible images", () => {
  assert.match(categoryCard, /from "next\/image"/);
  assert.match(categoryCard, /alt=\{`\$\{label\} partner category`\}/);
  assert.match(categoryCard, /className="object-cover/);
});

test("the photo grid keeps cards readable across screen sizes", () => {
  assert.match(
    partnerCategories,
    /grid-cols-1.*sm:grid-cols-2.*lg:grid-cols-3.*xl:grid-cols-5/s,
  );
});
