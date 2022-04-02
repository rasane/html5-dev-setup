import { expect } from "chai";
import index from "../src/index";


describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    expect(true).to.equal(true);
  });
  it("should return expected string", () => {
    expect(index("incoming")).to.equal("incoming-static");
  });
});