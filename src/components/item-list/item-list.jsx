import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Item } from '../item/item';

import styles from './item-list.module.css';

const ItemList = ({
    items,
    onClickDone,
    onClickDelete,
    onDragEnd,
    onChangeItem,
}) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="itemsId">
                {(provided) => (
                    <ul
                        className={styles.list}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
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
