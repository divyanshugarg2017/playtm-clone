import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../redux/actions/auth.actions';
import './index.css';
import signinImg from '../../assets/images/signin.jpg';
import { BiLoader } from 'react-icons/bi';
import { Spinner } from 'react-bootstrap/esm';

const Login = () => {
    const [phoneNum, setPhoneNum] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const [password, setPassword] = useState('');
    const [errorPass, setErrorPass] = useState('');

    const session = useSelector((state) => state.session)||{};
    const {
        isSigningIn,
        error,
    } = session;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNum.length !== 10) {
            setErrorPhone('Please enter the valid phone number.');
            return;
        }
        if (!password) {
            setErrorPass('Please enter the Password.');
            return;
        }
        dispatch(signin(phoneNum, password));
    }
    const handleMobileNumber = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        errorPhone && setErrorPhone('');
        if (newValue.length < 11) {
            setPhoneNum(newValue);
        }
    };
    const handlePass = (event) => {
        const newValue = event.target.value;
        setPassword(newValue);
    };

    return (
        <section className="text-center text-lg-start">
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card cascading-right" style={{
                            background: 'hsla(0, 0%, 100%, 0.55)',
                            backdropFilter: 'blur(30px)'
                        }}>
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Login</h2>
                                {error && <p className='error'>{error}</p>}
                                <form>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            onChange={handleMobileNumber}
                                            value={phoneNum}
                                            id="phone"
                                            type="phone"
                                            placeholder="9876543210"
                                        />
                                        <label htmlFor="floatingInputCustom">Phone number</label>
                                    </Form.Floating>
                                    {
                                        errorPhone && <p className='error'>{errorPhone}</p>
                                    }
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            onChange={handlePass}
                                            value={password}
                                            id="pass"
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <label htmlFor="floatingInputCustom">Password</label>
                                    </Form.Floating>
                                    {
                                        errorPass && <p className='error'>{errorPass}</p>
                                    }
                                    <div>
                                        <span className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
                                            Sign In {isSigningIn && <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                variant="light"
                                            />}
                                        </span>
                                    </div>
                                    <div>
                                        <Link to="/signup" className="link" style={{fontSize:'1rem'}}>Don't have an account? <b>Sign up</b></Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img src={signinImg} className="w-100 rounded-4 shadow-4" alt="PlayersVictory" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;