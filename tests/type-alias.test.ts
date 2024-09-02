import { Category, Product } from "../src/type-alias"

describe("Type Alias", function() {
    it("should support in typescript", function() {
        const category: Category = {
            id: 1,
            name: "Dewa"
        }

        const product: Product = {
            id: "1",
            name: "Samsung",
            price: 20000000000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
})