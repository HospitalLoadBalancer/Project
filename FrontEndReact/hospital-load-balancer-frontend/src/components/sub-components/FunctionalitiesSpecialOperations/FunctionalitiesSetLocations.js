import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import FormComponent from "../FormComponent";

const FunctionalitiesSetLocation = () => {
	
	const baseUrl = "http://localhost:30000/setLocation"

	let formInputs = [
		"lat", "lng"
	]

	const handleSubmit = event => {
		let formData = extractFormData(event)
		const body = {
				lat: formData.lat, lng: formData.lng
		}
		console.log(body)
		
		axios.post(baseUrl, body)
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
			<h4 className="text-center">Set Location</h4>
			<FormComponent
				formInput={formInputs}
				formSubmit={handleSubmit}
			/>
		</div>
	)
}

export default FunctionalitiesSetLocation