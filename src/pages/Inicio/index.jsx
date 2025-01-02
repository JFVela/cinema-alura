import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./index.module.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JFVela/api-cinema-alura/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error)); // Agregado para manejar errores.
  }, []);

  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un Lugar Para guardar tus videos favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
