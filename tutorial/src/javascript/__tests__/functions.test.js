"use strict";

//
// ES6 functions take a big leap forward.
//
// Javascript does not require you call a function with
// all arguments. This is a hack.
//
// In ES5, the logical || operator was used to default values.
// The problem with || is you may want to pass a falsy value as
// an argument (i.e., 0). Therefore, || should *not* be used.
//
// This is a complete hack!
//
// Javascript adds an `arguments` array to every function. This is a hack.
// Callers do not know they can pass additional arguments to a function
// by looking at its definition.
//
// ES6 cleans up functions in the following ways:
// * Default values.
// * Varadic parameters ("rest" parameters).
//
// ES6's rest parameters were designed to replace `arguments`.
//
// ------------------------------------------------------------------------
//
// ES6
//
test("es5-default-values", () => {
    let calledArg1;
    let calledArg2;
    const test = (arg1, arg2) => {
        calledArg1 = (typeof arg1 !== "undefined") ? arg1 : "default";
        calledArg2 = (typeof arg2 !== "undefined") ? arg2 : "default";
    };

    test("one");

    expect(calledArg1).toEqual("one");
    expect(calledArg2).toEqual("default");

});

test("es6-default-values", () => {
    let calledArg1;
    expect(calledArg1).toEqual(undefined);

    const test = (arg1, arg2 = "default") => {
        calledArg1 = arg1;
        expect(arg2).toEqual("default");
    };

    test("one");
    expect(calledArg1).toEqual("one");

});

// In ES6, default parameters can be expressions.
// Remember, the expressions are only executed when there
// is no default value.
test("es6-default-parameter-expressions", () => {

    function getValue() {
        return 10;
    };
    const test = (arg1, arg2 = getValue()) => {
        return arg2;
    };
    expect(test(1)).toEqual(10);
});

//
// ES6 introduces "rest parameters (...arg2) to replace `arguments`.
//
test("es6-variadic-parameters", () => {
    let vars = [];
    const test = (arg1, ...arg2) => {
        for(let i = 0; i < arg2.length; i++) {
            vars[i] = arg2[i];
        }
    };
    test("damon", "grace", "lily", "cole");
    expect(vars[0]).toEqual("grace");
    expect(vars[1]).toEqual("lily");
    expect(vars[2]).toEqual("cole");

    // The "spread" operator (also ...) allows you to split an array to
    // use the arguments as inputs to a variadic parameter.
    const names = ["kari", "grace", "lily", "cole"];

    // You can also add additional arguments before / after the spread
    // argument as well.
    test("damon", ...names, "roxie");
    expect(vars.length).toEqual(5);
    expect(vars[0]).toEqual("kari");
});

//
// Arrow functions behave differently than traditional Javascript functions
// in a number of important ways. All of them good. ES6 cleans up ES5 by
// reducing the "magic" that is allowed.
//
// * No bindings for: `this`, `super`, `arguments` and `new.target`.
// * Cannot be called with `new`.
// * `prototype` does not exist.
// * Can't change the value of `this`. `this` is lexically bound)
//
test("es6-arrow-functions", () => {

    // IIFE (immediately invoked function expressions)
    var person = ((name) => {
        return {
            getName: function() {
                return name;
            }
        };
    })("damon");
    expect(person.getName()).toEqual("damon");
});