describe("IF STATEMENT", function(){
    it("should if statement typescript", function(){
        const examValue = 100;

        if(examValue > 80){
            console.info("GOOD") 
        } else if(examValue < 60){
            console.info("NOT BAD")
        } else {
            console.info("Try Again")
        }
    })

    it("should ternary operator", function() {
        const value = 80

        const say = value >= 75 ? "Congratulation" : "Try Again"

        console.info(say)
    })
})