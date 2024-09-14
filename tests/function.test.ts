describe('Funtion', function(){
    it("should support in typescript", function() {
        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello("Dewa")).toBe("Hello Dewa")

        function printHello(name: string): void {
            console.info(`Hello ${name}`)
        }

        printHello("Dewa")
    })

    it("should support default value", function() {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello()).toBe("Hello Guest")
        expect(sayHello("Dewa")).toBe("Hello Dewa")
    }) 

    it("should support rest parameter", function() {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values){
                total += value
            }

            return total
        }

        expect(sum(1,2,3,4,5)).toBe(15)
    })

    it("should support optional paramater", function() {
        function sayHello(firstName: string, lastName?: string): string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
        }
        expect(sayHello('Dewa')).toBe("Hello Dewa")
        expect(sayHello("Dewa", "Ari")).toBe("Hello Dewa Ari")
    })

    it("should support function overloading", function(){
        function callMe(value: number): number
        function callMe(value: string): string

        function callMe(value: any): any{
            if(typeof value === "string"){
                return value.toUpperCase()
            } else if(typeof value === "number"){
                return value * 10
            }
        }

        expect(callMe(10)).toBe(100)
        expect(callMe("Dewa")).toBe("DEWA")
    })

    it("should function as parameter", function(){
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase()
        }

        expect(sayHello("Dewa", toUpper)).toBe("Hello DEWA")
        
        expect(sayHello("Dewa", function(name: string): string {
            return name.toUpperCase()
        })).toBe("Hello DEWA")

        expect(sayHello("Dewa", (name: string) => name.toUpperCase() )).toBe("Hello DEWA")
    })
})