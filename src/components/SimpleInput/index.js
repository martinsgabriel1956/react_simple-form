import { toast, Toaster } from "react-hot-toast";

import { useInput } from '../../hooks/useInput';
import { Button } from "../UI/Button";

export function SimpleInput() {
  const { 
    value: name, 
    isValid: nameIsValid,
    hasError: nameInputHasError, 
    handleValueInputBlur: handleNameInputBlur, 
    handleValueInputChange: handleNameInputChange,
    reset: resetNameInput
  } = useInput(
    value => value.trim() !== '',
  );
  
  const { 
    value: email, 
    isValid: emailIsValid,
    hasError: emailInputHasError, 
    handleValueInputBlur: handleEmailInputBlur, 
    handleValueInputChange: handleEmailInputChange,
    reset: resetEmailInput
  } = useInput(
    value => value.trim().includes("@"),
  );

  let formIsValid = false;

  if(nameIsValid && emailIsValid) formIsValid = true;

  function handleFormSubmission(e) {
    e.preventDefault();

    if (!nameIsValid && !emailIsValid) {
      toast.error("Preencha todos os campos!");
      return;
    }

    toast.success('Formulário preenchido com sucesso!')

    resetNameInput();
    resetEmailInput();
  }

  return (
    <>
      <Toaster /> 
      <form onSubmit={handleFormSubmission}>
        <div className={`${nameInputHasError ? 'form-control invalid' : 'form-control'}`}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={handleNameInputChange}
            blur={handleNameInputBlur}
            value={name}
          />
        </div>
        {nameInputHasError &&  <Toaster />}
        <div className={`${emailInputHasError ? 'form-control invalid' : 'form-control'}`}>
          <label htmlFor="name">Your Email</label>
          <input
            type="email"
            id="email"
            onChange={handleEmailInputChange}
            blur={handleEmailInputBlur}
            value={email}
          />
        </div>
        {emailInputHasError &&  <Toaster />}
        <div className="form-actions">
          <Button disabled={!formIsValid}>Submit</Button>
        </div>
      </form>
    </>
  );
}
