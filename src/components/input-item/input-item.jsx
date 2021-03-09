import { AddButton } from '../add-button/add-button';
import styles from './input-item.module.css';

const InputItem = () => (
    <div className={styles.wrap}>
        <input
            className={styles.field}
            type="text"
            id="input-field"
            name="text"
            placeholder="Добавить задание"
        />
        <AddButton />
    </div>
);

export { InputItem };