import { useState } from "react";

import { toast, Toaster } from "react-hot-toast";

import { Button } from "../UI/Button";

export function SimpleInput() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  
  const nameIsValid = name.trim() !== '';
  const nameInputIsValid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if(nameIsValid) formIsValid = true;
  
  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleNameInputBlur(e) {
    setNameTouched(true);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      toast.error("Preencha todos os campos!");
      return;
    }

    toast.success('Formulário preenchido com sucesso!')

    setName("");
    setNameTouched(false);
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
        <div className="form-actions">
          <Button disabled={!formIsValid}>Submit</Button>
        </div>
      </form>
    </>
  );
}
