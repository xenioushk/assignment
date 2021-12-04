import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("Test Cases For defaultTo", () => {

    it("Default value should 1", () => {
        expect(defaultTo(1, 10)).to.be.equal(1)
    });

    it("Undefined value", () => {
        expect(defaultTo(undefined, 10)).to.be.equal(10)
    });

    it("String value.", () => {
        expect(defaultTo('fred', 'lorem')).to.be.equal('fred')
    });

    it("String value undefined.", () => {
        expect(defaultTo(undefined, 'lorem')).to.be.equal('lorem')
    });

})