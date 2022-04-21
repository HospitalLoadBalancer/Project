const { Analyser_Use_Cases } = require('../use_cases/Analyser_Use_Cases')

class Analyser_Controller{
    aNALYSER_uSE_cASES

    constructor(fetcher){
        this.aNALYSER_uSE_cASES = new Analyser_Use_Cases(fetcher)
    }
    get_Emptiest_Hospital(){
        try{
            let res = this.aNALYSER_uSE_cASES.get_Emptiest_Hospital()
            return {
                status: 200,
                message: res
            }
        }
        catch(err){
            return{
                status: 500,
                message: err
            }
        }
    }
}

module.exports = {
    Analyser_Controller
}