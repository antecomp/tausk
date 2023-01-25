import { useState } from "react";
import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "../stylesheets/tabBar.css";
import "../App.css"

const TabBar = (props) => {
	const[someState] = useState(props.passingState);

	return(
		<div class="tabBar">
		<h1>This is to make sure I remember how to use components</h1>
		<h2>someSate is {someState}</h2>
		</div>
	)
}

export default TabBar;