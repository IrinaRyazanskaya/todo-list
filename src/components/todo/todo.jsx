import { useSelector, useDispatch } from 'react-redux';

import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Divider } from '../divider/divider';
import { Footer } from '../footer/footer';
import styles from './todo.module.css';
import '../../assets/fonts.css';

const Todo = () => {
    const items = useSelector((state) => { 
        return state.todo.items;
    });

    const dispatch = useDispatch();

    const onClickAdd = (value) => {
        dispatch({
            type: 'todo/add',
            payload: value
        })
    };

    const onClickDelete = (id) => {
        dispatch({
            type: 'todo/delete',
            payload: id
        })
    };

    const onClickDone = (id) => {
        dispatch({
            type: 'todo/done',
            payload: id
        })
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