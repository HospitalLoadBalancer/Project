const MongoDB = require('../Database/MongoDB')
const  URL_MONGODB  = "mongodb+srv://HospitalRepository:EAwB9QE0uLorscDs@cluster0.r7gaavt.mongodb.net/?retryWrites=true&w=majority"
//const { MongoDBMock } = require('../Database/MongoDBMock')

class Hospital_Repository {
    database
    
    constructor() {
        this.database = new MongoDB(URL_MONGODB) //new MongoDBMock() 
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