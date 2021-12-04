import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

describe("Test Cases For isEmpty", () => {

    it("Null value.", () => {
        expect(isEmpty(null)).to.be.true
    });

    it("Boolean value.", () => {
        expect(isEmpty(true)).to.be.true
    });

    it("String value.", () => {
        expect(isEmpty("xyz")).to.be.false
    });

    it("Int value.", () => {
        expect(isEmpty(1)).to.be.true
    });

    it("Float value.", () => {
        expect(isEmpty(1.4)).to.be.true
    });

    it("Array value.", () => {
        expect(isEmpty(Array(3))).to.be.false
    });

    it("Object value.", () => {
        expect(isEmpty(Object())).to.be.true
    });

    it("Undefined value.", () => {
        expect(isEmpty(undefined)).to.be.true
    });

})