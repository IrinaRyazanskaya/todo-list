import { Component } from 'react';
import classnames from 'classnames';
import iconDeleteSrc from './delete-icon.svg';
import PropTypes from 'prop-types';

import styles from './item.module.css';

class Item extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const { value, isDone, optionId, onClickDone, onClickDelete } = this.props;

        return (
            <li className={styles.item}>
                <input
                    className={styles.checkbox}
                    id={optionId}
                    type="checkbox"
                    name="checkbox"
                    checked={isDone}
                    onChange={() => onClickDone(optionId)}
                />
                <label className={styles.circle} htmlFor={optionId}></label>
                <span
                    className={
                        classnames({
                            [styles.text]: true,
                            [styles.done]: isDone
                        })
                    }
                >
                    {value}
                </span>
                <button
                    className={styles.delete}
                    onClick={() => onClickDelete(optionId)}
                >
                    <img
                        src={iconDeleteSrc}
                        alt="Мусорная корзина"
                    />
                </button>
            </li>
        );
    }
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    optionId: PropTypes.number.isRequired
};

export { Item };