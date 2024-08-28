describe('Array', function () {
    it('should same with javascript', function (){
        const names: string[] = ["dewa", "devan", "devi"]
        const values: number[] = [1, 2, 3]

        console.log(names);
        console.log(values);
    })

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ["Makan", "Minum", "Kerja"]
        console.log(hobbies)
        console.log(hobbies[0]);
        console.log(hobbies[1])
        console.log(hobbies[2]);
    })

    it('should support tupple', function () {
        const person: readonly[string, string, number] = ["Dewa", "Devi", 2]
        console.log(person)
        console.log(person[0])
        console.log(person[1])
        console.log(person[2]);
        
    })
})