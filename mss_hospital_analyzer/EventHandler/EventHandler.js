import { AnalyserHospitalsDataBase } from "../DataBase/DataBase"


const eventsHandlers = {
    hospitalAdded: hospital => AnalyserHospitalsDataBase.add_Hospital(hospital),
    hospitalDeleted: id => AnalyserHospitalsDataBase.delete_Hospital_By_Id(id),
    hospitalUpdated: hospital => AnalyserHospitalsDataBase.update_Hospital(hospital)
}

export const handle_event = event => {
    if(event.name in eventsHandlers)
        eventsHandlers[event.name](event.data)    
}