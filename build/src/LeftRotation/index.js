"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotateLeft = (arr, rotation) => {
    if (!arr || arr.length === 0)
        return arr;
    const arrLength = arr.length;
    const rightShift = arrLength - (rotation % arrLength);
    const res = [];
    arr.forEach((num, idx) => {
        res[(idx + rightShift) % arrLength] = num;
    });
    return res;
};
exports.default = rotateLeft;
