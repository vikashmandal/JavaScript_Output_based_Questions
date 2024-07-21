// Question - 1 ******************************

console.log('5' - 3);

// Output: 2  Explanation: JavaScript converts '5' to a number and then performs the subtraction.

// Question - 2 ******************************

let a = 0;
let b = false;
console.log(a == b);
console.log(a === b);

// Output:
// true
// false  Explanation: == performs type coercion, making 0 equal to false. === checks for both value and type.

// Question - 3 ******************************

console.log(typeof NaN);

// Output: number Explanation: NaN is considered a number in JavaScript.

// Question - 4 ******************************

function foo() {
    return
    {
        name: "Vikash"
    };
}
console.log(foo());

//   Output: undefined  Explanation: Automatic semicolon insertion inserts a semicolon after return, so the function returns undefined.

// Question - 5 ******************************

let arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);

// Output: 11  Explanation: JavaScript arrays are sparse, setting arr[10] makes the array length 11 with empty slots.
