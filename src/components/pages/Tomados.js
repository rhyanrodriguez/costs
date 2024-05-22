import ButtonUI from "../layout/ButtonUI";
import styles from "./Tomados.module.css";
import Date from "../layout/Date";

function Tomados() {
  return (
    <div className={styles.baixar_notas}>
      <h1>Baixar Notas</h1>
      <h3>Selecionar Competência:</h3>
      <Date />
      <ButtonUI />
    </div>
  );
}
export default Tomados;
