import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from '../navigation/navigation';
import { About } from '../about/about';
import { Todo } from '../todo/todo';
import { Contacts } from '../contacts/contacts';

import styles from './application.module.css';

const Application = () => {
    return (
        <Router>
            <div className={styles.wrap}>
                <Navigation />
                <Switch>
                    <Route path='/' exact>
                        <About />
                    </Route>
                    <Route path='/todo'>
                        <Todo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export { Application };