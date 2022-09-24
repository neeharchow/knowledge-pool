import "./App.css"

import React, { useState, useEffect } from "react"

import NavBar from "./layouts/NavBar"

function App() {
	// const [newData, setNewData] = useState([])

	// const url = "/api"

	// useEffect(() => {
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setNewData(data)
	// 		})
	// }, [])

	// return <div>{newData.message}</div>

	return <NavBar></NavBar>
}

export default App
