// importanto o pacote
const mongoose = require('mongoose')

// definindo o schema
const hospitalSchema = mongoose.Schema({
    id: {type:String, required:true},
    name: {type:String, required:true},
    location: {lat: {type:String, required:true},
    lng: {type:String, required:true}},
    address: {type:String, required:true},
    number_of_beds: {type:String, required:true},
    occupation: {type:String, required:true}
})

// criamos o modelo associado ao nome Cliente e exportamos
// tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('HospitalSchema', hospitalSchema)