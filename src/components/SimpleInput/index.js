import { useEffect, useRef, useState } from "react";

import { toast, Toaster } from "react-hot-toast";

import { Button } from "../UI/Button";

export function SimpleInput() {
  const inputNameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  useEffect(() => {
    if(nameIsValid) toast.success('Formulário preenchido com sucesso!')
  }, [nameIsValid]);

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();

    setNameTouched(true);

    if (name.trim() === "") {
      toast.error("Preencha todos os campos!");
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    const value = inputNameRef.current.value;
    console.log(value);

    setName("");
  }

  const nameInputIsValid = !nameIsValid && nameTouched;

  return (
    <>
      <Toaster /> 
      <form onSubmit={handleFormSubmission}>
        <div className={`${nameInputIsValid ? 'form-control invalid' : 'form-control'}`}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={inputNameRef}
            type="text"
            id="name"
            onChange={handleNameInputChange}
            value={name}
          />
        </div>
        {nameInputIsValid &&  <Toaster />}
        <div className="form-actions">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
}
