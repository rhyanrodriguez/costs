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
          UneCont <span className={styles.tomatoma}>Tomados</span>
        </h1>
        <h3>Selecionar Competência:</h3>
        <Date className={styles.datePicker} />
        <ButtonUI />
      </div>
      <div className={styles.section2}>
        <h1>Baixando Notas</h1>
        <p>34 de 122 notas baixadas </p>
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
