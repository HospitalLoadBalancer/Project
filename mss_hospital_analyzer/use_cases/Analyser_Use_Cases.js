class Analyser_Use_Cases{
    fetcher

    constructor(fetcher){
        this.fetcher = fetcher
    }

    async get_Emptiest_Hospital(){
        let hospitals = await this.fetcher.get_request('get_All_Hospitals')
        let minor_occupation = Math.min(...hospitals.map( hospital => hospital.occupation ))
        return hospitals.filter( hospital => hospital.occupation === minor_occupation+'' )
    }

    // closest_Hospital(){

    // }
    // closest_And_Emptiest_Hospital(){

    // }
}

module.exports = {
    Analyser_Use_Cases
}