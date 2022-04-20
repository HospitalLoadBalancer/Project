const { Location } = require('..\models\Location.js')
const axios = require('axios')

class Fetcher{
    base_url
    constructor(base_url){
        this.base_url = base_url
    }

    get_All_Hospitals(){
        return axios.get()
    }
}

module.exports = {
    Fetcher
}