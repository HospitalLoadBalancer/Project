export const AnalyserHospitalsDataBase = new HospitalDataBase()

class HospitalDataBase {
    hospitals = []
    Emptiest_Hospitals = []

    get_Emptiest_Hospitals(){

    }

    update_Hospital(hospital) {
        this.delete_Hospital_By_Id(hospital.id)
        this.add_Hospital(hospital)
    }
    
    delete_Hospital_By_Id(id) {
        this.hospitals = this.hospitals.filter( hospital => hospital.id !== id )
    }

    add_Hospital(hospital) {
        this.hospitals.push(hospital)
    }
}