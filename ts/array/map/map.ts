interface Array<T> {
  myMap<U>(callback: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}

Array.prototype.myMap = function <T, U>(callback: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
  if (this == null) {
    throw new TypeError("Cannot call map on null or undefined");
  }

  let O = Object(this) as T[];

  if (typeof O !== "object") {
    throw new TypeError(`Cannot parse ${this} to object.`);
  }

  let len = O.length >>> 0;

  if (typeof callback !== "function") throw new TypeError(`${callback} is not a function`);

  let result: Array<U> = new Array(this.length);

  for (let k = 0; k < len; k++) {
    if (O.hasOwnProperty(k)) {
      let kValue = O[k];
      let mappedValue = callback.call(thisArg, kValue, k, O);
      result[k] = mappedValue;
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];
const res = arr.myMap((x, index, array) => x * 2);
console.log(res);
