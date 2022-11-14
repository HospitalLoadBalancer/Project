import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class SearchSearchBox extends React.Component{
	render(){
		return(
			<div>
				SearchSearchBox component
				<input className="form-control" type="text" placeholder="Filter Hospitals"/>
			</div>
		)
	}
}