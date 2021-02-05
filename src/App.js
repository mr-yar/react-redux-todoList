import React from 'react';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SortIcon from '@material-ui/icons/Sort';


import './styles/main.sass';

function App() {
  return (
    <div className="container">
      <h1 className="title">To do List</h1>
      <h2 className="subtitle">
        Вы можете создавать задачи, выделять важное и сортировать по
        параметрам или вручную
      </h2>
      <ul className="list" />
      <label htmlFor="list-checkbox" className="list-toggle">
        <span className="list-toggle__text">
          Переместить выполненные задачи вниз?
        </span>
        <Switch
          color="primary"
          name="checkedB"
          inputProps={{'aria-label': 'primary checkbox'}}
        />
        {/*<input*/}
        {/*  type="checkbox"*/}
        {/*  name="list-checkbox"*/}
        {/*  className="list-toggle__checkbox"*/}
        {/*/>*/}
        {/*/!* eslint-disable-next-line jsx-a11y/label-has-associated-control *!/*/}
        {/*<label*/}
        {/*  htmlFor="list-checkbox"*/}
        {/*  className="list-toggle__label"*/}
        {/*/>*/}
      </label>
      <div className="adding">
        <input
          type="text"
          className="input"
          placeholder="Введите задачу"
        />
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>

      <div className="nav">
        <IconButton>
          <DeleteForeverIcon />
        </IconButton>
        <IconButton>
          <SortIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
