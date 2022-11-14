import React from "react"
import FunctionalitiesGetClosestAndEmptiestHospital from "./FunctionalitiesSpecialOperations/FunctionalitiesGetClosestAndEmptiestHospital"
import FunctionalitiesGetClosestHospitals from "./FunctionalitiesSpecialOperations/FunctionalitiesGetClosestHospitals"
import FunctionalitiesGetEmptiestHospitals from "./FunctionalitiesSpecialOperations/FunctionalitiesGetEmptiestHospitals"

export default class FunctionalitiesSpecialOperations extends React.Component{
    render(){
        return(
            <div>
                <FunctionalitiesGetClosestAndEmptiestHospital></FunctionalitiesGetClosestAndEmptiestHospital>
                <FunctionalitiesGetClosestHospitals></FunctionalitiesGetClosestHospitals>
                <FunctionalitiesGetEmptiestHospitals></FunctionalitiesGetEmptiestHospitals>
            </div>
        )
    }
}