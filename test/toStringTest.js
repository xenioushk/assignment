import chai from "chai"
import toString from "../src/toString.js"

const expect = chai.expect

describe("Testing For toString", () => {

    it("Integer value.", () => {
        expect(toString(Number(100))).to.equal("100")
    });

    it("Number like string.", () => {
        expect(toString(Number(2.2))).to.equal("2.2")
    });

    it("Number 0 as input.", () => {
        expect(toString(0)).to.equal("0")
    });

    it("Float value.", () => {
        expect(toString("3.3")).to.equal("3.3")
    });

    it("+Infinity value.", () => {
        expect(toString('+Infinity')).to.equal("+Infinity")
    });

    it("-Infinity value.", () => {
        expect(toString("-Infinity")).to.equal("-Infinity")
    });

    it("NaN input.", () => {
        expect(toString('NaN')).to.equal('NaN')
    });

    it("Boolean value.", () => {
        expect(toString(Boolean(true))).to.equal('true')
    });
    it("null input.", () => {
        expect(toString(null)).to.equal('null')
    });
    it("Undefined value.", () => {
        expect(toString(undefined)).to.equal('undefined')
    });

    it("Empty object.", () => {
        expect(toString(Object())).to.equal('[object Object]')
    });

    it("Object of type number.", () => {
        expect(toString(Object(1))).to.equal('1')
    });

    it("Empty symbol.", () => {
        expect(toString(Symbol())).to.equal('Symbol()')
    });

    it("Symbol of type number.", () => {
        expect(toString(Symbol(1))).to.equal('Symbol(1)')
    });

    it("Array value.", () => {
        expect(toString(Array())).to.equal('')
    });

    it("Array of size 5 with undefined  inside.", () => {
        expect(toString(Array(5))).to.equal(',,,,')
    });

})