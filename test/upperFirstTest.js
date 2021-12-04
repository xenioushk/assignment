import chai from "chai"
import upperFirst from "../src/upperFirst.js"
import toString from "../src/toString.js"

const expect = chai.expect

describe("Test Cases For Upper First", () => {

    it("String value all lower case.", () => {
        expect(upperFirst('fred')).to.equal("Fred")
    });

    it("String value all upper case.", () => {
        expect(upperFirst('FRED')).to.equal("FRED")
    });


    it("Int value.", () => {
        expect(upperFirst(toString(100))).to.equal("100")
    });

    it("Number like string", () => {
        expect(upperFirst(toString(2.2))).to.equal("2.2")
    });

    it("Number 0 as input", () => {
        expect(upperFirst(toString(0))).to.equal("0")
    });

    it("Float value.", () => {
        expect(upperFirst(toString("3.3"))).to.equal("3.3")
    });

    it("null input.", () => {
        expect(upperFirst(null)).to.equal('')
    });

    it("Undefined value.", () => {
        expect(upperFirst(undefined)).to.equal("")
    });

})