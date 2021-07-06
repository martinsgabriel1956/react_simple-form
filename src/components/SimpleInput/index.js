import { useState } from "react";

import { toast, Toaster } from "react-hot-toast";

import { Button } from "../UI/Button";

export function SimpleInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  
  const nameIsValid = name.trim() !== '';
  const nameInputIsValid = !nameIsValid && nameTouched;
  
  const emailIsValid = email.trim().includes("@");
  const emailInputIsValid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if(nameIsValid && emailIsValid) formIsValid = true;
  
  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleNameInputBlur(e) {
    setNameTouched(true);
  }

  function handleEmailInputChange (e) {
    setEmail(e.target.value);
  }

  function handleEmailInputBlur (e) {
    setEmailTouched(true);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!nameIsValid && !emailIsValid) {
      toast.error("Preencha todos os campos!");
      return;
    }

    toast.success('Formulário preenchido com sucesso!')

    setName("");
    setNameTouched(false);
    setEmail("");
    setEmailTouched(false);
  }

  return (
    <>
      <Toaster /> 
      <form onSubmit={handleFormSubmission}>
        <div className={`${nameInputIsValid ? 'form-control invalid' : 'form-control'}`}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={handleNameInputChange}
            blur={handleNameInputBlur}
            value={name}
          />
        </div>
        {nameInputIsValid &&  <Toaster />}
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
