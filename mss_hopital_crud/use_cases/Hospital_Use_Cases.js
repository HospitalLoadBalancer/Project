class Hospital_Use_Cases {
    hospital_Repository

    constructor(hospital_Repository) {
        this.hospital_Repository = hospital_Repository
    }
    add_Hospital(hospital) {
        this.hospital_Repository.add_Hospital(hospital)
    }
    get_All_Hospitals() {
        return this.hospital_Repository.get_All_Hospitals()
    }
    get_Hospital_By_Id(id) {
        return this.hospital_Repository.get_Hospital_By_Id(id)
    }
    update_Hospital(hospital) {
        this.hospital_Repository.update_Hospital(hospital)
    }
    delete_Hospital_By_Id(id) {
        this.hospital_Repository.delete_Hospital_By_Id(id)
    }
}

module.exports = {
    Hospital_Use_Cases
}