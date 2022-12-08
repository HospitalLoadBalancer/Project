import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const FunctionalitiesGetAllHospital = () => {
	const baseUrl = "http://localhost:30100/get_All_Hospitals"

	const [products, setProducts] = useState([]);
    const columns = [
        {field: 'id', header: 'Id'},
        {field: 'name', header: 'Name'},
        {field: 'location.lat', header: 'Latitude'},
		{field: 'location.lng', header: 'Longitude'},
        {field: 'address', header: 'Address'},
		{field: 'number_of_beds', header: 'Number of Beds'},
		{field: 'occupation', header: 'Occupation'}
    ];

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

	const handleSubmit = () => {
		axios.get(baseUrl)
		.then(res => setProducts(res.data))
		.catch(err => alert(JSON.stringify(err)))
	};

	return (
		<div className="border border-primary m-4 p-2 rounded">
			<h4 className="text-center">Get All Hospitals</h4>
			<button className="btn btn-outline-primary w-100 mt-2" onClick={handleSubmit} type='submit'>Get All Hospitals</button>
			<br /> <br />
			<div className="card border border-primary rounded">
				<div className="card">
					<DataTable value={products} responsiveLayout="scroll">
						{dynamicColumns}
					</DataTable>
				</div>
            </div>
		</div>
	)
}

export default FunctionalitiesGetAllHospital