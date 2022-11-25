import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, onSubmit } from 'react'
import LoginForm from './LoginForm';

function App() {
  /*const LoginForm = ({ onSubmit }) => {
    // refs
    const usernameRef = useRef();
    const passwordRef = useRef();

    // states
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
        const formData = {
            username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
            password: passwordRef.current.value,
        };
        //onSubmit(formData); // upon submission we are calling the onSubmit function
        console.log(formData)
    };

    const handleUsernameChange = (event) => {
        setUsernameValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            username:
            <input
                ref={usernameRef}
                label="username"
                id="username"
                type="text"
                autoComplete='on'
                value={usernameValue}
                onChange={handleUsernameChange}
            />
            password:
            <input
                ref={passwordRef}
                label="password"
                id="password-input"
                type="password"
                autoComplete='on'
                value={passwordValue}
                onChange={handlePasswordChange}
            />
            <button
                id="login-button"
                type="submit"
            >
                submit
            </button>
        </form>
    )
    
  };*/

  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted thru the form
    console.log("hello");
  };

  return (
    
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
