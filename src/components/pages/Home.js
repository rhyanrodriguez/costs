import styles from "./Home.module.css";
import carinha from "../img/obligations-cuate.svg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span className={styles.flow}>FLOW</span>
      </h1>
      <p>Comece a baixar agora mesmo!</p>
      <ul className={styles.list2}>
        <li>
          <Link to="/prestados">Prestados</Link>
        </li>
        <li>
          <Link to="/tomados">Tomados</Link>
        </li>
      </ul>
      <p>oao</p>
      <img src={carinha} alt="home_image" />
    </section>
  );
}
export default Home;
