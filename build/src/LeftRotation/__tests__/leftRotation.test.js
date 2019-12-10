"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('rotateLeft', () => {
    it('rotates the array correctly to the left', () => {
        const expected = [5, 1, 2, 3, 4];
        expect(index_1.default([1, 2, 3, 4, 5], 4)).toEqual(expected);
    });
});
//# sourceMappingURL=leftRotation.test.js.map