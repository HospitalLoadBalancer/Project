const express = require('express')
const { Fetcher } = require('./fetcher/Fetcher.js')
const { Analyser_Controller } = require('./controllers/Analyser_Controller')

const app = express()
app.use(express.json())

// Create variables
const fetcher = new Fetcher(`http://localhost:4000`)
const controller = new Analyser_Controller(fetcher)

// Endpoints

//http://localhost:XXXX/get_Emptiest_Hospitals
app.get('/get_Emptiest_Hospitals', async (req, res) => {
    let result = await controller.get_Emptiest_Hospitals()
    console.log(result.message)
    res.status(result.status).send({message: result.message})
})

//http://localhost:XXXX/closest_Hospitals
/*
{
    "lat": "",
    "lng": "",
    "address": ""
 }
 */
app.post('/closest_Hospitals', async (req, res) => {
    let result = await controller.get_closest_Hospitals(req)
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/closest_And_Emptiest_Hospitals
/*
{
    "lat": "",
    "lng": "",
    "address": ""
 }
 */
// app.post('/closest_And_Emptiest_Hospitals', (req, res) => {
//     let result = controller.closest_And_Emptiest_Hospital(req)
//     res.status(result.status).json(result.message)
// })

app.listen(5000, () => console.log("5000 port initiated!"))