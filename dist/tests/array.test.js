"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ["dewa", "devan", "devi"];
        const values = [1, 2, 3];
        console.log(names);
        console.log(values);
    });
    it('should support readonly array', function () {
        const hobbies = ["Makan", "Minum", "Kerja"];
        console.log(hobbies);
        console.log(hobbies[0]);
        console.log(hobbies[1]);
        console.log(hobbies[2]);
    });
    it('should support tupple', function () {
        const person = ["Dewa", "Devi", 2];
        console.log(person);
        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);
    });
});
