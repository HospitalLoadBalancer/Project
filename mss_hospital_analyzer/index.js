const express = require('express')
const { Fetcher } = require('./fetcher/Fetcher.js')
const { Analyser_Controller } = require('./controllers/Analyser_Controller')
const { handle_event } = require('./EventHandler/EventHandler.js')
const axios = require('axios')

const app = express()
app.use(express.json())

// Create variables
const controller = new Analyser_Controller()

// Endpoints

//http://localhost:XXXX/get_Emptiest_Hospitals
app.get('/get_Emptiest_Hospitals', async (req, res) => {
    let result = await controller.get_Emptiest_Hospitals()
    res.status(result.status).send({message: result.message})
})

//http://localhost:XXXX/closest_Hospitals
app.get('/closest_Hospitals', async (req, res) => {
    let result = await controller.get_closest_Hospitals(req)
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/closest_And_Emptiest_Hospitals
// app.get('/closest_And_Emptiest_Hospitals', (req, res) => {
//     let result = controller.closest_And_Emptiest_Hospital(req)
//     res.status(result.status).json(result.message)
// })

//http://localhost:XXXX/setLocation
/*
{
    "lat": "",
    "lng": ""
 }
 */
app.post('/setLocation', (req, res) => {
    let result = controller.set_location(req)
    res.status(result.status).json(result.message)
})

app.post('/eventos', (req, res) => {
    controller.handle_event(req)
    res.status(200).send()
})

app.listen(5000, async () => {
    console.log("5000 port initiated!")
    const response = await axios.get('http://localhost:10000/eventos')
    for(let event in response.data){
        handle_event(event)
    }
})