const { Location } = require('../models/Location.js')
const axios = require('axios')

// Class to fetch hospital crud data
class Fetcher{
    // Explicit attributes
    base_url    // example.com

    constructor(base_url){
        this.base_url = base_url
    }

    async get_request(request_route){
        let res = await axios.get(`${this.base_url}/${request_route}`)
        return res.data
    }
    post_request(request_route, body){
        return axios.post(`${this.base_url}/${request_route}`, body)
    }
}

module.exports = {
    Fetcher
}