const { Analyser_Use_Cases } = require('../use_cases/Analyser_Use_Cases')

class Analyser_Controller{
    analyser_Use_Cases

    constructor(fetcher){
        this.analyser_Use_Cases = new Analyser_Use_Cases(fetcher)
    }

    async get_Emptiest_Hospitals(){
        try{
            let res = await this.analyser_Use_Cases.get_Emptiest_Hospitals()
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