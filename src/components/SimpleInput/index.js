import { useRef, useState } from "react";

import { toast, Toaster } from "react-hot-toast";

import { Button } from "../UI/Button";

export function SimpleInput() {
  const inputNameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    
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

  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <div className={`${nameIsValid ? 'form-control' : 'form-control invalid'}`}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={inputNameRef}
            type="text"
            id="name"
            onChange={handleNameInputChange}
            value={name}
          />
        </div>
        {!nameIsValid && <Toaster />}
        <div className="form-actions">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
}
