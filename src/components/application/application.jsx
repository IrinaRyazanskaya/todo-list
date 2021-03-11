import { Component } from 'react';
import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Divider } from '../divider/divider';
import { Footer } from '../footer/footer';
import styles from './application.module.css';
import '../../assets/fonts.css';

class Application extends Component {
    state = {
        items: [
            {
                value: 'Сделать уборку',
                isDone: true,
                optionId: 1
            },
            {
                value: 'Сходить в магазин',
                isDone: false,
                optionId: 2
            },
            {
                value: 'Приготовить ужин',
                isDone: false,
                optionId: 3
            }
        ],
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };

            if (item.optionId === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState({ items: newItemList });
    };

    onClickDelete = id => {
        const newItemList = this.state.items.filter(item => {
            return item.optionId !== id;
        });

        this.setState({ items: newItemList });
    };

    onClickAdd = value => this.setState(state => ({
        items: [
            ...state.items,
            {
                value,
                isDone: false,
                optionId: state.items.length + 1
            }
        ]
    }));

    render() {
        return (
            <div className={styles.screen}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}>todo list</h1>
                    <div className={styles.todo}>
                        <InputItem onClickAdd={this.onClickAdd} />
                        <ItemList 
                            items={this.state.items}
                            onClickDone={this.onClickDone}
                            onClickDelete={this.onClickDelete}
                        />
                    </div>
                    <Divider />
                    <Footer count={this.state.items.length} />
                </div>
            </div>
        );
    }
};

export { Application };