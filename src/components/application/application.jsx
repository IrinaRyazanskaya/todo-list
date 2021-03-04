import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Footer } from '../footer/footer';
import './application.css';
import '../../assets/fonts.css';

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
        <div className="todo-list">
            <h1 className="todo-list__title">todos</h1>
            <InputItem />
            <ItemList items={items} />
            <Footer count={3} />
        </div>
    );
};

export { Application };