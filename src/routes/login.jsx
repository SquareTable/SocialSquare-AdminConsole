import React, {useContext, useEffect} from 'react'
import {
    useNavigate
} from 'react-router-dom';
import { CredentialsContext } from '../components/CredentialsContext';

export default function Login() {
    const {storedCredentials} = useContext(CredentialsContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (storedCredentials) {
            return navigate('/')
        }
    }, [navigate, storedCredentials]);

    return (
        <div>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-white" style={{borderRadius: 25, backgroundColor: 'transparent'}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <div className="d-flex align-items-center justify-content-center">
                                                <img src="https://github.com/SquareTable/social-media-platform/raw/main/assets/NewLogo.png" className="img-fluid" alt="SocialSquare logo"/>
                                            </div>

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Console Login</p>

                                            <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Email</label>
                                                    <input type="email" id="form3Example3c" className="form-control" style={{backgroundColor: 'black', color: 'white'}}/>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    <input type="password" id="form3Example4c" className="form-control" style={{backgroundColor: 'black', color: 'white'}}/>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg">Login</button>
                                            </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}