import styles from './add-button.module.css';

const AddButton = ({ onClickAdd }) => (
    <button className={styles.button} onClick={onClickAdd}>
        +
    </button>
);

export { AddButton };
