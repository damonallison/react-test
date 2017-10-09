//
// [Javascript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)
//
// Example of writing a custom matcher.
//
expect.extend({
    toBeNaN(received) {
        const pass = isNaN(received);
        if (pass) {
            return {
                message: () => ('expected ${received} to be a number'),
                pass: true,
            };
        } else {
            return {
                message: () => ('expected ${received} to not be a number'),
                pass: false,
            };
        }
    }
});

test('custom matcher', () => {

    // Test custom matcher
    const nan = Number("damon");
    expect(nan).toBeNaN();

    const num = Number(10);
    expect(num).not.toBeNaN();
});

test('number parsing', () => {

    const n = Number("20"); // string -> number
    expect(n).toBe(20);
    expect(n).toEqual(20.00);

    expect(n.toString()).toBe("20"); // number -> string

});

test('string iterating', () => {
    const name = "damon";
    var found = "";
    for (let i = 0; i < name.length; i++) {
        found += name[i];
    }
    expect(name).toEqual(found);
});

test('arrays', () => {
    // JS is not typed.
    const a1 = ["tree", 20, [1, 2, 3]];
    expect(a1[0]).toEqual("tree");


    // Copy the array via iteration.
    var a2 = []
    for(let i = 0; i < a1.length; i++) {
        a2.push(a1[i]);
    }
    expect(a1).toEqual(a2);

    // `slice()` will copy an array.
    expect(a1.slice()).toEqual(a1);


});