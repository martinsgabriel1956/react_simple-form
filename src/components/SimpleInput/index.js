import { useRef, useState } from "react";

import { toast, Toaster } from "react-hot-toast";

import { Button } from "../UI/Button";

export function SimpleInput() {
  const inputNameRef = useRef();
  const [name, setName] = useState("");

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    
    if (name.trim() === "") {
      toast.error("Preencha todos os campos!");
      return;
    }

    const value = inputNameRef.current.value;
    console.log(value);

    setName("");
  }

  return (
    <>
      <Toaster />
      <form onSubmit={handleFormSubmission}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            ref={inputNameRef}
            type="text"
            id="name"
            onChange={handleNameInputChange}
            value={name}
          />
        </div>
        <div className="form-actions">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
}
