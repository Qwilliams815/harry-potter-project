import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<img
				src="./public/hogwarts-harry-5120x2880-13694.jpg"
				alt="landscape image of Hogwarts"
				className="bg-image"
			/>
			<section>
				<div className="container">
					<Dashboard />
				</div>
			</section>
		</>
	);
}

export default App;
