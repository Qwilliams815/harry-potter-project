import React from "react";
import styles from "./styles/results.module.css";

export default function Loader() {
	return (
		<div className={styles.results}>
			<h1 style={{ textAlign: "center" }}>Loading...</h1>
		</div>
	);
}
