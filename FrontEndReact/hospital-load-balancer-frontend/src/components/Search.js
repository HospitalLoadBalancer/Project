import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import SearchResultTable from "./sub-components/SearchResultTable";
import SearchSearchBox from "./sub-components/SearchSearchBox";

export default class Search extends React.Component{
    render(){
        return(
            <div className="align-items-center border rounded mb-2">
                <SearchSearchBox></SearchSearchBox>
                <SearchResultTable></SearchResultTable>
            </div>
        )
    }
}