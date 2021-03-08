import { Item } from '../item/item';
import styles from './item-list.module.css';

const ItemList = ({ items }) => (
    <ul className={styles.list}>
        {items.map(item => (
            <Item 
                key={item.value}
                value={item.value}
                isDone={item.isDone}
                optionId={item.optionId}
            />
        ))}
    </ul>
);

export { ItemList };