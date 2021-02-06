import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {addElemAction, inputHandler} from '../redux/actions/actions';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

export function Input() {
  const dispatch = useDispatch();
  const {inputValue} = useSelector((store) => store.inputReducer);
  const {uuid} = useSelector((store) => store.taskReducer);

  function addElem() {
    const todo = {
      id: uuid,
      title: inputValue,
      date: new Date(),
      done: false,
    };
    dispatch(addElemAction(todo));
    dispatch(inputHandler(''));
  }

  function inputChange(event) {
    const value = event.target.value;
    dispatch(inputHandler(value));
  }

  return (
    <div className="adding">
      <input
        type="text"
        className="input"
        placeholder="Введите задачу"
        onChange={inputChange}
        value={inputValue}
      />
      <IconButton className="button" onClick={addElem}>
        <AddIcon className="icon" />
      </IconButton>
    </div>
  );
}
