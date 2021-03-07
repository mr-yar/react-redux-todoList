const initialState = {
  inputValue: '',
};

export function inputReducer(state = initialState, action) {
  if (action.type === 'INPUT_HANDLER') {
    return {
      ...state,
      inputValue: action.payload,
    };
  } else {
    return state;
  }
}
