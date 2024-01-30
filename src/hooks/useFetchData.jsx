import React, { useState, useEffect } from "react";

export default function useFetchData(selection) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const apiURL = "https://hp-api.onrender.com/api";

	useEffect(() => {
		// Guard clause
		if (!selection) {
			return;
		}
		setLoading(true);
		async function fetchData() {
			const url = apiURL + "/" + selection;
			console.log(url);

			try {
				const res = await fetch(url);
				const jsonData = await res.json();
				setData(jsonData);
				console.log("Data: ", jsonData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [selection]);
	return { data, error, loading };
}
