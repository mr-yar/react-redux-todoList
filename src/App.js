
import React from 'react';
import './App.css';

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
        <input
          type="checkbox"
          name="list-checkbox"
          className="list-toggle__checkbox"
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="list-checkbox"
          className="list-toggle__label"
        />
      </label>
      <div className="adding">
        <input
          type="text"
          className="input"
          placeholder="Введите задачу"
        />
        <button className="add-elem-btn">
          <span className="material-icons"> add </span>
        </button>
      </div>

      <div className="nav">
        <button className="sort-elem-btn">
          <span className="material-icons"> filter_list </span>
        </button>
        <button className="remove-all-btn">
          <span className="material-icons"> delete_sweep </span>
        </button>
      </div>
    </div>
  );
}

export default App;
