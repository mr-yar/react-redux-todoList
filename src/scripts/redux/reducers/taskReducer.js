const initialState = {
  tasks: [],
  sortedByCompletedTasks: [],
  uuid: 0,
};
export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ELEM_ACTION':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        uuid: state.uuid + 1,
      };

    case 'REMOVE_ELEM_ACTION':
      return {
        ...state,
        tasks: state.tasks.filter((elem) => elem !== action.payload),
      };

    case 'CLEAR_LIST_ACTION':
      return {...state, tasks: [], uuid: 0};

    case 'SWITCH_HANDLER':
      switch (action.payload) {
        case false:
          return {
            ...state,
            tasks: [
              ...state.tasks.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
              ),
            ],
          };

        case true:
          return {
            ...state,
            tasks: [
              ...state.tasks.filter((elem) => elem.done === false),
              ...state.tasks.filter((elem) => elem.done === true),
            ],
          };

        default:
          return state;
      }
    case 'CHECKBOX_HANDLER':
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          return item.id === action.payload
            ? {...item, done: !item.done}
            : item;
        }),
      };
    default:
      return state;
  }
}
