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
