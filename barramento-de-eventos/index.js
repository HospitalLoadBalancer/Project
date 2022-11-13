const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// CONSTANTS
const port = 10000
const app = express();
const mssPorts = [4000, 5000]
const mssIPs = ["localhost", "localhost"]
const mssResource = '/eventos'
const eventos = []
let requestCounter = 0

// MIDDLEWARES
app.use(bodyParser.json());

// MICROSSERVIÇO
app.get(mssResource, (req, res) => {
    res.send(eventos)
})

app.post(mssResource, (req, res) => {
    const evento = req.body;
    eventos.push(evento)

    requestCounter += 1
    console.log(`Requests recebidas: ${requestCounter}`)
    
    const initalTime = new Date().getTime()
    for (let i = 0; i < mssPorts.length; i++){
            axios.post(`http://${mssIPs[i]}:${mssPorts[i]}${mssResource}`, evento)
            .catch(err => console.log(`${new Date().getTime()}: ${err}`))
    }
    console.log(`Tempo de resposta do broadcast: ${new Date().getTime() - initalTime}ms`)
    console.log(`Aguardando novas solicitações...`)

    res.status(200).send({ msg: "ok"});
});

// MSS HOSTING
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}`);
});