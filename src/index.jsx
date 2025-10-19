import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { Application } from "./components/application/application";
import { store } from "./store";

const container = document.getElementById("root");
const reactRoot = createRoot(container);

reactRoot.render(
  <Provider store={store}>
    <Application />
  </Provider>,
);
