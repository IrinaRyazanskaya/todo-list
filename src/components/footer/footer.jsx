import styles from './footer.module.css';

const Footer = ({ count }) => (
    <footer className={styles.footer}>
        <span className={styles.counter}>
            Осталось сделать: {count}
        </span>
        <div className={styles.wrap}>
            <input
                className={styles.radio}
                id="all"
                type="radio"
                name="radio"
            />
            <label className={styles.label} htmlFor="all">Все</label>
        </div>
        <div className={styles.wrap}>
            <input
                className={styles.radio}
                id="active"
                type="radio"
                name="radio"
            />
            <label className={styles.label} htmlFor="active">Активные</label>
        </div>
        <div className={styles.wrap}>
            <input
                className={styles.radio}
                id="completed"
                type="radio"
                name="radio"
            />
            <label className={styles.label} htmlFor="completed">Выполненные</label>
        </div>
    </footer>
);

Footer.defaultProps = {
    count: 0
};

export { Footer };