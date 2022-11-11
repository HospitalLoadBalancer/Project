class Analyser_Use_Cases{  

    async get_Emptiest_Hospitals(){
        let minor_occupation = Math.min(...this.hospitals.map( hospital => hospital.occupation ))
        return this.hospitals.filter( hospital => hospital.occupation === minor_occupation+'' )
    }

    async get_closest_Hospitals(location){
        const hospitals = this.hospitals.map ( hospital => {
            hospital.distance = this.#calculateHospitalDistance(hospital.location, location)
            return hospital
        })
        let minor_distance = Math.min(...hospitals.map( hospital => hospital.distance))
        return hospitals.filter( hospital => hospital.distance === minor_distance )

    }

    #calculateHospitalDistance(HLocation, location){
        let x = +HLocation.lat
        let x0 = +location.lat
        let y = +HLocation.lng
        let y0 = +location.lng
        return Math.sqrt( Math.pow((x - x0), 2) + Math.pow((y - y0), 2) )
    }

    // closest_And_Emptiest_Hospital(){

    // }
}

module.exports = {
    Analyser_Use_Cases
}