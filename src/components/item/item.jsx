import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import classnames from 'classnames';
import iconDeleteSrc from './delete-icon.svg';

import styles from './item.module.css';

const Item = ({
    value,
    isDone,
    optionId,
    index,
    onClickDone,
    onClickDelete,
    onChangeItem,
}) => {
    const [toggle, setToggle] = useState(true);
    const [internalValue, setValue] = useState(value);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const completeInputChange = (event) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            setToggle(true);
            event.preventDefault();
            event.stopPropagation();
            onChangeItem(optionId, internalValue);
        }
    };

    const handleInputBlur = () => {
        setToggle(true);
        onChangeItem(optionId, internalValue);
    };

    return (
        <Draggable draggableId={optionId.toString()} index={index}>
            {(provided) => (
                <li
                    className={styles.item}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <input
                        className={styles.checkbox}
                        id={optionId}
                        type="checkbox"
                        name="checkbox"
                        checked={isDone}
                        onChange={() => onClickDone(optionId)}
                    />
                    <label className={styles.circle} htmlFor={optionId}></label>
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
                    <button
                        className={styles.delete}
                        onClick={() => onClickDelete(optionId)}
                    >
                        <img src={iconDeleteSrc} alt="Мусорная корзина" />
                    </button>
                </li>
            )}
        </Draggable>
    );
};

export { Item };
