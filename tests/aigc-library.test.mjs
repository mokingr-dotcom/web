import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";

const port = 3217;
const baseUrl = `http://127.0.0.1:${port}`;
let server;

before(async () => {
  server = spawn("npm", ["run", "dev", "--", "-p", String(port)], {
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "ignore",
  });

  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Next.js development server did not become ready");
});

after(() => server?.kill("SIGTERM"));

test("AIGC 资料库页面可从主导航进入，并允许嵌入页写入剪贴板", async () => {
  const response = await fetch(`${baseUrl}/aigc-library`);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /href="\/aigc-library"[^>]*>AIGC 资料库<\/a>/);
  assert.match(html, /<iframe[^>]+src="https:\/\/library\.zencolor\.cn\/library\.html"/);
  assert.match(html, /<iframe[^>]+allow="clipboard-write"/);
  assert.match(html, /<iframe[^>]+title="AIGC 资料库"/);
});
