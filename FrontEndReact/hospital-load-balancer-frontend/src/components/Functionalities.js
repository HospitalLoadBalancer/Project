import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import FunctionalitiesCrudOperations from "./sub-components/FunctionalitiesCrudOperations";
import FunctionalitiesSpecialOperations from "./sub-components/FunctionalitiesSpecialOperations";

export default class Functionalities extends React.Component{
    render(){
        return(
            <div className="align-items-center border rounded mb-2">
                <h3>Functionalities</h3>
                <div className="align-items-center border rounded mb-2">
                    <h4>Crud Operations</h4>
                    <FunctionalitiesCrudOperations></FunctionalitiesCrudOperations>
                </div>
                <div className="align-items-center border rounded mb-2">
                    <h4>Special Operations</h4>
                    <FunctionalitiesSpecialOperations></FunctionalitiesSpecialOperations>
                </div>
            </div>
        )
    }
}