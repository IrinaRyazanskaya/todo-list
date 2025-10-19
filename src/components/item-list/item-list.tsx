import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import type { DropResult, DroppableProvided } from "@hello-pangea/dnd";

import { Item } from "../item/item";
import type { TodoItem } from "../../store/todo";

import styles from "./item-list.module.css";

type ItemListProps = {
  items: TodoItem[];
  onClickDone: (id: number) => void;
  onClickDelete: (id: number) => void;
  onDragEnd: (result: DropResult) => void;
  onChangeItem: (id: number, value: string) => void;
};

const ItemList = ({
  items,
  onClickDone,
  onClickDelete,
  onDragEnd,
  onChangeItem,
}: ItemListProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="itemsId">
        {(provided: DroppableProvided) => (
          <ul className={styles.list} {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Item
                key={item.optionId}
                value={item.value}
                isDone={item.isDone}
                optionId={item.optionId}
                index={index}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
                onChangeItem={onChangeItem}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { ItemList };
