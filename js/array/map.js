Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot call map on null or undefined");
  }
  let O = Object(this);

  if (typeof O !== "object") {
    throw new TypeError(`Cannot parse ${this} to object.`);
  }

  let len = O.length >>> 0;

  if (typeof callback !== "function") throw new TypeError(`${callback} is not a function`);

  let result = new Array(len);

  for (let k = 0; k < len; k++) {
    if (O.hasOwnProperty(k)) {
      let kValue = O[k];
      let mappedValue = callback.call(thisArg, kValue, k, O);
      result[k] = mappedValue;
    }
  }

  return result;
};

const arr = [1, 2, 3, 5];
const result = arr.myMap(
  function (x, index, array) {
    return x * this.factor;
  },
  { factor: 4 }
);
console.log(result);
