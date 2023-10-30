import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap/esm';
import { BiLoader } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import sinupImg from "../../assets/images/signup.jpg";
import { signup } from '../../redux/actions/auth.actions';
import axiosInstance from '../../utils/axiosInstance';
import './index.css';

const SignUp = () => {
    const [phoneNum, setPhoneNum] = useState('');
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const [isOtpReq, setOtpReq] = useState(false);
    const [isOtpReqVerified, setOtpReqVerified] = useState(false);

    const [password, setPassword] = useState('');
    const session = useSelector((state) => state.session);
    const {
        isSigningUp,
        isSigningUpSuccess,
        isSigningUpFail,
    } = session;

    const dispatch = useDispatch();
    // const history = useHistory();

    useEffect(() => {
        if (isSigningUpSuccess) {
            alert("Congratulations! Your account has been successfully created. Welcome to our community.")
        }
        else if (isSigningUpFail) {
            alert("Signup failed. Please try again later.");
        }
    }, [isSigningUpFail, isSigningUpSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(phoneNum, password));
    }

    const getOtp = async () => {
        if (phoneNum && phoneNum.length == 10) {
            await axiosInstance.get(`user/api/getOtp?mobile=${phoneNum}&deviceType=Web&newUser=Y`);
            setOtpReq(true);
        }
        else {
            setErrorPhone('Please enter the valid phone number.');
        }
    };

    const verifyOtp = async () => {
        if (otp && otp.length == 6) {
            const { data } = await axiosInstance.get(`user/api/verifyOtp?mobile=${phoneNum}&otp=${otp}`);
            console.log('data', data.data);
            if (data.statusCode === 1) {
                setOtpReqVerified(true);
                setOtpError('');
            } else {
                setOtpError(data.data);
            }
        }
        else {
            setOtpError('Please enter the valid OTP.');
        }
    };

    const handleMobileNumber = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        errorPhone && setErrorPhone('');
        if (newValue.length < 11) {
            setPhoneNum(newValue);
        }
    };
    const handleOTP = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        otpError && setOtpError('');
        if (newValue.length < 7) {
            setOtp(newValue);
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
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            onChange={handleMobileNumber}
                                            value={phoneNum}
                                            id="phone"
                                            type="phone"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="floatingInputCustom">Phone number</label>
                                    </Form.Floating>
                                    {
                                        errorPhone && <p className='error'>{errorPhone}</p>
                                    }
                                    {
                                        isOtpReq ?
                                            isOtpReqVerified ?
                                                <>
                                                    <Form.Floating className="mb-3">
                                                        <Form.Control
                                                            onChange={handlePass}
                                                            value={password}
                                                            id="pass"
                                                            type="password"
                                                            placeholder="New Password"
                                                        />
                                                        <label htmlFor="floatingInputCustom">Password</label>
                                                    </Form.Floating>
                                                    <span className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
                                                        Sign Up
                                                        {
                                                            isSigningUp && <Spinner
                                                                as="span"
                                                                animation="border"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                                variant="light"
                                                            />
                                                        }
                                                    </span>
                                                </> :
                                                <>
                                                    <Form.Floating className="mb-3">
                                                        <Form.Control
                                                            onChange={handleOTP}
                                                            value={otp}
                                                            id="otp"
                                                            type="number"
                                                            placeholder="6 digit OTP"
                                                        />
                                                        <label htmlFor="floatingInputCustom">OTP</label>
                                                    </Form.Floating>
                                                    {otpError && <p className='error'>{otpError}</p>}
                                                    <span className="btn btn-primary btn-block mb-4" onClick={verifyOtp}>
                                                        Verify OTP
                                                    </span>
                                                </>
                                            : <div className='flex flex-end'>
                                                <span className="btn btn-primary btn-block mb-4" onClick={getOtp}>
                                                    Get OTP
                                                </span>
                                            </div>
                                    }

                                </form>
                                <div>
                                    <Link to="/login" className="link" style={{ fontSize: '1rem' }}>Already have an account? <b>Login</b></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img src={sinupImg} className="w-100 rounded-4 shadow-4" alt="PlayersVictory" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;