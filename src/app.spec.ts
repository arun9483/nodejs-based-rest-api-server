import { App } from "./App";

describe("App", () => {
  const app = new App();

  it("should exist", () => {
    expect(app).toBeDefined();
  });

  it("should exist express", () => {
    expect(app.express).toBeDefined();
  });
});
