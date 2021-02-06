import React from 'react';

import {List} from './scripts/components/List';

import {Input} from './scripts/components/Input';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SortIcon from '@material-ui/icons/Sort';

import './styles/main.sass';
import {useDispatch} from 'react-redux';
import {clearListAction} from './scripts/redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="title">{'Todo'} List</h1>

      <h2 className="subtitle">
        Вы можете создавать задачи, выделять важное и сортировать по
        параметрам или вручную
      </h2>
      <List />
      <label htmlFor="list-checkbox" className="list-toggle">
        <span className="list-toggle__text">
          Переместить выполненные задачи вниз?
        </span>
        <Switch
          className="switch"
          name="checkedB"
          inputProps={{'aria-label': 'primary checkbox'}}
        />
      </label>
      <Input />

      <div className="nav">
        <IconButton
          className="button"
          onClick={() => {
            dispatch(clearListAction());
          }}
        >
          <DeleteForeverIcon className="icon" />
        </IconButton>
        <IconButton className="button">
          <SortIcon className="icon" />
        </IconButton>
      </div>
    </div>
  );
}
export default App;
