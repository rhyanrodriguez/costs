import ButtonUI from "../layout/ButtonUI";
import styles from "./Tomados.module.css";
import Date from "../layout/Date";
import Loading from "../layout/Loading";
import loadingLogo from "../img/Logo Talst-05.png";
function Tomados() {
  return (
    <div className={styles.baixar_notas}>
      <div className={styles.section1}>
        <h1>
          UneCont <span className="vaitomados">Tomados</span>
        </h1>
        <h3>Selecionar Competência:</h3>
        <Date />
        <ButtonUI />
      </div>
      <div className={styles.section2}>
        <h1>Baixando Notas</h1>
        <p>Carregando... aguarde! </p>
        <img
          className={styles.loading_logo}
          src={loadingLogo}
          alt="loading logo"
        />
        <Loading />
      </div>
    </div>
  );
}
export default Tomados;
