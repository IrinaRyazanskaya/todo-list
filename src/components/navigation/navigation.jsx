import { NavLink } from 'react-router-dom';

import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        className={styles.link}
                        activeClassName={styles.linkActive}
                        to="/"
                        exact
                    >
                        Обо мне
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        className={styles.link}
                        activeClassName={styles.linkActive}
                        to="/todo"
                        exact
                    >
                        Дела
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        className={styles.link}
                        activeClassName={styles.linkActive}
                        to="/contacts"
                        exact
                    >
                        Контакты
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export { Navigation };