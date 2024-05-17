import styles from "./Home.module.css";
import carinha from "../img/obligations-cuate.svg";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span className={styles.flow}>FLOW</span>
      </h1>
      <p>Comece a baixar agora mesmo!</p>
      <a href="/prestados">botaoquevailevaraalgumlugar</a>
      <p>pao</p>
      <img src={carinha} alt="carinha" />
    </section>
  );
}
export default Home;
