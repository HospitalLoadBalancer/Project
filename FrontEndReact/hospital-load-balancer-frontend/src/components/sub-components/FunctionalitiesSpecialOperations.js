import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import FunctionalitiesGetClosestAndEmptiestHospital from "./FunctionalitiesSpecialOperations/FunctionalitiesGetClosestAndEmptiestHospital"
import FunctionalitiesGetClosestHospitals from "./FunctionalitiesSpecialOperations/FunctionalitiesGetClosestHospitals"
import FunctionalitiesGetEmptiestHospitals from "./FunctionalitiesSpecialOperations/FunctionalitiesGetEmptiestHospitals"
import FunctionalitiesSetLocation from "./FunctionalitiesSpecialOperations/FunctionalitiesSetLocations"

export default class FunctionalitiesSpecialOperations extends React.Component{
    render(){
        return(
            <div>
                <FunctionalitiesSetLocation></FunctionalitiesSetLocation>
                <FunctionalitiesGetClosestAndEmptiestHospital></FunctionalitiesGetClosestAndEmptiestHospital>
                <FunctionalitiesGetClosestHospitals></FunctionalitiesGetClosestHospitals>
                <FunctionalitiesGetEmptiestHospitals></FunctionalitiesGetEmptiestHospitals>
            </div>
        )
    }
}