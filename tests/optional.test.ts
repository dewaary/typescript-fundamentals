describe('Optional Paramter', function () {
    it('should support null and undifined', function(){
        function sayHello(name?: string | null){
            if(name){
                console.info(`Hello ${name}`)
            } else {
                console.info('Hello')
            }
        }

        sayHello("Dewa");
        const name: string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})