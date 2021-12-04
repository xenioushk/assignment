import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("Test Cases For endsWith", () => {

    it("String value (end with d)", () => {
        expect(endsWith('fred', 'd')).to.be.true
    });

    it("String value( not end with d)", () => {
        expect(endsWith('fred', 'e')).to.be.false
    });

    it("String value( find r in second position 2)", () => {
        expect(endsWith('fred', 'r', 2)).to.be.true
    });

    it("String value( find f in second position 2)", () => {
        expect(endsWith('fred', 'f', 2)).to.be.false
    });

    it("String value( find f in second position 100)", () => {
        expect(endsWith('fred', 'f', 100)).to.be.false
    });

})