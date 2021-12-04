import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

describe("Testing For Add", () => {

    it("Both integer.", () => {
        expect(add(Number(1), Number(1))).to.equal(Number(2))
    });

    it("One negative float and one positive float", () => {
        expect(add(Number(-1.1), Number(1.1))).to.equal(Number(0))
    });

    it("Both float.", () => {
        expect(add(Number(1.1), Number(1.1))).to.equal(Number(2.2))
    });

    it("Both negative float.", () => {
        expect(add(Number(-1.1), Number(-1.1))).to.equal(Number(-2.2))
    });

    it("null and nan input.", () => {
        expect(add(null, NaN)).to.be.NaN
    });

    it("undefined and int input", () => {
        expect(add(undefined, Number(1))).to.equal(Number(1))
    });

    it("int and null input.", () => {
        expect(add(Number(1), null)).to.equal(Number(1))
    });

})