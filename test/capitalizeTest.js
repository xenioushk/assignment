import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Testing For capitalize", () => {

    it("String value.", () => {
        expect(capitalize('FRED')).to.equal("Fred")
    });

    it("Int value.", () => {
        expect(capitalize(Number(100))).to.equal("100")
    });

    it("Number like string", () => {
        expect(capitalize(Number(2.2))).to.equal("2.2")
    });

    it("Number 0 as input", () => {
        expect(capitalize(0)).to.equal("0")
    });

    it("Float value.", () => {
        expect(capitalize("3.3")).to.equal("3.3")
    });

    it("null input.", () => {
        expect(capitalize(null)).to.equal('Null')
    });

    it("Undefined value.", () => {
        expect(capitalize(undefined)).to.equal("Undefined")
    });

    it("Empty symbol", () => {
        expect(capitalize(Symbol())).to.equal('Symbol()')
    });

    it("Array value.", () => {
        expect(capitalize(Array())).to.equal('')
    });

    it("Array of size 5 with undefined inside", () => {
        expect(capitalize(Array(5))).to.equal(',,,,')
    });

})