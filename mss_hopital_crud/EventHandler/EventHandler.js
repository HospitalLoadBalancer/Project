const { URL_BARRAMENTO } = require("../GlobalVariables")
const axios = require ('axios')


const sendEvent =  event => 
{
    axios.post(URL_BARRAMENTO, event)
    .catch(error => console.log('Could not send event: '+event +'\nError: '+error))
}

module.exports = {
    sendEvent
}