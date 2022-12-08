import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import HospitalDataTable from '../HospitalDataTable';

const FunctionalitiesGetAllHospital = () => {
	const baseUrl = "http://localhost:30100/get_All_Hospitals"
	const [hospitals, setHospitals] = useState([]);

	const handleSubmit = () => {
		axios.get(baseUrl)
		.then(res => setHospitals(res.data))
		.catch(err => alert(JSON.stringify(err)))
	};

	return (
		<div className="border border-primary m-4 p-2 rounded">
			<h4 className="text-center">Get All Hospitals</h4>
			<button className="btn btn-outline-primary w-100 mt-2" onClick={handleSubmit} type='submit'>Get All Hospitals</button>
			<br /><br />
			<HospitalDataTable hospitals={hospitals}></HospitalDataTable>
		</div>
	)
}

export default FunctionalitiesGetAllHospital