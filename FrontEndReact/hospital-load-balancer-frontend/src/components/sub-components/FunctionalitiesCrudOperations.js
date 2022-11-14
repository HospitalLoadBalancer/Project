import React from "react"
import FunctionalitiesAddHospital from "./FunctionalitiesCrudOperations/FunctionalitiesAddHospital"
import FunctionalitiesDeleteHospital from "./FunctionalitiesCrudOperations/FunctionalitiesDeleteHospital"
import FunctionalitiesGetHospital from "./FunctionalitiesCrudOperations/FunctionalitiesGetHospital"
import FunctionalitiesUpdateHospital from "./FunctionalitiesCrudOperations/FunctionalitiesUpdateHospital"


export default class FunctionalitiesCrudOperations extends React.Component{
    render(){
        return(
            <div>
                <FunctionalitiesAddHospital></FunctionalitiesAddHospital>
                <FunctionalitiesDeleteHospital></FunctionalitiesDeleteHospital>
                <FunctionalitiesGetHospital></FunctionalitiesGetHospital>
                <FunctionalitiesUpdateHospital></FunctionalitiesUpdateHospital>
            </div>
        )
    }
}