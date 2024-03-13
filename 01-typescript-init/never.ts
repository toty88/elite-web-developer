(() => {
    const throwError = (message: string): never => {
        throw new Error(`Message of exception ${message}`)
    }

    function infiniteLoop(): never {
        while(true){
            //do some stuff
        }
    }

    enum STATUS {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE'
    }

    // type STATUS = 'INACTIVE' | 'ACTIVE'
    /*
    function processStatus(status: STATUS): never {
        switch(status) {
            case status.ACTIVE: 
                // doSomething()
                break;
            case status.INACTIVE:   
                // doSomething()
                break
            default:
                const _exahustiveCheck: never = status
                throw new Error(`Estado inesperado: ${_exahustiveCheck}`)
            
        }   
    }
     */
})()