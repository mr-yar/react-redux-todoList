import React from 'react';
import {useDispatch} from 'react-redux';
import {
  removeElemAction,
  checkboxHandler,
} from '../redux/actions';
import {Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


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


  function classNameChecked(classes) {
    return task.done ? `${classes} checked` : classes;
  }


  return (
    <li className="list-elem" data-date={task.date}>
      <span className={classNameChecked('list-elem__text')}>
        {task.title}
      </span>
      {newListElemDate()}
      <div className="elem-nav">
        <Checkbox
          className="icon checkbox-icon"
          checked={task.done}
          onChange={() => dispatch(checkboxHandler(task.id))}
        />

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
