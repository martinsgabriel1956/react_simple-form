import { toast, Toaster } from "react-hot-toast";
import { ControlGroup } from "./styles";

import { Button } from "../UI/Button";

import { useInput } from "../../hooks/useInput.js";

export function BasicForm() {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    handleValueInputBlur: handleNameInputBlur,
    handleValueInputChange: handleNameInputChange,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    handleValueInputBlur: handleLastNameInputBlur,
    handleValueInputChange: handleLastNameInputChange,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    handleValueInputBlur: handleEmailInputBlur,
    handleValueInputChange: handleEmailInputChange,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true}
  ;

  function handleFormSubmission(e) {
    e.preventDefault();

    if (!nameIsValid && !lastNameIsValid && !emailIsValid) {
      toast.error("Preencha todos os campos!");
      return;
    }

    toast.success("Formulário preenchido com sucesso!");

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  return (
    <>
      <Toaster /> 
      <form onSubmit={handleFormSubmission}>
        {nameInputHasError && <Toaster />}
          <div
            className={`${
              nameInputHasError ? "form-control invalid" : "form-control"
            }`}
          >
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              onChange={handleNameInputChange}
              blur={handleNameInputBlur}
              value={name}
            />
          </div>
          {lastNameInputHasError && <Toaster />}
          <div className={`${
            lastNameInputHasError ? "form-control invalid" : "form-control"
          }`}>
            <label htmlFor="name">Last Name</label>
            <input 
              type="text" 
              id="name" 
              onChange={handleLastNameInputChange}
              blur={handleLastNameInputBlur}
              value={lastName}
              />
          </div>
          {emailInputHasError && <Toaster />}
          <div className={`${emailInputHasError ? 'form-control invalid' : 'form-control'}`}>
            <label htmlFor="name">E-Mail Address</label>
            <input type="email"
              id="email"
              onChange={handleEmailInputChange}
              blur={handleEmailInputBlur}
              value={email} />
          </div>
          <div className="form-actions">
            <Button disabled={!formIsValid} >Submit</Button>
          </div>
      </form>
    </>
  );
}
