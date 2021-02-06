export function addElemAction(elem) {
  return {type: 'ADD_ELEM_ACTION', payload: elem};
}
export function removeElemAction(elem) {
  return {type: 'REMOVE_ELEM_ACTION', payload: elem};
}
export function clearListAction() {
  return {type: 'CLEAR_LIST_ACTION'};
}

export function inputHandler(value) {
  return {type: 'INPUT_HANDLER', payload: value};
}
