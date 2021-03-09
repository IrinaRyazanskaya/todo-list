import classnames from 'classnames';
import iconDeleteSrc from './delete-icon.svg';
import styles from './item.module.css';

const Item = ({ value, isDone, optionId, onClickDone }) => (
    <li className={styles.item}>
        <input
            className={styles.checkbox}
            id={optionId}
            type="checkbox"
            name="checkbox"
            onClick={() => onClickDone(isDone)}
        />
        <label className={styles.circle} htmlFor={optionId}></label>
        <span
            className={
                classnames({
                    [styles.text]: true,
                    [styles.done]: isDone
                })
            }
        >
            {value}
        </span>
        <button className={styles.delete}>
            <img
                src={iconDeleteSrc}
                alt="Мусорная корзина"
            />
        </button>
    </li>

);

export { Item };