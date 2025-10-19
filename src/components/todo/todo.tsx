import { useDispatch, useSelector } from "react-redux";
import type { DropResult } from "@hello-pangea/dnd";

import type { TodoFilter, TodoItem, TodoSort } from "../../store/todo";
import type { AppDispatch, RootState } from "../../store";
import { todoActions } from "../../store/todo";
import { InputItem } from "../input-item/input-item";
import { ItemList } from "../item-list/item-list";
import { Divider } from "../divider/divider";
import { Filters } from "../filters/filters";

import styles from "./todo.module.css";
import iconEmptySrc from "./icon-empty.png";
import iconSortSrc from "./sort-icon.svg";
import "../../assets/fonts.css";

const Todo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector<RootState, TodoItem[]>((state) => {
    const { items, filter, sort } = state.todo;
    let itemsToShow = items;

    if (filter === "active") {
      itemsToShow = itemsToShow.filter((item) => !item.isDone);
    } else if (filter === "done") {
      itemsToShow = itemsToShow.filter((item) => item.isDone);
    }

    if (sort === "reverse") {
      itemsToShow = itemsToShow.slice().reverse();
    }

    return itemsToShow;
  });

  const itemsCount = useSelector<RootState, TodoItem[]>((state) => state.todo.items);
  const currentFilter = useSelector<RootState, TodoFilter>((state) => state.todo.filter);
  const currentSort = useSelector<RootState, TodoSort>((state) => state.todo.sort);

  const onClickAdd = (value: string): void => {
    dispatch(todoActions.addItem(value));
  };

  const onClickDelete = (id: number): void => {
    dispatch(todoActions.deleteItem(id));
  };

  const onClickDone = (id: number): void => {
    dispatch(todoActions.toggleDone(id));
  };

  const onClickFilterAll = (): void => {
    dispatch(todoActions.setFilter("all"));
  };

  const onClickFilterActive = (): void => {
    dispatch(todoActions.setFilter("active"));
  };

  const onClickFilterDone = (): void => {
    dispatch(todoActions.setFilter("done"));
  };

  const onClickSort = (): void => {
    if (currentSort === "normal") {
      dispatch(todoActions.setSort("reverse"));
    } else if (currentSort === "reverse") {
      dispatch(todoActions.setSort("normal"));
    }
  };

  const handleOnDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    const sourceItem = items[source.index];
    const destinationItem = items[destination.index];

    if (!sourceItem || !destinationItem) {
      return;
    }

    dispatch(
      todoActions.reorderItems({
        source: sourceItem.optionId,
        destination: destinationItem.optionId,
      }),
    );
  };

  const onChangeItem = (id: number, value: string): void => {
    dispatch(
      todoActions.changeItem({
        id,
        value,
      }),
    );
  };

  return (
    <article className={styles.screen}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <button className={styles.sort} onClick={() => onClickSort()}>
            Сортировать
            <img className={styles.sortIcon} src={iconSortSrc} alt="Стрелки вверх и вниз" />
          </button>
          <Filters
            countInProgress={itemsCount.filter((item) => !item.isDone).length}
            countIsDone={itemsCount.filter((item) => item.isDone).length}
            onClickFilterAll={onClickFilterAll}
            onClickFilterActive={onClickFilterActive}
            onClickFilterDone={onClickFilterDone}
            currentFilter={currentFilter}
          />
        </header>
        <div className={styles.todo}>
          <InputItem onClickAdd={onClickAdd} />
          {itemsCount.length === 0 ? (
            <div className={styles.emptyWrap}>
              <img src={iconEmptySrc} alt="Девушка записывает дела" className={styles.emptyImage} />
              <p className={styles.emptyText}>Вы ещё не добавили ни одной задачи</p>
              <p className={styles.emptySubText}>Сделайте это прямо сейчас!</p>
            </div>
          ) : (
            <ItemList
              items={items}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
              onDragEnd={handleOnDragEnd}
              onChangeItem={onChangeItem}
            />
          )}
        </div>
        <Divider />
      </div>
    </article>
  );
};

export { Todo };
