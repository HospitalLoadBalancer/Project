import React from "react";

import SearchResultTable from "./sub-components/SearchResultTable";
import SearchSearchBox from "./sub-components/SearchSearchBox";

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <SearchSearchBox></SearchSearchBox>
                <SearchResultTable></SearchResultTable>
            </div>
        )
    }
}