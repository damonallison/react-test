export default class Types {

    testNumeric() {
        const num = Number("damon");

        console.log("num is " + num);
        console.log("equality test : " +  (6 === (2 + 4)));

        // Conversion to / from number
        const n = Number("20");  // string -> number
        console.log(n.toString()); // every object has a toString()
        console.log(typeof(n));
        console.log(n == 20);
        console.log(typeof(parseInt(n)));
    }

    testStrings() {

        const name = "damon";
        for (let i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }

    testArrays() {

    }



}