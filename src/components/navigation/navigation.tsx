import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./navigation.module.css";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const NAV_ITEMS: readonly NavItem[] = [
  { to: "/", label: "Обо мне", end: true },
  { to: "/todo", label: "Дела", end: true },
];

const getLinkClassName = ({ isActive }: { isActive: boolean }): string => {
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
