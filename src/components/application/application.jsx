import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Footer } from '../footer/footer';

const todoItem = 'Сделать уборку';

const Application = () => (
    <div>
        <h1>todos</h1>
        <InputItem />
        <ItemList todoItem={todoItem} />
        <Footer count={3} />
    </div>
);

export { Application };