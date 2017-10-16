"use strict";
//
// ES6 improves using objects.
//
// One of the design goals of

//
// If the name of a property is the value of a variable, you
// can omit the value when creating a property.
//
// Concise property syntax allows you to omit the name and `function`
// keyword when creating a method.
//
test("property-initializer-shorthand", () => {
    const name = "damon";
    const age = 41;

    const person = {
        name,
        age,
        description() {
            return `${this.name} ${this.age}`
        }
    };
    expect(person.name).toEqual("damon");
    expect(person.description()).toEqual("damon 41");
});

//
// Computed properties
//
// Using [] allows you to use variables as property names.
//
test("computed-property-names", () => {

    var nameField = "firstName";

    var person = {
        [nameField] : "damon",
    };

    expect(person.firstName).toEqual("damon");

})

//
// Object.is() determines if two objects are truly equal.
// It cleans up the nuances with the built in `===` operator.
//
// The `===` operator treats NaN and +0 / -0 differently.
//
// Always use Object.is() over `===` when checking for object equality.
//
test("object-equality", () => {

    // This is a problem with `===`. It needs to be fixed.
    expect(NaN === NaN).toBeFalsy();

    // Object.is a much better way to check for true
    // object equality.
    expect(Object.is(NaN, NaN)).toBeTruthy();
    expect(Object.is(undefined, undefined)).toBeTruthy();
    expect(Object.is(typeof Function, typeof (() => {}))).toEqual(true);

    // Object.is avoids type cohesion.
    expect(Object.is(5, "5")).toBeFalsy();

});

//
// JS6 introduces "super" as a way to invoke an object's prototype.
//
test("using-super", () => {

    let person = {
        getGreeting() {
            return "Hello";
        }
    };

    let friend = {
        getGreeting() {
            // Prior to ES6, this is how you accessed the prototype.
            // Object.getPrototypeOf(this).getGreeting.call(this)
            return super.getGreeting() + ", hi!"
        }
    };

    // Here is what establishes the "object" hierarchy, allowing
    // `friend` to have a prototye containing getGreeting().
    Object.setPrototypeOf(friend, person);

    let relative = Object.create(friend);
    expect(relative.getGreeting()).toEqual("Hello, hi!");
});