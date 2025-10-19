import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./navigation.module.css";

const NAV_ITEMS = [
  { to: "/todo", label: "Дела", end: true },
  { to: "/", label: "Обо мне", end: true },
];

const getLinkClassName = ({ isActive }) => {
  return classNames(styles.link, { [styles.linkActive]: isActive });
};

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {NAV_ITEMS.map(({ to, label, end }) => (
        <li key={to} className={styles.item}>
          <NavLink to={to} end={end} className={getLinkClassName}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export { Navigation };
