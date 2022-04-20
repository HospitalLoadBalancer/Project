const { Hospital } = require('../models/Hospital.js')

class Hospital_Repository {
    // Explicit attributes
    hospitals       // List of registered hospitals
    
    constructor() {
        this.hospitals = []
    }

    add_Hospital(hospital) {
        this.hospitals.push(hospital)
    }
    get_All_Hospitals() {
        return this.hospitals
    }
    get_All_Hospitals_Json(){
        // Implementar
    }
    get_Hospital_By_Id(id) {
        return this.hospitals.find(hospital => hospital.id === id)
    }
    update_Hospital(hospital) {
        let index = this.hospitals.findIndex(h => h.id === hospital.id)
        this.hospitals[index] = hospital
    }
    delete_Hospital_By_Id(id) {
        this.hospitals = this.hospitals.filter(hospital => hospital.id !== id)
    }
}

module.exports = {
    Hospital_Repository
}