import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import FunctionalitiesCrudOperations from "./sub-components/FunctionalitiesCrudOperations";
import FunctionalitiesSpecialOperations from "./sub-components/FunctionalitiesSpecialOperations";

export default class Functionalities extends React.Component{
    render(){
        return(
            <div className="align-items-center border border-primary rounded mb-2 p-2">
                <h1 className="font-weight-bold">Hospital Load Balancer (React Version)</h1>
                <br />
                <div className="align-items-center border border-secondary rounded mb-2 p-2">
                    <h3 className="font-weight-light text-center">CRUD Operations</h3>
                    <FunctionalitiesCrudOperations></FunctionalitiesCrudOperations>
                </div>
                <div className="align-items-center border border-secondary rounded mb-2 p-2">
                    <h3 className="font-weight-light text-center">Special Operations</h3>
                    <FunctionalitiesSpecialOperations></FunctionalitiesSpecialOperations>
                </div>
            </div>
        )
    }
}