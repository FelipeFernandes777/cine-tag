import CabecalhoLink from "components/CabecalhoLink";
import { Link } from "react-router-dom";

import styles from "./cabecalho.module.css";

import logo from "./logo.png";

export default function Cabecalho() {
	return (
		<header className={styles.cabecalho}>
			<Link to="/">
				<img src={logo} alt="Logo Cine-Tag" />
			</Link>
			<nav>
				<CabecalhoLink url={"/"}>Home</CabecalhoLink>
				<CabecalhoLink url={"/favoritos"}>Favoritos</CabecalhoLink>
			</nav>
		</header>
	);
}
