const { Analyser_Use_Cases } = require('../use_cases/Analyser_Use_Cases')

class Analyser_Controller{
    analyser_Use_Cases

    constructor(fetcher){
        this.analyser_Use_Cases = new Analyser_Use_Cases(fetcher)
    }

    get_Emptiest_Hospital(){
        try{
            let res = this.analyser_Use_Cases.get_Emptiest_Hospital()
            return {
                status: 200,
                message: res
            }
        }
        catch(err){
            return {
                status: 500,
                message: err
            }
        }
    }
}

module.exports = {
    Analyser_Controller
}