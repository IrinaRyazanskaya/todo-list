import { Component } from 'react';
import classnames from 'classnames';
import { AddButton } from '../add-button/add-button';
import PropTypes from 'prop-types';

import styles from './input-item.module.css';

class InputItem extends Component {
    state = {
        inputValue: '',
        error: undefined
    };

    onAddButtonClick = () => {
        if (this.state.inputValue === '') {
            this.setState({ error: 'Пожалуйста, введите текст' });
            return;
        }

        this.setState({
            inputValue: '',
        });

        this.props.onClickAdd(this.state.inputValue);
    }

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
            error: undefined
        });

    }

    render() {
        const showError = this.state.error;

        return (
            <div className={styles.wrap}>
                {showError && (
                    <div className={styles.error}>{showError}</div>
                )}
                <input
                    className={
                        classnames({
                            [styles.field]: true,
                            [styles.fieldError]: showError
                        })
                    }
                    type="text"
                    id="input-field"
                    name="text"
                    placeholder="Добавить задание"
                    value={this.state.inputValue}
                    onChange={this.onInputChange}
                />
                <AddButton onClickAdd={this.onAddButtonClick} />
            </div>
        );
    }
}

InputItem.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export { InputItem };