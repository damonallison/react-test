//
// [Jest](https://facebook.github.io/jest/)
//
// Jest's goal is to simplify testing.
// simple tools -> easy to use -> more tests
//
// Features:
//
// 1. Simple. Simply add *.test.js files or a dedicated __tests__ directory of .js
//    files anywhere in the source tree.
//
// 2. Smart. Tests in changed files will be executed immedaitely.
//
// 3. Extendable. Simple to extend Jest to include custom assertions (see `toBeNaN` below).
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


//
// Custom setup / teardown functions.
// These functions can take a `done` function or promise,
// which Jest will wait on before finishing the test.
//
// beforeEach() and afterEach() can be added to a `describe` block,
// and will execute before / after each test in that block only.
//

beforeAll(() => {
    // console.log("starting suite");
});

afterAll(() => {
    // console.log("ending suite");
});

beforeEach(() => {
    // console.log("Running test");
});

afterEach(() => {
    // console.log("Done running test");
});


test('custom matcher', () => {
    // Test custom matcher
    const nan = Number("damon");
    expect(nan).toBeNaN();

    const num = Number(10);
    expect(num).not.toBeNaN();
});

test("equality", () => {

    const s1 = "damon";
    const s2 = null;

    // Definition

    expect(s1).toBeDefined();
    expect(s1.slice).toBeDefined();
    expect(s1.test).toBeUndefined();
    expect(s1).not.toBeNull();

    expect(s2).toBeDefined();
    expect(s2).toBeNull();

    // Equality

    expect(s1).toBe("damon"); // strict equality (===)
    expect(s1).toEqual("damon"); // logical equality (==)

    expect(s1 === "damon").toBeTruthy();
    expect(s1 === "cole").not.toBeTruthy();
    expect(s1 === "cole").toBeFalsy();

});

//
// Using callbacks as an async pattern.
// Write a test with a single argument function (done).
// Jest will wait until done() is called before finishing the test.
//
test("async w/ callbacks", done => {
    const finish = () => {
        console.log("we are done!")
        done();
    };
    // ** do someething async **
    finish();
});

//
// Using promises as an async pattern.
//
// If a test returns a promise, jest will wait for the promise to be settled
// before finishing the test.
//
// Promises simplify the async pattern by fulfilling the promise even when the action
// already happened. This allows us to guarntee our code will be invoked.
//
// Promise terminology:
//
// `fulfilled` : The action related to the promise has succeeded.
// `rejected` : The action related to the promise failed.
// `pending` : Hasn't fulfilled or rejected yet.
// `settled` : Has fulfilled or rejected.
//
test('async w/ promises', () => {

    // resolve : the "success" callback.
    // reject  : the "failure" callback.
    var promise = new Promise(function(resolve, reject) {

        // do something async.
        if (1 == 1) {
            resolve("success");
        } else {
            // It's customary, but not required, to return an Error object.
            // `Error` objects capture a stack trace.
            reject(Error("failure"));
        }

    });

    // Note the promise chain (then / catch) next is *always invoked*.
    return promise.then(success => {
        expect(success).toBe("success");
        return "successful";
    }).catch (err => {
        expect(err).toMatch("failure");
        return "failed";
    }).then(val => {
        // this chained promise will be invoked in both
        // success and failure cases.
        expect(val).toBe("successful");
    });
});

//
// async / await
//
// Declare a test using an `await` function.
test("async await", async () => {
    const promise = new Promise((resolve, reject) => {
        resolve("success");
    });

    await expect(promise).resolves.toEqual("success");

    const promise2 = new Promise((resolve, reject) => {
        reject(Error("failed"));
    });
    await expect(promise2).rejects.toEqual(Error("failed"));
});