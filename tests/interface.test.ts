import { Employee, Manager } from "../src/employee"
import { Person } from "../src/person"
import { Seller } from "../src/seller"

describe("Interface", function () {
    it("should support in typescript", function (){
        const seller: Seller = {
            id: 1,
            name: "UD. Alam Bahari",
            nip: "12233333",
            npwp: "111111111"
        }

        seller.name = "UD. Alam Bahari 2"

        console.info(seller)
    })

    it("should support function interface", function (){
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 * value2;
        }

        expect(add(2, 5)).toBe(10)
    })

    it("should support indexable interface", function () {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Dewa", "Gede", "Agung", "Ari"]
        console.info(names)
    })

    it("should support indexable interface for non number index", function (){
        interface StringDictonary {
            [key: string]: string
        }

        const dictonary: StringDictonary = {
            "name": "Dewa Gede Agung Ari",
            "address": "Indonesia"
        }

        expect(dictonary["name"]).toBe("Dewa Gede Agung Ari")
        expect(dictonary["address"]).toBe("Indonesia")
    })

    it("should support extends interface", function () {
        const employee: Employee = {
            id: "1",
            name: "Dewa",
            division: "Mobile Engginer"
        }

        console.info(employee)

        const manager: Manager = {
            id: "1",
            name: "Dewa",
            division: "Mobile Engginer",
            numberOfEmployees: 10
        }

        console.info(manager)
    })

    it("should support function in interface", function() {
        const person: Person = {
            name: "Dewa",
            sayHello: function (name: string) : string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.info(person)
    })

    it("should support intersection", function () {
        interface HasName {
            name: string
        }

        interface HasId {
            id: number
        }

        type Domain = HasName & HasId

        const domain: Domain = {
            id: 1,
            name: "Dewa"
        }

        console.info(domain)
    })
})