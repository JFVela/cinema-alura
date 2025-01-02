import styles from "./Player.module.css";
import Titulo from "../../components/Titulo";
//import videos from "../../data/db.json";
import Banner from "../../components/Banner";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";
function Player() {
  const [video, setVideo] = useState([]);  const parametros = useParams();
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/JFVela/api-cinema-alura/videos?id=${parametros.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data);
      });
  }, []);

  //const parametros = useParams();
  //const video = videos.find((video) => video.id === Number(parametros.id));

  if (!video) return <NotFound />;

  return (
    <>
      <Banner img="player" color="#58B9AE" />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.contenido}>
        <div className={styles.videoWrapper}>
          <iframe
            src={video.link}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Player;
