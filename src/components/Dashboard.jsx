import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import useFetchData from "../hooks/useFetchData";
import Characters from "./Characters";
import Houses from "./Houses";
import Spells from "./Spells";
import Loader from "./Loader";
import styles from "./styles/results.module.css";

export default function Dashboard() {
	const [selection, setSelection] = useState(null);
	const { data, error, loading } = useFetchData(selection);

	const dataRender = {
		characters: <Characters data={data} style={styles.results} />,
		"characters/house/gryffindor": <Houses data={data} />,
		"characters/house/slytherin": <Houses data={data} />,
		"characters/house/hufflepuff": <Houses data={data} />,
		"characters/house/ravenclaw": <Houses data={data} />,
		spells: <Spells data={data} />,
	};

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Harry Potter Info</h1>
			<Buttons selection={selection} setSelection={setSelection} />
			{/* conditional render */}
			{loading && <Loader />}
			{data && !loading && dataRender[selection]}
		</div>
	);
}
