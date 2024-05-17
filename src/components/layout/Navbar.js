import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../img/Logo Talst-05.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img className={styles.logoImg} src={logo} alt="Costs" />
      </Link>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
export default Navbar;
