import { Item } from '../item/item';

const ItemList = ({ items }) => (
    <ul>
        {items.map(item => (
            <Item key={item.value} value={item.value} />
        ))}
    </ul>
);

export { ItemList };