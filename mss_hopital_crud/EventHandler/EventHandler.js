const { URL_BARRAMENTO } = require("../GlobalVariables")



const sendEvent =  event => 
{
    axios.post(URL_BARRAMENTO, event)
    .catch(error => console.log('Could not send event: '+event +'\nError: '+error))
}

module.exports = {
    sendEvent
}