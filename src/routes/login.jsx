import React, {useContext, useEffect} from 'react'
import {
    useNavigate
} from 'react-router-dom';
import { CredentialsContext } from '../components/CredentialsContext';

export default function Login() {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (storedCredentials) {
            return navigate('/')
        }
    }, []);

    return (
        <div>
            <h1>Login Screen</h1>
        </div>
    )
}