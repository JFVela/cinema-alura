import Banner from "../../components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import { useFavoritosContext } from "../../context/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner img="favoritos" color="#AF7EAA" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card key={fav.id} {...fav} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
