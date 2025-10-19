import styles from "./add-button.module.css";

type AddButtonProps = {
  onClickAdd: () => void;
};

const AddButton = ({ onClickAdd }: AddButtonProps) => (
  <button className={styles.button} onClick={onClickAdd}>
    +
  </button>
);

export { AddButton };
