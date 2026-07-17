import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(file) {
  return readFile(new URL(`../${file}`, import.meta.url), "utf8");
}

test("mobile navigation uses a compact header and touch-sized menu button", async () => {
  const navbar = await source("components/Navbar.jsx");
  assert.match(navbar, /h-16.*md:h-20/s);
  assert.match(navbar, /h-11 w-11/);
  assert.match(navbar, /max-h-\[calc\(100dvh-4rem\)\]/);
});

test("hero uses natural phone height and full-width primary action", async () => {
  const hero = await source("components/Hero.jsx");
  assert.match(hero, /min-h-0.*lg:h-screen/s);
  assert.match(hero, /text-\[36px\].*sm:text-\[52px\]/s);
  assert.match(hero, /w-full.*sm:w-auto/s);
  assert.match(hero, /grid grid-cols-2/);
});

test("member benefit pills cannot overlap or overflow on narrow phones", async () => {
  const benefits = await source("components/MemberBenefits.jsx");
  assert.match(benefits, /max-w-none.*sm:max-w-\[310px\]/s);
  assert.match(benefits, /rounded-\[22px\].*sm:rounded-full/s);
  assert.doesNotMatch(benefits, /mobilePosition: "justify-self-(start|end)"/);
});

test("how-it-works controls and cards fit narrow screens", async () => {
  const howItWorks = await source("components/HowItWorks.jsx");
  const processStep = await source("components/ProcessStep.jsx");
  assert.match(howItWorks, /w-full max-w-\[360px\]/);
  assert.match(howItWorks, /flex-1.*px-3.*sm:px-6/s);
  assert.match(processStep, /min-h-\[350px\].*sm:min-h-\[390px\]/s);
  assert.match(processStep, /h-\[190px\].*sm:h-\[220px\]/s);
});

test("mobile footer and major calls to action stack to the available width", async () => {
  const footer = await source("components/Footer.jsx");
  const vendorBenefits = await source("components/VendorBenefits.jsx");
  const joinPaths = await source("components/JoinPaths.jsx");
  assert.match(footer, /items-start.*sm:items-center/s);
  assert.match(footer, /justify-start.*sm:justify-center/s);
  assert.match(vendorBenefits, /w-full.*sm:w-auto/s);
  assert.match(joinPaths, /w-full.*sm:w-fit/s);
});

test("global media defaults prevent intrinsic image overflow", async () => {
  const globals = await source("styles/globals.css");
  assert.match(globals, /img,\s*video\s*\{[^}]*max-width:\s*100%/s);
});

test("container honors section-specific maximum widths without affecting other sections", async () => {
  const container = await source("components/Container.jsx");
  assert.match(container, /maxWidth/);
  assert.match(container, /style=\{maxWidth \? \{ maxWidth \} : undefined\}/);
});
