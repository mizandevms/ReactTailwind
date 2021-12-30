import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./FrontEnd/Components/Home/Home"
import Footer from "./FrontEnd/Partials/Footer/Footer"
import Header from "./FrontEnd/Partials/Header/Header"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}

export default App
