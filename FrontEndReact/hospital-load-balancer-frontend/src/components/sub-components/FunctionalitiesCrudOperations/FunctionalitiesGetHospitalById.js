import React, { useState } from "react";
import HospitalDataTable from '../HospitalDataTable';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import FormComponent from "../FormComponent";

const FunctionalitiesGetHospitalById = () => {

	const baseUrl = "http://localhost:30100/get_Hospital_By_Id"
	const [hospitals, setHospitals] = useState([]);

	let formInputs = [
		"id"
	]

	const handleSubmit = event => {
		let formData = extractFormData(event)
		
		axios.get(`${baseUrl}?id=${formData.id}`)
		.then(res => setHospitals([res.data]))
		.catch(err => alert(JSON.stringify(err)))
	};

	const extractFormData = (event) => {
		event.preventDefault();
		let data = {}
		for (let i = 0; i < formInputs.length; i++) {
			data[event.target[i].placeholder] = event.target[i].value
		}
		return data
	};

	return (
		<div className="border border-primary m-4 p-2 rounded">
			<h4 className="text-center">Get Hospital by id</h4>
			<FormComponent
				formInput={formInputs}
				formSubmit={handleSubmit}
			/>
			<br /><br />
			<HospitalDataTable hospitals={hospitals}></HospitalDataTable>
		</div>
	)
}

export default FunctionalitiesGetHospitalById