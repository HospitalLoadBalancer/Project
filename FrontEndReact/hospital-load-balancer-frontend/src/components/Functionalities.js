import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import FunctionalitiesCrudOperations from "./sub-components/FunctionalitiesCrudOperations";
import FunctionalitiesSpecialOperations from "./sub-components/FunctionalitiesSpecialOperations";

export default class Functionalities extends React.Component{
    render(){
        return(
            <div className="align-items-center border rounded mb-2">
                <FunctionalitiesCrudOperations></FunctionalitiesCrudOperations>
                <FunctionalitiesSpecialOperations></FunctionalitiesSpecialOperations>
            </div>
        )
    }
}