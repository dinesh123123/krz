import { createStore } from "redux";
import reducers from "./component/redux/reducers/index";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;