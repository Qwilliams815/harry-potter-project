import React from "react";
import styles from "./styles/results.module.css";

export default function Houses(props) {
	const { data } = props;
	return (
		<div className={styles.results}>
			<h2>{data[0].house}</h2>
			{data.map((member, index) => {
				return <p key={index}>{member.name}</p>;
			})}
		</div>
	);
}
