import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Test from "./FrontEnd/Components/ApiTest/Test"
import Footer from "./FrontEnd/Partials/Footer/Footer"
import Header from "./FrontEnd/Partials/Header/Header"

const Home = React.lazy(() => import("./FrontEnd/Components/Home/Home"))
const Animation = React.lazy(() => import("./FrontEnd/Components/Animation/Animation"))

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='App'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<React.Suspense
								fallback='Loading...'
								//{
								// 	<div className='flex justify-center items-center h-full w-full'>
								// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
								// 		l
								// 	</div>
								// }
							>
								<Home />
							</React.Suspense>
						}
					/>
					<Route						
						path='/animation'
						element={
							<React.Suspense
								fallback='Loading...'
								//{
								// 	<div className='flex justify-center items-center h-full w-full'>
								// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
								// 		l
								// 	</div>
								// }
							>
								<Animation />
							</React.Suspense>
						}
					/>
						<Route						
						path='/test'
						element={
							<React.Suspense
								fallback='Loading...'
								//{
								// 	<div className='flex justify-center items-center h-full w-full'>
								// 		{/* <img className=' h-56 w-auto' src={loader} alt='loader' /> */}
								// 		l
								// 	</div>
								// }
							>
								<Test />
							</React.Suspense>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}

export default App
