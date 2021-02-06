const initialState = {
  tasks: [
    {id: 1, title: 'Number 1', done: false},
    {
      id: 2,
      title: 'Number 2',
      date: new Date(2019, 1, 1),
      done: false,
    },
    {id: 3, title: 'Number 3', done: false},
  ],
};
export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ELEM_ACTION':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_ELEM_ACTION':
      return {
        ...state,
        tasks: state.tasks.filter(() => {
          return !action.payload;
        }),
      };
    default:
      return state;
  }
}
