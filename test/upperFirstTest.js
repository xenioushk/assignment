import chai from "chai"
import upperFirst from "../src/upperFirst.js"

const expect = chai.expect

describe("Test Cases For Upper First", () => {

    it("int like number", () => {
        expect(upperFirst('fred')).to.equal("Fred")
    });

    it("int like number", () => {
        expect(upperFirst('FRED')).to.equal("FRED")
    });

    it.skip("number like string", () => {
        expect(toString(Number(2.2))).to.equal("2.2")
    });

    it.skip("float like number", () => {
        expect(toString("3.3")).to.equal("3.3")
    });

    it.skip("-Infinity", () => {
        expect(toString("-Infinity")).to.equal("-Infinity")
    });

    it.skip("+Infinity", () => {
        expect(toString('+Infinity')).to.equal("+Infinity")
    });

    it.skip("NaN", () => {
        expect(toString('NaN')).to.equal('NaN')
    });
    // //true = 1, false = 0
    it.skip("bool", () => {
        expect(toString(Boolean(true))).to.equal('true')
    });

    it.skip("null", () => {
        expect(toString(null)).to.equal('null')
    });

    it.skip("undefined", () => {
        expect(toString(undefined)).to.equal('undefined')
    });

    it.skip("empty object", () => {
        expect(toString(Object())).to.equal('[object Object]')
    });

    it.skip("object of type number", () => {
        expect(toString(Object(1))).to.equal('1')
    });

    it.skip("empty symbol", () => {
        expect(toString(Symbol())).to.equal('Symbol()')
    });

    it.skip("symbol of type number", () => {
        expect(toString(Symbol(1))).to.equal('Symbol(1)')
    });

    it.skip("array", () => {
        expect(toString(Array())).to.equal('')
    });

    it.skip("array of size 3 with undefined inside", () => {
        expect(toString(Array(3))).to.equal(',,')
    });

    it.skip("number 0 as parameter", () => {
        expect(toString(0)).to.equal("0")
    });
})