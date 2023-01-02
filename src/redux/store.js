import { createStore } from 'redux';
import roootReducers from './reducer/rootReducers';

const store = createStore(roootReducers, undefined);

export default store;
