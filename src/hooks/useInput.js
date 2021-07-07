import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
};

function inputStateReducer(state, action) {
  if(action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if(action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if(action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  
  
  return {
    value: '',
    isTouched: false
  };
}

export function useInput(validateValue) {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;


  function handleValueInputChange(e) {
    dispatch({ type: 'INPUT', value: e.target.value })
  }
  
  function handleValueInputBlur(e) {
    dispatch({ type: 'BLUR'})
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    handleValueInputChange,
    handleValueInputBlur,
    reset
  };
}