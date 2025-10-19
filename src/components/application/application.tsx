import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "../navigation/navigation";
import { About } from "../about/about";
import { Todo } from "../todo/todo";

import styles from "./application.module.css";

const Application = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={styles.wrap}>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
};

export { Application };
