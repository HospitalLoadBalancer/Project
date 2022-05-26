const express = require('express')
const { Hospital_Repository } = require('./repository/Hospital_Repository.js')
const { Hospital_Controller } = require('./controllers/Hospital_Controller.js')

const app = express()
app.use(express.json())

const repository = new Hospital_Repository()
const controller = new Hospital_Controller(repository)

//http://localhost:XXXX/add_Hospital
/*
{
    "id":"2100", 
    "name":"teste",
    "location":{ "lat":"-23.4601606", "lng": "-46.612616"},
    "address": "Cu do mundo",
    "number_of_beds": "20",
    "ocupation" : "19"
 }
*/
app.post('/add_Hospital', (req, res) => {
    let result = controller.add_Hospital(req)
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/get_All_Hospitals
app.get('/get_All_Hospitals', (req, res) => {
    let result = controller.get_All_Hospitals()
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/get_Hospital_By_Id?id=X
app.get('/get_Hospital_By_Id', (req, res) => {
    let result = controller.get_Hospital_By_Id(req)
    res.status(result.status).json(result.message)
})

//http://localhost:XXXX/update_Hospital
/*
{
    "id":"2100", 
    "name":"teste",
    "location":{ "lat":"-23.4601606", "lng": "-46.612616"},
    "address": "Cu do mundo",
    "number_of_beds": "20",
    "ocupation" : "19"
 }
 */
app.post('/update_Hospital', (req, res) => {
    let result = controller.update_Hospital(req)
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/delete_Hospital_By_Id?id=X
app.post('/delete_Hospital_By_Id', (req, res) => {
    let result = controller.delete_Hospital_By_Id(req)
    res.status(result.status).send(result.message)
})


app.listen(4000, () => console.log("4000 port initiated!"))