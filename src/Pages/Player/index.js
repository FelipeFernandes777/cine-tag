import Banner from 'components/Banner'
import styles from './player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrada from 'Pages/NaoEncontrada'
import { useEffect, useState } from 'react'

export default function Player() {
  const [video, setVideo] = useState([])

  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/FelipeFernandes777/cine-tag/video?id=${parametros.id}`)
      .then(response => response.json())
      .then(dados => {
        setVideo(...dados)
      })
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }

  console.log(video)

  return (
    <>
      <Banner imagem="player" />
      <Titulo>Player</Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section >
    </>
  )
}