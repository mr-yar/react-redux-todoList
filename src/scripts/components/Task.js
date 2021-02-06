import React from 'react';

import {Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {removeElemAction} from '../redux/actions/actions';
import {useDispatch} from 'react-redux';

export function Task({task}) {
  const dispatch = useDispatch();

  const newListElemDate = () => {
    const newDate = task.date ? new Date(task.date) : new Date();

    function date() {
      const hours =
        newDate.getHours() < 10
          ? '0' + newDate.getHours()
          : newDate.getHours();

      const minutes =
        newDate.getMinutes() < 10
          ? '0' + newDate.getMinutes()
          : newDate.getMinutes();

      const day = newDate.getDate();

      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apl',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const month = months[newDate.getMonth()];

      return `${hours}:${minutes}, ${day} ${month} ${newDate.getFullYear()}`;
    }
    return <span className="list-elem__date">{date()}</span>;
  };

  return (
    <li className="list-elem" data-date={task.date}>
      <span className="list-elem__text" data-checked={task.done}>
        {task.title}
      </span>
      {newListElemDate()}
      <div className="elem-nav">
        <IconButton
          className="button checkbox-button"
          data-checked="false"
          onClick={() => {
            task.done = !task.done;
          }}
        >
          <Checkbox className="icon checkbox-icon" />
        </IconButton>
        <IconButton
          className="button"
          onClick={() => {
            dispatch(removeElemAction(task));
          }}
        >
          <DeleteIcon className="icon delete-icon" />
        </IconButton>
      </div>
    </li>
  );
}
