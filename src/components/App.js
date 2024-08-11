import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateName } from "./useReducer"; // Correct import from useReducer.js

const App = () => {
  const dispatch = useDispatch();
  const { userName, email } = useSelector((state) => state.formData); // Correctly access state

  const handleNameChange = (e) => {
    const name = e.target.value;
    dispatch(updateName(name));
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    dispatch(updateEmail(email));
  };

  return (
    <div id="main">
      <h1>User Information</h1>
      <form>
        <label>
          Name:
          <input 
            type="text" 
            onChange={handleNameChange} 
            value={userName} // Bind input value to Redux store
          />
        </label>
        <label>
          Email: 
          <input 
            type="email" 
            onChange={handleEmailChange} 
            value={email} // Bind input value to Redux store
          />
        </label>
      </form>
      <p>Current values in store:</p>
      <p className="output">Name - {userName}</p>
      <p className="output">Email - {email}</p>
    </div>
  );
};

export default App;
