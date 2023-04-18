import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {

	const [videos, setVideos] = useState([])

	useEffect(() => {
		fetch('https://my-json-server.typicode.com/FelipeFernandes777/cine-tag/video')
			.then(response => response.json())
			.then(dados => {
				setVideos(dados)
			})
	}, [])

	return (
		<>
			<Banner imagem="home" />
			<Titulo>
				<h1>Um lugar para guardar seus videos e filmes</h1>
			</Titulo>
			<section className={styles.container}>
				{videos.map((video) => {
					return <Card {...video} key={video.id} />;
				})}
			</section>
		</>
	);
}
