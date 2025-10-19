import classnames from "classnames";
import { Draggable } from "@hello-pangea/dnd";
import type { DraggableProvided } from "@hello-pangea/dnd";
import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from "react";

import styles from "./item.module.css";
import iconDeleteSrc from "./delete-icon.svg";

type ItemProps = {
  value: string;
  isDone: boolean;
  optionId: number;
  index: number;
  onClickDone: (id: number) => void;
  onClickDelete: (id: number) => void;
  onChangeItem: (id: number, value: string) => void;
};

const Item = ({
  value,
  isDone,
  optionId,
  index,
  onClickDone,
  onClickDelete,
  onChangeItem,
}: ItemProps) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [internalValue, setValue] = useState<string>(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const completeInputChange = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" || event.key === "Escape") {
      setToggle(true);
      event.preventDefault();
      event.stopPropagation();
      onChangeItem(optionId, internalValue);
    }
  };

  const handleInputBlur = (_event: FocusEvent<HTMLInputElement>): void => {
    setToggle(true);
    onChangeItem(optionId, internalValue);
  };

  return (
    <Draggable draggableId={optionId.toString()} index={index}>
      {(provided: DraggableProvided) => (
        <li
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            className={styles.checkbox}
            id={optionId.toString()}
            type="checkbox"
            name="checkbox"
            checked={isDone}
            onChange={() => onClickDone(optionId)}
          />
          <label className={styles.circle} htmlFor={optionId.toString()}></label>
          {toggle ? (
            <span
              className={classnames({
                [styles.text]: true,
                [styles.done]: isDone,
              })}
              onDoubleClick={() => setToggle(false)}
            >
              {internalValue}
            </span>
          ) : (
            <input
              className={styles.changeText}
              type="text"
              value={internalValue}
              autoFocus={true}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              onKeyDown={completeInputChange}
            />
          )}
          <button className={styles.delete} onClick={() => onClickDelete(optionId)}>
            <img src={iconDeleteSrc} alt="Мусорная корзина" />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export { Item };
