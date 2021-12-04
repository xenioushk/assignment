import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect

describe("Test Cases For Date", () => {

    it("Default Date Object", () => {
        expect(isDate(new Date())).to.be.true
    });

    it("Date As String Format.", () => {
        expect(isDate("Mon April 23 2012")).to.be.false
    });

    it("Date As Int Format.", () => {
        expect(isDate(1)).to.be.false
    });

    it("Date As Float Format.", () => {
        expect(isDate(1.3)).to.be.false
    });

    it("Date As Empty Object", () => {
        expect(isDate(Object())).to.be.false
    });

    it("Date As Array", () => {
        expect(isDate(Array(3))).to.be.false
    });

    it("Date As Null Vaule.", () => {
        expect(isDate(null)).to.be.false
    });
    it("Date As undefined Vaule.", () => {
        expect(isDate(undefined)).to.be.false
    });

})