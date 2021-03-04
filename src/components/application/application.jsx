import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Footer } from '../footer/footer';

const Application = () => {
    const items = [
        {
            value: 'Сделать уборку'
        },
        {
            value: 'Сходить в магазин'
        },
        {
            value: 'Приготовить ужин'
        }
    ];

    return (
        <div>
            <h1>todos</h1>
            <InputItem />
            <ItemList items={items} />
            <Footer count={3} />
        </div>
    );
};

export { Application };