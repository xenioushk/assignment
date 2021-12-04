import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect

describe("Test Cases For Date", () => {

    it("Default Date Object.", () => {
        expect(isDate(new Date())).to.be.true
    });

    it("String value.", () => {
        expect(isDate("Mon April 23 2012")).to.be.false
    });

    it("Int value.", () => {
        expect(isDate(1)).to.be.false
    });

    it("Float value.", () => {
        expect(isDate(1.3)).to.be.false
    });

    it("Empty object.", () => {
        expect(isDate(Object())).to.be.false
    });

    it("Array value.", () => {
        expect(isDate(Array(3))).to.be.false
    });

    it("Null value.", () => {
        expect(isDate(null)).to.be.false
    });

    it("Undefined value.", () => {
        expect(isDate(undefined)).to.be.false
    });

})