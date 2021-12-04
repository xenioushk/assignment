import chai from "chai"
import toInteger from "../src/toInteger.js"

const expect = chai.expect

describe("Testing For toInteger", () => {

    it("Integer value.", () => {
        expect(toInteger(99)).to.equal(99)
    });
    it("Float value.", () => {
        expect(toInteger(21.231)).to.equal(21)
    });
    it("String value.", () => {
        expect(toInteger("87.3")).to.equal(87)
    });
    it("+Infinity value.", () => {
        expect(toInteger(+Infinity)).to.equal(Number.MAX_VALUE)
    });
    it("-Infinity value.", () => {
        expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE)
    });
    it("null input.", () => {
        expect(toInteger(null)).to.equal(0)
    });
    it("NaN input.", () => {
        expect(toInteger(NaN)).to.equal(0)
    });

    it("Boolean value.", () => {
        expect(toInteger(Boolean(true))).to.equal(Number(1))
    });

    it("Array value.", () => {
        expect(toInteger(Array())).to.equal(0)
    });

    it("Array of size 7", () => {
        expect(toInteger(Array(7))).to.equal(0)
    });

    it("Undefined value.", () => {
        expect(toInteger(undefined)).to.equal(0)
    });

    it("Empty object.", () => {
        expect(toInteger(Object())).to.equal(0)
    });

    it("Empty symbol.", () => {
        expect(toInteger(Symbol())).to.equal(0)
    });
})