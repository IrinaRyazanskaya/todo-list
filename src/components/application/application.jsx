import { Component } from 'react';
import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Divider } from '../divider/divider';
import { Footer } from '../footer/footer';
import styles from './application.module.css';
import '../../assets/fonts.css';

class Application extends Component {
    render() {
        const items = [
            {
                value: 'Сделать уборку',
                isDone: true,
                optionId: 'thing-1'
            },
            {
                value: 'Сходить в магазин',
                isDone: false,
                optionId: 'thing-2'
            },
            {
                value: 'Приготовить ужин',
                isDone: false,
                optionId: 'thing-3'
            }
        ];
    
        return (
            <div className={styles.screen}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}>todo list</h1>
                    <div className={styles.todo}>
                        <InputItem />
                        <ItemList items={items} />
                    </div>
                    <Divider />
                    <Footer count={3} />
                </div>
            </div>
        );
    }
};

export { Application };