const { Analyser_Use_Cases } = require('../use_cases/Analyser_Use_Cases')

class Analyser_Controller{
    analyser_Use_Cases

    constructor(){
        this.analyser_Use_Cases = new Analyser_Use_Cases()
    }

    handle_event(req){
         try{
            let res = this.analyser_Use_Cases.handle_event(req.body)
            return {
                status: 200,
                message: res
            }
        }
        catch(err){
            return {
                status: 500,
                message: err.message
            }
        }
    }

    set_location(req){
        try{
            let res = this.analyser_Use_Cases.set_location(req.body)
            return {
                status: 200,
                message: res
            }
        }
        catch(err){
            return {
                status: 500,
                message: err.message
            }
        }
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
                message: err.message
            }
        }
    }

    async get_closest_Hospitals(req){
        try{
            let res = await this.analyser_Use_Cases.get_closest_Hospitals(req.body)
            return {
                status: 200,
                message: res
            }
        }
        catch(err){
            return {
                status: 500,
                message: err.message
            }
        }
    }
}

module.exports = {
    Analyser_Controller
}