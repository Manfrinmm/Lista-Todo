import { createStore } from "redux";

import reducers from "./reducers";

//dentro do createStore, vai os reducers, quem armazena e altera o estado do Redux
const store = createStore(reducers);

export default store;
