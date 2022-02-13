import React from "react"
import AllRoutes from "./FrontEnd/AllRoutes"
import "./App.css"
import { Provider } from "react-redux"
import store from "./Redux/store"

function App() {
	return (
		<Provider store={store}>
			<AllRoutes />
		</Provider>
	)
}

export default App
