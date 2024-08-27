import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello Dewa', function () {
        expect(sayHello('Dewa')).toBe('Hello Dewa');
    });
});
