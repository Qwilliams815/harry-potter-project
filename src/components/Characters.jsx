import React from "react";
import styles from "./styles/results.module.css";

export default function Characters(props) {
	const { data } = props;
	return (
		<div className={styles.results}>
			{data.map((character, index) => {
				return (
					<div key={index}>
						<h2>{character.name}</h2>
						<p>Actor: {character.actor}</p>
						<p>Character YOB: {character.yearOfBirth}</p>
						{/* <img src={character.image} alt={`image of ${character.name}`} /> */}
						<br />
					</div>
				);
			})}
		</div>
	);
}
