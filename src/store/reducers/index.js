import { createStore } from 'redux';
import rootReducer from './reducers';
import constants from './constants';
const store = createStore(rootReducer);

export default store;
