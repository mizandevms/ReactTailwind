import axios from "axios"
import React, {useEffect, useState} from "react"

export default function Test() {
	const [fakeData, setFakeData] = useState([])

	let dummy = []
	console.log("dimmy", dummy)

	console.log(fakeData)
	// api call
	useEffect(() => {
		axios
			.get("https://reqres.in/api/users?page=2")
			.then(function (response) {
				// handle success
				console.log(response)
				setFakeData(response.data.data)
			})
			.catch(function (error) {
				// handle error
				console.log(error)
			})
	}, [])

	const handleSetValue = () => {
		dummy = fakeData
		console.log("dimmy", dummy)
	}

	return (
		<div>
			<button onClick={() => handleSetValue()} className='capitalize text-xl font-extrabold text-cyan-700 py-4 px-6'>
				set value
			</button>
		</div>
	)
}
