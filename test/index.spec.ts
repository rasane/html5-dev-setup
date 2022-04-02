// comment this to make the browser version work
import Mocha from 'mocha';
import { expect } from "chai";
import index from "../src/index";


Mocha.describe("Typescript usage suite", () => {
  Mocha.it("should be able to execute a test", () => {
    expect(true).to.equal(true);
  });
  Mocha.it("should return expected string", () => {
    expect(index("incoming")).to.equal("incoming-static");
  });
});