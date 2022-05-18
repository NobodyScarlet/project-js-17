'use strict'

// Good weather test
console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));

// Bad weather test
console.log(padString(1, 8, "*", true));
console.log(padString("hello", null, "*", true));
console.log(padString("hello", 8, 10, true));
console.log(padString("hello", 8, "*", 100));

function padString(value, resultLength, symbol = "", toRight = true) {
    // Validate
    if (typeof value !== "string") {
        console.error("First argument must be a string!");
        return null;
    }

    if (typeof resultLength !== "number") {
        console.error("Second argument must be a number!");
        return null;
    }

    if (typeof symbol !== "string") {
        console.error("Third argument must be a string!");
        return null;
    }

    if (typeof toRight !== "boolean") {
        console.error("Forth arguments must be a true or false (but it's optional)!");
        return null;
    }

    // ----
    let result = value.substr(0, resultLength);

    let symbols = symbol.repeat(
        resultLength - result.length > 0 ? resultLength - result.length : 0
    );

    return toRight ? result.concat(symbols) : symbols.concat(result);
}
