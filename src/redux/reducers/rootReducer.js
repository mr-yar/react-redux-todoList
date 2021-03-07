import {combineReducers} from 'redux';

import {taskReducer} from './taskReducer';
import {inputReducer} from './inputReducer';



export const rootReducer = combineReducers({
  taskReducer,
  inputReducer,
});
