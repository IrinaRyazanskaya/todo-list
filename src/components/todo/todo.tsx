import { useDispatch, useSelector } from "react-redux";
import type { DropResult } from "@hello-pangea/dnd";

import type { TodoFilter, TodoItem, TodoSort } from "../../store/todo";
import type { AppDispatch, RootState } from "../../store";
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
    dispatch({
      type: "todo/add",
      payload: value,
    });
  };

  const onClickDelete = (id: number): void => {
    dispatch({
      type: "todo/delete",
      payload: id,
    });
  };

  const onClickDone = (id: number): void => {
    dispatch({
      type: "todo/done",
      payload: id,
    });
  };

  const onClickFilterAll = (): void => {
    dispatch({
      type: "todo/filter",
      payload: "all",
    });
  };

  const onClickFilterActive = (): void => {
    dispatch({
      type: "todo/filter",
      payload: "active",
    });
  };

  const onClickFilterDone = (): void => {
    dispatch({
      type: "todo/filter",
      payload: "done",
    });
  };

  const onClickSort = (): void => {
    if (currentSort === "normal") {
      dispatch({
        type: "todo/sort",
        payload: "reverse",
      });
    } else if (currentSort === "reverse") {
      dispatch({
        type: "todo/sort",
        payload: "normal",
      });
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

    dispatch({
      type: "todo/reorder",
      payload: {
        source: sourceItem.optionId,
        destination: destinationItem.optionId,
      },
    });
  };

  const onChangeItem = (id: number, value: string): void => {
    dispatch({
      type: "todo/change",
      payload: {
        id,
        value,
      },
    });
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
