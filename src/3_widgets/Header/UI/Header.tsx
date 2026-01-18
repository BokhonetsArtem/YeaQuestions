import { Link, NavLink } from "react-router-dom";
import YeahubImg from "@/6_shared/assets/images/yeahub-image.svg";
import YeahubText from "@/6_shared/assets/icons/yeahub-logo-text.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={YeahubImg} alt="Yeahub Logo" />
        <img src={YeahubText} alt="Yeahub" />
      </Link>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <NavLink to="/questions">База вопросов</NavLink>
          </li>
          <li>
            <NavLink to="/simulator">Тренажер</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.authorization}>
        <button className={styles.login}>Вход</button>
        <button className={styles.registration}>Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
