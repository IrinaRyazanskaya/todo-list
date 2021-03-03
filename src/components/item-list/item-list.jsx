import { Item } from '../item/item';

const ItemList = ({ todoItem }) => (
    <ul>
        <Item todoItem={todoItem} />
        <Item todoItem={'Сходить в магазин'} />
        <Item todoItem={'Приготовить ужин'} />
    </ul>
);

export { ItemList };