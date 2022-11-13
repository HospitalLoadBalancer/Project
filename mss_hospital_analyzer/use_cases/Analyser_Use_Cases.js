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

    async get_Emptiest_Hospitals(){
        let minor_occupation = Math.min(...DataBase.hospitals.map( hospital => hospital.occupation ))
        return DataBase.hospitals.filter( hospital => hospital.occupation === minor_occupation+'' )
    }

    async get_closest_Hospitals(){
        if(!this.location.lat || !this.location.lng)
            throw new Error('There is no location defined!')
        const hospitals = DataBase.hospitals.map ( hospital => {
            hospital.distance = this.#calculateHospitalDistance(hospital.location)
            return hospital
        })
        let minor_distance = Math.min(...hospitals.map( hospital => hospital.distance))
        return hospitals.filter( hospital => hospital.distance === minor_distance )
    }

    #calculateHospitalDistance(HLocation){
        let x = +HLocation.lat
        let x0 = +this.location.lat
        let y = +HLocation.lng
        let y0 = +this.location.lng
        return Math.sqrt( Math.pow((x - x0), 2) + Math.pow((y - y0), 2) )
    }

    // closest_And_Emptiest_Hospital(){

    // }
}

module.exports = {
    Analyser_Use_Cases
}