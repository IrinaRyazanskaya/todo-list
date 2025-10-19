import classnames from "classnames";
import { connect } from "react-redux";
import { Component, ChangeEvent } from "react";

import type { RootState } from "../../store";
import type { TodoItem } from "../../store/todo";
import { AddButton } from "../add-button/add-button";

import styles from "./input-item.module.css";

type OwnProps = {
  onClickAdd: (value: string) => void;
};

type StateProps = {
  allItems: TodoItem[];
};

type Props = OwnProps & StateProps;

type State = {
  inputValue: string;
  error?: string;
};

class InputItem extends Component<Props, State> {
  state: State = {
    inputValue: "",
    error: undefined,
  };

  onAddButtonClick = (): void => {
    if (this.state.inputValue === "") {
      this.setState({ error: "Пожалуйста, введите текст" });
      return;
    }

    for (const item of this.props.allItems) {
      if (item.value === this.state.inputValue) {
        this.setState({ error: "Такая задача уже существует" });
        return;
      }
    }

    const { onClickAdd } = this.props;
    const { inputValue } = this.state;

    onClickAdd(inputValue);

    this.setState({
      inputValue: "",
    });
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: event.target.value,
      error: undefined,
    });
  };

  render() {
    const { error, inputValue } = this.state;

    return (
      <div className={styles.wrap}>
        {error && <div className={styles.error}>{error}</div>}
        <input
          className={classnames({
            [styles.field]: true,
            [styles.fieldError]: Boolean(error),
          })}
          type="text"
          id="input-field"
          name="text"
          placeholder="Добавить задание"
          value={inputValue}
          onChange={this.onInputChange}
        />
        <AddButton onClickAdd={this.onAddButtonClick} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  allItems: state.todo.items,
});

const EnhancedInputItem = connect<StateProps, Record<string, never>, OwnProps, RootState>(
  mapStateToProps,
)(InputItem);

export { EnhancedInputItem as InputItem };
