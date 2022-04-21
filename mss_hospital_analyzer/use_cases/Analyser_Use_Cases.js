class Analyser_Use_Cases{
    fetcher

    constructor(fetcher){
        this.fetcher = fetcher
    }
    get_Emptiest_Hospital(){
        let req = this.fetcher.get_request('get_All_Hospitals').then((res) => res)
        const hospitals = req.data
        let emptiest = {
            occupation: Infinity
        }

        // forEach loop
        hospitals.forEach(hospital => {
            if (hospital.ocupation < emptiest.occupation) emptiest = hospital
        });

        return emptiest
    }
    closest_Hospital(){

    }
    closest_And_Emptiest_Hospital(){

    }
}

module.exports = {
    Analyser_Use_Cases
}