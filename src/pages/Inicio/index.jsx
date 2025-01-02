import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./index.module.css";
import Card from "../../components/Card";
import Videos from "../../data/db.json";

function Inicio() {
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un Lugar Para guardar tus videos favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {Videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
