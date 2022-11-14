import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class SearchResultTable extends React.Component {
	render() {
		return (
			<div>
				SearchResultTable component
				<div class="table-responsive-sm">
					<table class="table">
						<th>id</th>
						<th>name</th>
						<th>address</th>
						<th>number_of_beds</th>
						<th>occupation</th>
						<th>lat</th>
						<th>lng</th>
					</table>
				</div>
			</div>
		)
	}
}