import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom'
import Login from './routes/login';
import { CredentialsContext } from './components/CredentialsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ToRender = () => {
  const [storedCredentials, setStoredCredentials] = useState(null)
  return(
    <React.StrictMode>
      <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </CredentialsContext.Provider>
    </React.StrictMode>
  )
}
root.render(
  <ToRender/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
