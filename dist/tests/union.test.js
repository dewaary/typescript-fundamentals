"use strict";
describe('Union Type', function () {
    it('should support in typescript', function () {
        let sampel = "Dewa";
        console.info(sampel);
        sampel = 100;
        console.info(sampel);
        sampel = true;
        console.info(sampel);
    });
    it('should support typeof operator', function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toLocaleUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Dewa")).toBe("DEWA");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
