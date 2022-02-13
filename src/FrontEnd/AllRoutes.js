import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import Test from "./Components/ApiTest/Test"
import Footer from "./Partials/Footer/Footer"
import Header from "./Partials/Header/Header"
const Home = React.lazy(() => import("./Components/Home/Home"))
const Animation = React.lazy(() => import("./Components/Animation/Animation"))

const AllRoutes = () => {
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

export default AllRoutes;