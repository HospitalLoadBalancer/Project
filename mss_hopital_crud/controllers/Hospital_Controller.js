const { Hospital_Use_Cases } = require("../use_cases/Hospital_Use_Cases")
const { Hospital } = require('../models/Hospital.js')

class Hospital_Controller {
    hospital_Use_Cases

    constructor(hospital_repository) {
        this.hospital_Use_Cases = new Hospital_Use_Cases(hospital_repository);
    }

    add_Hospital(req) {
        try {
            let hospital = new Hospital(req.body)
            this.hospital_Use_Cases.add_Hospital(hospital);
            return {
                status: 201,
                message: "Hospital added successfully"
            }
        }
        catch (err) {
            return {
                status: 500,
                message: err.message
            }
        }
    }

    get_All_Hospitals() {
        try {
            let res = this.hospital_Use_Cases.get_All_Hospitals()
            return {
                status: 200,
                message: res
            }
        }
        catch (err) {
            return {
                status: 500,
                message: 'get_All_Hospitals error: '+err.message
            }
        }
    }

    get_Hospital_By_Id(req) {
        try {
            let id = req.query.id
            let res = this.hospital_Use_Cases.get_Hospital_By_Id(id);
            return {
                status: 200,
                message: res
            }
        }
        catch (err) {
            return {
                status: 500,
                message: err.message
            }
        }
    }
    update_Hospital(req) {
        try {
            let hospital = new Hospital(req.body);
            this.hospital_Use_Cases.update_Hospital(hospital);
            return {
                status: 200,
                message: "Hospital updated successfully"
            }
        }
        catch (err) {
            return {
                status: 500,
                message: err.message
            }
        }
    }
    delete_Hospital_By_Id(req) {
        try {
            let id = req.query.id
            this.hospital_Use_Cases.delete_Hospital_By_Id(id);
            return {
                status: 201,
                message: "Hospital deleted successfully"
            }
        }
        catch (err) {
            return {
                status: 500,
                message: err.message
            }
        }
    }
}

module.exports = {
    Hospital_Controller
}