const { DataBase } = require("../DataBase/DataBase")


const eventsHandlers = {
    hospitalAdded: hospital => DataBase.add_Hospital(hospital),
    hospitalDeleted: id => DataBase.delete_Hospital_By_Id(id),
    hospitalUpdated: hospital => DataBase.update_Hospital(hospital)
}

const handle_event = event => {
    if(event.name in eventsHandlers)
        eventsHandlers[event.name](event.data)    
}

module.exports = {
    handle_event
}