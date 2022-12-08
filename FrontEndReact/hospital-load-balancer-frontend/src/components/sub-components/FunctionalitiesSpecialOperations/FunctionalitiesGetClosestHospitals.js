import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

const FunctionalitiesGetClosestHospitals = () => {

	const baseUrl = "http://localhost:30000/closest_Hospitals"

	const handleSubmit = event => {
		axios.get(baseUrl)
		.then(res => alert(JSON.stringify(res.data)))
		.catch(err => alert(JSON.stringify(err)))
	};

	return (
		<div className="border border-primary m-4 p-2 rounded">
			<h4 className="text-center">Get Closest hospital</h4>
			<button className="btn btn-outline-primary w-100 mt-2" onClick={handleSubmit} type='submit'>Get Closest hospital</button>
		</div>
	)
}

export default FunctionalitiesGetClosestHospitals