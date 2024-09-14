describe("LOOP", function() {
    it("for Loop in typescript", function() {
        const names: string [] = ['Dewa', 'Devi', 'Devan']

        for(let i = 0; i<names.length; i++){
            console.info(names[i])
        }

        for(const name of names){
            console.info(name)
        }

        for(const index in names){
            console.info(names[index])
        }
    })

    it("should while loop", function() {
        let counter: number = 0

        while(counter < 10){
            console.info(counter)
            counter++
        }
    })

    it("should do while loop", function() {
        let counter: number = 0;

        do{
            console.info(counter)
            counter++
        } while(counter < 20)
    })

    it("should break and countinue", function() {
        let counter: number = 0;

        do{
            counter++

            if(counter == 10){
                break
            }

            if(counter % 2 == 0){
                continue;
            }

            console.info(counter)
        }while(true)
    })
})