import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Footer } from '../footer/footer';

const Application = () => (
    <div>
        <h1>todos</h1>
        <InputItem />
        <ItemList />
        <Footer />
    </div>
);

export { Application };