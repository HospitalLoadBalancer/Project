import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const FunctionalitiesGetAllHospital = () => {
	const baseUrl = "http://localhost:30100/get_All_Hospitals"

	const handleSubmit = event => {
		axios.get(baseUrl)
		.then(res => alert(JSON.stringify(res.data)))
		.catch(err => alert(JSON.stringify(err)))
	};

	return (
		<div>
			<button className="btn btn-outline-primary w-100 mt-2" onClick={handleSubmit} type='submit'>Get All Hospitals</button>
		</div>
	)
}

export default FunctionalitiesGetAllHospital