import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect

describe("#divide", () => {

    it("int and int zero", () => {
        expect(divide(Number(1), Number(0))).to.be.NaN
    });

    it("null and nan", () => {
        expect(divide(null, NaN)).to.be.NaN
    });

    it("undefined and int", () => {
        expect(divide(undefined, Number(1))).to.equal(Number(1))
    });

    it("int and null", () => {
        expect(divide(Number(1), null)).to.be.NaN
    });

    it("NaN and undefined", () => {
        expect(divide(NaN, undefined)).to.be.NaN
    });

    it("array and NaN", () => {
        expect(divide(new Array(), NaN)).to.be.NaN
    });

    it("+Infinity and undefined", () => {
        expect(divide(+Infinity, undefined)).to.equal(+Infinity)
    });

    it("-Infinity and int", () => {
        expect(divide(-Infinity, Number(1))).to.equal(1)
    });


})