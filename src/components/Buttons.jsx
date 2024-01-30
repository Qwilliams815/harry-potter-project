import React, { useState, useEffect } from "react";

export default function Buttons(props) {
	const [house, setHouse] = useState("");

	const { selection, setSelection } = props;
	const options = {
		Characters: "characters",
		Houses: "characters/house/gryffindor",
		Spells: "spells",
	};
	const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

	const handleChange = (event) => {
		const selectedValue = event.target.value;
		setSelection("characters/house/gryffindor");
	};

	const sel = document.getElementById("houses");

	function test(name) {
		console.log(house + " This is a test, " + name);
	}

	return (
		<div style={{ border: "solid", textAlign: "center" }}>
			<button onClick={() => setSelection("characters")} key="0">
				Characters
			</button>
			<button onClick={() => setSelection("spells")} key="1">
				Spells
			</button>
			<button onClick={() => test("brain")} key="2">
				Test
			</button>
			{/* <button onClick={setSelection(options[item])} key={index}>{item}</button> */}
			<select
				defaultValue="House"
				onChange={(e) =>
					console.log(setSelection(`characters/house/${e.target.value.toLowerCase()}`))
				}
				id="houses"
				name="houses"
			>
				{houses.map((house, index) => {
					return (
						<option value={house} key={index}>
							{house}
						</option>
					);
				})}
			</select>
		</div>
	);
}
