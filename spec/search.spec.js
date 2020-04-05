import assert from "assert";

describe("Sandbox", () => {
  beforeAll(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    assert.strictEqual(title, "Sandbox");

    const header = await element(by.css("h1")).getText();
    assert.strictEqual(header, "Sandbox");
  });
});
