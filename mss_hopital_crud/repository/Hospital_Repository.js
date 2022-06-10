const MongoDB = require('../Database/MongoDB')
const databaseUri = "mongodb+srv://HospitalRepository:HospitalRepository@hospitalrepository.ikpza.mongodb.net/?retryWrites=true&w=majority"

class Hospital_Repository {
    database
    
    constructor() {
        this.database = new MongoDB(databaseUri)
    }

    add_Hospital(hospital) {
        this.database.add_Hospital(hospital)
        //this.hospitals.push(hospital)
    }
    async get_All_Hospitals() {
        return await this.database.get_All_Hospitals()
    }
    async get_Hospital_By_Id(id) {
        return await this.database.get_Hospital_By_Id(id)
    }
    update_Hospital(hospital) {
        this.database.update_Hospital(hospital)
    }
    delete_Hospital_By_Id(id) {
        this.database.delete_Hospital_By_Id(id)
    }
}

HOSPITALS = [
    {
        "id": "11",
        "name": "Doyle LLC",
        "location": {
            "lat": "41.3839",
            "lng": "-150.5908"
        },
        "address": "27737 Leuschke Crest",
        "number_of_beds": "686",
        "occupation": "994"
    },
    {
        "id": "111",
        "name": "Kirlin and Sons",
        "location": {
            "lat": "79.6647",
            "lng": "175.3744"
        },
        "address": "68867 Aurelia Divide",
        "number_of_beds": "584",
        "occupation": "849"
    },
    {
        "id": "215",
        "name": "Wisoky Group",
        "location": {
            "lat": "-40.8925",
            "lng": "100.8029"
        },
        "address": "575 Hagenes Station",
        "number_of_beds": "893",
        "occupation": "867"
    },
    {
        "id": "513",
        "name": "Rice LLC",
        "location": {
            "lat": "-19.8876",
            "lng": "125.6946"
        },
        "address": "57279 Gulgowski Islands",
        "number_of_beds": "245",
        "occupation": "220"
    },
    {
        "id": "418",
        "name": "Klocko - Mills",
        "location": {
            "lat": "12.4988",
            "lng": "-7.2359"
        },
        "address": "8026 Kennith Brooks",
        "number_of_beds": "964",
        "occupation": "563"
    },
    {
        "id": "787",
        "name": "Corkery, Nitzsche and Harber",
        "location": {
            "lat": "-69.4415",
            "lng": "161.2598"
        },
        "address": "2945 Pfeffer Squares",
        "number_of_beds": "299",
        "occupation": "516"
    },
    {
        "id": "478",
        "name": "Mayer, Rempel and Bayer",
        "location": {
            "lat": "-58.5694",
            "lng": "125.0355"
        },
        "address": "06290 Schumm Station",
        "number_of_beds": "725",
        "occupation": "749"
    }
]

module.exports = {
    Hospital_Repository
}