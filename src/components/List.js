import React from 'react';

import {useSelector} from 'react-redux';

import {Task} from './Task';

export function List() {
  const {tasks} = useSelector((store) => store.taskReducer);
  return (
    <ul className="list">
      {tasks.map((task) => {
        if (!task) return;
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}
