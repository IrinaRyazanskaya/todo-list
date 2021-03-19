import { useState, useEffect } from 'react';
import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Divider } from '../divider/divider';
import { Footer } from '../footer/footer';
import styles from './todo.module.css';
import '../../assets/fonts.css';

const initialState = {
    items: [
        {
            value: 'Сделать уборку',
            isDone: true,
            optionId: 1
        },
        {
            value: 'Сходить в магазин',
            isDone: false,
            optionId: 2
        },
        {
            value: 'Приготовить ужин',
            isDone: false,
            optionId: 3
        }
    ],
};

const Todo = () => {
    const [items, setItems] = useState(initialState.items);

    useEffect(() => {
        console.log('update');
    });

    useEffect(() => {
        console.log('mount');
    }, []);

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item };

            if (item.optionId === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        setItems(newItemList);
    };

    const onClickDelete = id => {
        const newItemList = items.filter(item => {
            return item.optionId !== id;
        });

        setItems(newItemList);
    };

    const onClickAdd = value => {
        const newItems = [
            ...items,
            {
                value,
                isDone: false,
                optionId: items.length + 1
            }
        ];

        setItems(newItems);
    };

    return (
        <article className={styles.screen}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>todo list</h1>
                <div className={styles.todo}>
                    <InputItem onClickAdd={onClickAdd} />
                    <ItemList
                        items={items}
                        onClickDone={onClickDone}
                        onClickDelete={onClickDelete}
                    />
                </div>
                <Divider />
                <Footer count={items.filter(item => !item.isDone).length} />
            </div>
        </article>
    );
};

export { Todo };