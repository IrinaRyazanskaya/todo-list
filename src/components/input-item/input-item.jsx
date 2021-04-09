import { connect } from 'react-redux';
import { Component } from 'react';
import classnames from 'classnames';
import { AddButton } from '../add-button/add-button';

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

        for (const item of this.props.allItems) {
            if (item.value === this.state.inputValue) {
                this.setState({ error: 'Такая задача уже существует' });
                return;
            }
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
        console.log(this.props);

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

function mapStateToProps(state) {
    return {
        allItems: state.todo.items,
    };
}

const EnhancedInputItem = connect(mapStateToProps)(InputItem);

export { EnhancedInputItem as InputItem };