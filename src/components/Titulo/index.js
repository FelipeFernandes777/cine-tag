import React from "react";

import styles from "./Titulo.module.css";

export default function Titulo({ children }) {
	return <h1 className={styles.texto}>{children}</h1>;
}
