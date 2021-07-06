import { useState } from "react";

import { useInput } from '../../hooks/useInput';

import { toast, Toaster } from "react-hot-toast";

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

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  
  const emailIsValid = email.trim().includes("@");
  const emailInputIsValid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if(nameIsValid && emailIsValid) formIsValid = true;
  
  
  function handleEmailInputChange (e) {
    setEmail(e.target.value);
  }

  function handleEmailInputBlur (e) {
    setEmailTouched(true);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    setEmailTouched(true);

    if (!nameIsValid && !emailIsValid) {
      toast.error("Preencha todos os campos!");
      return;
    }

    toast.success('Formulário preenchido com sucesso!')

    resetNameInput();
    setEmail("");
    setEmailTouched(false);
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
        <div className={`${emailInputIsValid ? 'form-control invalid' : 'form-control'}`}>
          <label htmlFor="name">Your Email</label>
          <input
            type="email"
            id="email"
            onChange={handleEmailInputChange}
            blur={handleEmailInputBlur}
            value={email}
          />
        </div>
        {emailInputIsValid &&  <Toaster />}
        <div className="form-actions">
          <Button disabled={!formIsValid}>Submit</Button>
        </div>
      </form>
    </>
  );
}
