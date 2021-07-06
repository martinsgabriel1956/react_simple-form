import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans JP', sans-serif;
  }
  
  body {
    margin: 0;
    background-color: #3f3f3f;
  }

  .form-control {
    margin-bottom: 1rem;
    
    input,
    label {
      display: block;
    }
    
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    input,
    select {
      font: inherit;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
    }
    
    input {
      &:focus {
        outline: none;
        border-color: #240370;
        background-color: #e0d4fd;
      }
    }
  }

  .form-actions {
    text-align: right;

    button {
      margin-left: 1rem;
    }
  }

  .invalid {
    input {
      border: 1px solid #b40e0e;
      background-color: #fddddd;

      &:hover {
        border-color: #ff8800;
        background-color: #fbe8d2;
      }
    }
  }

  .error-text {
    color: #b40e0e;
  }
`;
