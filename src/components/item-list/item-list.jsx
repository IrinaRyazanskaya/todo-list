import { Item } from '../item/item';

const ItemList = ({ items }) => (
    <ul>
        {items.map(item => (
            <Item key={item.value} value={item.value} isDone={item.isDone} />
        ))}
    </ul>
);

export { ItemList };