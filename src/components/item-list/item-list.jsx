import { Item } from '../item/item';
import PropTypes from 'prop-types';

import styles from './item-list.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
    <ul className={styles.list}>
        {items.map(item => (
            <Item 
                key={item.optionId}
                value={item.value}
                isDone={item.isDone}
                optionId={item.optionId}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />
        ))}
    </ul>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export { ItemList };