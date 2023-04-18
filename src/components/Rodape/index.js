import React from "react";

import styles from "./rodape.module.css";

export default function Rodape() {
	return (
		<footer className={styles.rodape}>
			<div className={styles.copy}>&copy;</div>
			<div className={styles.text_container}>
				<p className={styles.text}> Desenvolvido por Felipe Fernandes</p>
			</div>
		</footer>
	);
}
