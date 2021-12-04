import chai from "chai"
import isBoolean from "../src/isBoolean.js"

const expect = chai.expect

describe("Test Cases For isBoolean", () => {


    it("Null value.", () => {
        expect(isBoolean(null)).to.be.false
    });

    it("Boolean value.", () => {
        expect(isBoolean(true)).to.be.true
    });

    it("String value.", () => {
        expect(isBoolean("xyz")).to.be.false
    });

    it("Int value.", () => {
        expect(isBoolean(0)).to.be.false
    });

    it("Float value.", () => {
        expect(isBoolean(1.4)).to.be.false
    });

    it("Array value.", () => {
        expect(isBoolean(Array(3))).to.be.false
    });

    it("Object value.", () => {
        expect(isBoolean(Object())).to.be.false
    });

    it("Undefined value.", () => {
        expect(isBoolean(undefined)).to.be.false
    });

})