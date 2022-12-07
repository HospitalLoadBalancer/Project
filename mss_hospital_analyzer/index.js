const express = require('express')
const { Analyser_Controller } = require('./controllers/Analyser_Controller')
const { handle_event } = require('./EventHandler/EventHandler.js')
const axios = require('axios')
const cors = require('cors')
const { URL_BARRAMENTO } = require('./GlobalVariables')

const app = express()
app.use(express.json(), cors())

// Create variables
const controller = new Analyser_Controller()

// Endpoints

//http://localhost:XXXX/get_Emptiest_Hospitals
app.get('/get_Emptiest_Hospitals', (req, res) => {
    let result = controller.get_Emptiest_Hospitals()
    console.log('/get_Emptiest_Hospitals: Result '+ result.status)
    res.status(result.status).send({message: result.message})
})

//http://localhost:XXXX/closest_Hospitals
app.get('/closest_Hospitals', (req, res) => {
    let result = controller.get_closest_Hospitals()
    console.log('/closest_Hospitals: Result '+ result.status)
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/closest_And_Emptiest_Hospitals
app.get('/closest_And_Emptiest_Hospitals', (req, res) => {
    let result = controller.get_closest_And_Emptiest_Hospital()
    res.status(result.status).json(result.message)
})

//http://localhost:XXXX/setLocation
/*
{
    "lat": "",
    "lng": ""
 }
 */
app.post('/setLocation', (req, res) => {
    let result = controller.set_location(req)
    console.log('/setLocation: Result '+ result.status)
    res.status(result.status).json(result.message)
})

app.post('/eventos', (req, res) => {
    let result = controller.handle_event(req)
    console.log('/eventos: Result '+ result.status)
    res.status(result.status).json(result.message)
})

app.listen(5000, async () => {
    console.log("5000 port initiated!")
    const response = await axios.get(URL_BARRAMENTO)
    .catch(error => console.log("Error: "+error))
    for(let event of response.data){
        handle_event(event)
    }
})