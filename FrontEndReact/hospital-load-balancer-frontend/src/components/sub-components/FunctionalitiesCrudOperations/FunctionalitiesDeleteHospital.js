import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import FormComponent from "../FormComponent";

const FunctionalitiesDeleteHospital = () => {
	
	const baseUrl = "http://localhost:30100/delete_Hospital_By_Id"
	let formInputs = [
		"id"
	]

	const handleSubmit = event => {
		let formData = extractFormData(event)
		
		axios.delete(`${baseUrl}?id=${formData.id}`)
		.then(res => alert(JSON.stringify(res.data)))
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
			<h4 className="text-center">Delete Hospital by id</h4>
			<FormComponent
				formInput={formInputs}
				formSubmit={handleSubmit}
			/>
		</div>
	)
}

export default FunctionalitiesDeleteHospital