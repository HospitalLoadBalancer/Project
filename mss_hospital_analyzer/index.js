const express = require('express')
// Require modules

const app = express()
app.use(express.json())

// Create variables


// Endpoints

//http://localhost:XXXX/get_Emptiest_Hospital
app.get('/get_Emptiest_Hospital', (req, res) => {
    let result = controller.get_Emptiest_Hospital(req)
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/closest_Hospital
/*
{
    "latitude": "",
    "longitude": "",
    "address": ""
 }
 */
app.post('/closest_Hospital', (req, res) => {
    let result = controller.closest_Hospital()
    res.status(result.status).send(result.message)
})

//http://localhost:XXXX/closest_And_Emptiest_Hospital
/*
{
    "latitude": "",
    "longitude": "",
    "address": ""
 }
 */
app.post('/closest_And_Emptiest_Hospital', (req, res) => {
    let result = controller.closest_And_Emptiest_Hospital(req)
    res.status(result.status).json(result.message)
})

app.listen(5000, () => console.log("5000 port initiated!"))