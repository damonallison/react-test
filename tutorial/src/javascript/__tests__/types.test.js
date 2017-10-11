//
// [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
//

// Javascript has a single `number` type - a 64 bit float (double in java)
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