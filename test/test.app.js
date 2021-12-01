import { assert } from 'chai';
import add from '../src/add.js';
import isBoolean from '../src/isBoolean.js';
import upperFirst from '../src/upperFirst.js';



describe("JavaScript Library Testing", () => {

    // Testing Equal

    it.skip("add function should return sum of the two numbers.", () => {
        let result = add(4, 6);
        assert.equal(result, 10);
    })

    // Testing Return Type.

    it.skip("isBoolean function should return true or false type.", () => {
        let result = isBoolean();
        assert.typeOf(result, 'string');
    })

    it("Converts the first character of `string` to upper case.", () => {
        let result = upperFirst('fred');
        assert.equal(result, 'Fred');
    })



})