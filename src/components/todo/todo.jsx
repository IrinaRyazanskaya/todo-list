import { useSelector, useDispatch } from 'react-redux';

import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Divider } from '../divider/divider';
import { Filters } from '../filters/filters';
import iconEmptySrc from './icon-empty.png';
import iconSortSrc from './sort-icon.svg';
import styles from './todo.module.css';
import '../../assets/fonts.css';

const Todo = () => {
    const items = useSelector((state) => {
        const { items, filter, sort } = state.todo;
        let itemsToShow = items;

        if (filter === 'active') {
            itemsToShow = itemsToShow.filter((item) => (!item.isDone));
        } else if (filter === 'done') {
            itemsToShow = itemsToShow.filter((item) => (item.isDone));
        }

        if (sort === 'reverse') {
            itemsToShow = itemsToShow.slice().reverse();
        }

        return itemsToShow;
    });

    const itemsСount = useSelector((state) => {
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

    const currentFilter = useSelector((state) => {
        return state.todo.filter;
    });

    const onClickFilterAll = () => {
        dispatch({
            type: 'todo/filter',
            payload: 'all'
        })
    };

    const onClickFilterActive = () => {
        dispatch({
            type: 'todo/filter',
            payload: 'active'
        })
    };

    const onClickFilterDone = () => {
        dispatch({
            type: 'todo/filter',
            payload: 'done'
        })
    };

    const currentSort = useSelector((state) => {
        return state.todo.sort;
    });

    const onClickSort = () => {
        if (currentSort === 'normal') {
            dispatch({
                type: 'todo/sort',
                payload: 'reverse'
            })
        } else if (currentSort === 'reverse') {
            dispatch({
                type: 'todo/sort',
                payload: 'normal'
            })
        }
    }

    return (
        <article className={styles.screen}>
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <button
                        className={styles.sort}
                        onClick={() => onClickSort()}
                    >
                        Сортировать
                        <img
                            className={styles.sortIcon}
                            src={iconSortSrc}
                            alt="Стрелки вверх и вниз"
                        />
                    </button>
                    <Filters
                        countInProgress={itemsСount.filter(item => !item.isDone).length}
                        countIsDone={itemsСount.filter(item => item.isDone).length}
                        onClickFilterAll={onClickFilterAll}
                        onClickFilterActive={onClickFilterActive}
                        onClickFilterDone={onClickFilterDone}
                        currentFilter={currentFilter}
                    />
                </header>
                <div className={styles.todo}>
                    <InputItem onClickAdd={onClickAdd} />
                    {(itemsСount.length === 0)
                        ? <div className={styles.emptyWrap}>
                            <img
                                src={iconEmptySrc}
                                alt=''
                                className={styles.emptyImage}
                            />
                            <p className={styles.emptyText}>
                                Вы ещё не добавили ни одной задачи
                            </p>
                            <p className={styles.emptySubText}>
                                Сделайте это прямо сейчас!
                            </p>
                        </div>
                        : <ItemList
                            items={items}
                            onClickDone={onClickDone}
                            onClickDelete={onClickDelete}
                        />}
                </div>
                <Divider />
            </div>
        </article>
    );
};

export { Todo };