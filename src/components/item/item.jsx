import classnames from 'classnames';
import styles from './item.module.css';

const Item = ({ value, isDone }) => (
    <li className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }>
        {value}
    </li>
);

export { Item };