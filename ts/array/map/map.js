Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("Cannot call map on null or undefined");
    }
    var O = Object(this);
    if (typeof O !== "object") {
        throw new TypeError("Cannot parse ".concat(this, " to object."));
    }
    var len = O.length >>> 0;
    if (typeof callback !== "function")
        throw new TypeError("".concat(callback, " is not a function"));
    var result = new Array(this.length);
    for (var k = 0; k < len; k++) {
        if (O.hasOwnProperty(k)) {
            var kValue = O[k];
            var mappedValue = callback.call(thisArg, kValue, k, O);
            result[k] = mappedValue;
        }
    }
    return result;
};
var arr = [1, 2, 3, 4, 5];
var res = arr.myMap(function (x, index, array) { return x * 2; }, undefined);
console.log(res);
