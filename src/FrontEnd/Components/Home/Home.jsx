import axios from "axios"
import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"

const Home = () => {
	const [dataInput, setInput] = useState([])
	// fake Data
	const [data, setdata] = useState([])

	const {register, handleSubmit} = useForm()
	const onSubmit = (data, e) => {
		setInput([data, ...dataInput])
	}
	const handleDelete = (id) => {
		// console.log(id)
		const updatedTodo = dataInput.filter((element, index) => {
			return index !== id
		})
		setInput(updatedTodo)
	}
	// api call
	useEffect(() => {
		axios
			.get("https://reqres.in/api/users?page=2")
			.then(function (response) {
				// handle success
				console.log(response)
				setdata(response.data.data)
			})
			.catch(function (error) {
				// handle error
				console.log(error)
			})
	}, [])

	return (
		<div className='max-w-xl mx-auto'>
			<h1 className='text-3xl font-bold text-gray-700 underline  w-full text-center'>To-do List</h1>

			{/* add here */}
			<form cla onSubmit={handleSubmit(onSubmit)}>
				<div className='flex justify-center items-center gap-1 py-2 '>
					<input type='text' {...register("todo")} name='todo' className='flex-1 border border-gray-200 outline-none focus:ring-transparent py-1 px-2 ' placeholder='Write to add todos' />
					<input type='submit' className='border border-gray-200 px-4 py-1  shadow-sm bg hover:bg-gray-100 text-gray-600 font-semibold' />
				</div>
			</form>

			{/* todo list show */}
			{dataInput.map((element, index) => {
				return (
					<div className='flex justify-between items-center gap-1 py-2 px-4 border border-gray-200 mt-2 ' key={index}>
						<span className='text-gray-500 cursor-pointer hover:text-cyan-700'>{element.todo}</span>
						<svg onClick={() => handleDelete(index)} xmlns='http://www.w3.org/2000/svg' class='h-6 w-6 text-gray-500 hover:text-red-600 cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
						</svg>
					</div>
				)
			})}

			{/* fakedata */}
			<div className='pt-8'>
				<span className=' cursor-pointer text-cyan-700 '>Fake Data Name List</span>
				{data.map((element, index) => {
					return (
						<div className='flex justify-between items-center gap-1 py-2 px-4 border border-gray-200 mt-2 ' key={index}>
							<span className='text-gray-500 cursor-pointer hover:text-cyan-700'>{element.first_name}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Home
