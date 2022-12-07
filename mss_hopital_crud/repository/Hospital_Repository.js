const MongoDB = require('../Database/MongoDB')
//const { URL_MONGODB } = require('../GlobalVariables')
const { MongoDBMock } = require('../Database/MongoDBMock')


class Hospital_Repository {
    database
    
    constructor() {
        this.database = new MongoDBMock() // new MongoDB(URL_MONGODB)
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

module.exports = {
    Hospital_Repository
}