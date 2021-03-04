import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Footer } from '../footer/footer';
import styles from './application.module.css';
import '../../assets/fonts.css';

const Application = () => {
    const items = [
        {
            value: 'Сделать уборку',
            isDone: true
        },
        {
            value: 'Сходить в магазин',
            isDone: false
        },
        {
            value: 'Приготовить ужин',
            isDone: false

        }
    ];

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>todos</h1>
            <InputItem />
            <ItemList items={items} />
            <Footer count={3} />
        </div>
    );
};

export { Application };