test("basic equality", () => {

    // `.toBe()` uses exact equality (===)
    // `.toEqual() uses value equality (==)

    const s1 = "test";
    expect(s1 === "test").toBeTruthy();
    expect(s1 == "test").toBeTruthy();

    const a1 = ["test"];
    const a2 = ["test"];

    expect(a1 === a2).toBeFalsy(); // exact equality
    expect(a1 == a2).toBeFalsy();
});