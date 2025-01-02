import { Link } from "react-router-dom";
import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link className={styles.link} to={`/${id}`}>
          <img src={capa} alt={titulo} className={styles.capa} />
        </Link>
        <button
          className={styles.favoritoButton}
          onClick={() => agregarFavorito({ id, titulo, capa })}
          aria-label={isFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <img src={icon} alt="" className={styles.favorito} />
        </button>
      </div>
      <Link className={styles.link} to={`/${id}`}>
        <h2 className={styles.titulo}>{titulo}</h2>
      </Link>
    </div>
  );
}

export default Card;
