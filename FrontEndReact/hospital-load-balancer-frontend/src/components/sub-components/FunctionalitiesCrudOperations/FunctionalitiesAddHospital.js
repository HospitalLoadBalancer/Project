import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from "../FormComponent";

const FunctionalitiesAddHospital = () => {
	let formInputs = [
		"id", "name", "lat", "lng", "address", "number_of_beds", "occupation"
	]

	const handleSubmit = event => {
		let formData = extractFormData(event)
		const body = {
				id: formData.id, 
				name: formData.name,
				location: { lat: formData.lat, lng: formData.lng},
				address: formData.address,
				number_of_beds: formData.number_of_beds,
				occupation : formData.occupation
		}
		console.log(body)
		// request
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
		<div>
			<h1>AddHospital</h1>
			<FormComponent
				formInput={formInputs}
				formSubmit={handleSubmit}
			/>
		</div>
	)
}

export default FunctionalitiesAddHospital