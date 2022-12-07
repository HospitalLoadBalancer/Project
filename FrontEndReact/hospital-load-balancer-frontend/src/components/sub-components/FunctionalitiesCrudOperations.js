import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import FunctionalitiesAddHospital from "./FunctionalitiesCrudOperations/FunctionalitiesAddHospital"
import FunctionalitiesDeleteHospital from "./FunctionalitiesCrudOperations/FunctionalitiesDeleteHospital"
import FunctionalitiesGetAllHospital from "./FunctionalitiesCrudOperations/FunctionalitiesGetAllHospital"
import FunctionalitiesGetHospitalById from "./FunctionalitiesCrudOperations/FunctionalitiesGetHospitalById"
import FunctionalitiesUpdateHospital from "./FunctionalitiesCrudOperations/FunctionalitiesUpdateHospital"


export default class FunctionalitiesCrudOperations extends React.Component{
    render(){
        return(
            <div>
                <FunctionalitiesAddHospital></FunctionalitiesAddHospital>
                <FunctionalitiesDeleteHospital></FunctionalitiesDeleteHospital>
                <FunctionalitiesGetAllHospital></FunctionalitiesGetAllHospital>
                <FunctionalitiesGetHospitalById></FunctionalitiesGetHospitalById>
                <FunctionalitiesUpdateHospital></FunctionalitiesUpdateHospital>
            </div>
        )
    }
}