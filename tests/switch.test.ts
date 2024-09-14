describe("SWITCH STATEMENT", function(){
    it("should switch statement typescript", function(){
        function sayHello(name: string): string {
            switch(name){
                case "Dewa" :
                    return "Hi Dewa"
                case "Devi" :
                    return "Hi Devi"
                case "Devan" :
                    "Hi Devan"
                default: 
                    "Keluarga Kecil Kita"
            }

            console.info(sayHello("Dewa"))
            console.info(sayHello("Devi"))
            console.info(sayHello("Devan"))
            console.info(sayHello("Keluarga"))
        }
    })
})