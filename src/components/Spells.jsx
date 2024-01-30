import React from "react";
import styles from "./styles/results.module.css";

export default function Spells(props) {
	const { data } = props;
	return (
		<div className={styles.results}>
			{data.map((spell, index) => {
				return (
					<div key={index}>
						<h2>{spell.name}</h2>
						<p>{spell.description}</p>
						<br />
					</div>
				);
			})}
		</div>
	);
}
