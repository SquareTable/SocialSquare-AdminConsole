import React, {useEffect, useContext} from 'react';
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import { CredentialsContext } from './components/CredentialsContext';

function App() {
  let navigate = useNavigate();
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext)
  if (storedCredentials) var {name} = storedCredentials
  else var {name} = 'LOADING'

  useEffect(() => {
    if (!storedCredentials) navigate('/login')
  }, [])

  return (
    <div className="App">
      <header>
        <h1>SocialSquare Admin Console</h1>
        <Link to="/login">
          <button id="loginButton">
            Logged in as {name}
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;
