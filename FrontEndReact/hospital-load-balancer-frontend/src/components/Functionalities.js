import React from "react";
import FunctionalitiesCrudOperations from "./sub-components/FunctionalitiesCrudOperations";
import FunctionalitiesSpecialOperations from "./sub-components/FunctionalitiesSpecialOperations";

export default class Functionalities extends React.Component{
    render(){
        return(
            <div>
                <FunctionalitiesCrudOperations></FunctionalitiesCrudOperations>
                <FunctionalitiesSpecialOperations></FunctionalitiesSpecialOperations>
            </div>
        )
    }
}