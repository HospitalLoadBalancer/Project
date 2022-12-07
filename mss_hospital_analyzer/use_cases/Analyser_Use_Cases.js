const { DataBase } = require("../DataBase/DataBase")
const { handle_event } = require("../EventHandler/EventHandler")

class Analyser_Use_Cases{  
    location = {
        lat: null,
        lng: null
    }

    handle_event(event){
        handle_event(event)
    }

    set_location(location){
        for(let key in location)
            this.location[key] = location[key]
        return `Location changed! lat: ${location.lat} lng: ${location.lng}`
    }

    get_closest_And_Emptiest_Hospital(){
        let hospitals = this.get_Emptiest_Hospitals()
        return this.get_closest_Hospitals(hospitals)
    }

    get_Emptiest_Hospitals(margin = 50){
        let minor_occupation = Math.min(...DataBase.hospitals.map( hospital => hospital.occupation ))
        return DataBase.hospitals.filter( hospital => +hospital.occupation <= (minor_occupation + margin) )
    }

    get_closest_Hospitals(hospitals = DataBase.hospitals, margin = 0){
        if(!this.location.lat || !this.location.lng)
            throw new Error('There is no location defined!')
        const hospitalsDistance = this.#calculateHospitalsDistance(hospitals)
        let minor_distance = Math.min(...hospitalsDistance.map( hospital => hospital.distance))
        return hospitals.filter( hospital => hospital.distance <= (minor_distance + margin))
    }

    #calculateHospitalsDistance(hospitals){
        const hospitalsDistance = hospitals.map ( hospital => {
            hospital.distance = this.#calculateHospitalDistance(hospital.location)
            return hospital
        })
        return hospitalsDistance
    }

    #calculateHospitalDistance(HLocation){
        let x = +HLocation.lat
        let x0 = +this.location.lat
        let y = +HLocation.lng
        let y0 = +this.location.lng
        return Math.sqrt( Math.pow((x - x0), 2) + Math.pow((y - y0), 2) )
    }
}

module.exports = {
    Analyser_Use_Cases
}