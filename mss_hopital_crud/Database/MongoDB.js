const mongoose = require('mongoose')
const HospitalSchema = require('./HospitalSchema')


class MongoDB {
  constructor(uri) {
    this.connectDatabase(uri)
  }

  connectDatabase(uri) {
    mongoose.connect(uri)
      .then(() => { console.log('Conexão OK') })
      .catch((e) => { console.log('Erro de conexão: ' + e) })
  }

  add_Hospital(hospital) {
    HospitalSchema(hospital).save().then()
  }
  async get_All_Hospitals() {
    return await HospitalSchema.find()
  }
  async get_Hospital_By_Id(id) {
    return await HospitalSchema.findOne({id : id})
  }
  update_Hospital(hospital) {
    this.delete_Hospital_By_Id(hospital.id)
    this.add_Hospital(hospital)
  }
  delete_Hospital_By_Id(id) {
    HospitalSchema.deleteOne({id: id}).then()
  }
}

module.exports = MongoDB