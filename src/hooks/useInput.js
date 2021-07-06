import { useState } from 'react';

export function useInput(validateValue) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); 

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;


  function handleValueInputChange(e) {
    setValue(e.target.value);
  }

  function handleValueInputBlur(e) {
    setIsTouched(true);
  }

  function reset() {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isValid: valueIsValid,
    hasError,
    handleValueInputChange,
    handleValueInputBlur,
    reset
  };
}