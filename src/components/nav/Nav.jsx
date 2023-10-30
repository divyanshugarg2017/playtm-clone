import React, { useEffect, useState } from "react";
import "./nav.css";
import logomain from "../../assets/images/logomain.png";
import profile from "../../assets/images/profile.png";
import vector from "../../assets/images/profile-images/Vector.png";
import vector1 from "../../assets/images/profile-images/Vector1.png";
import vector2 from "../../assets/images/profile-images/Vector2.png";
import vector3 from "../../assets/images/profile-images/Vector3.png";
import vector4 from "../../assets/images/profile-images/Vector4.png";
import vector5 from "../../assets/images/profile-images/Vector5.png";
import vector6 from "../../assets/images/profile-images/Vector6.png";
import vector7 from "../../assets/images/profile-images/Vector7.png";
import vector8 from "../../assets/images/profile-images/Vector8.png";
import vector9 from "../../assets/images/profile-images/Vector9.png";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo, signin, signOut } from "../../redux/actions/auth.actions";

const LoginForm = () => {

  const [ mobNum , setMobNum ] = useState();
  const [pass, setPass] = useState();

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(signin(mobNum, pass));
  };

  return <div className="login_form gap-4">
    <input value={mobNum} onChange={(event)=>{setMobNum(event.target.value)}} className="input_ele" placeholder="Phone number"/>
    <input value={pass} onChange={(event) => { setPass(event.target.value) }} className="input_ele" placeholder="Password"/>
    <button className="buttons" onClick={submitHandler}>Login</button>
  </div>
};

const Nav = () => {

  const isAuthenticationPage = window.location.pathname === '/login' || window.location.pathname === '/signup';

  const session = useSelector((state) => state.session);
  const {
    accessToken,
    userInfo={},
    isAuthenticated,
  } = session;
  const { 
    loading:loadingUserInfo,
    fetchDone:doneUserInfo,
    ...userData
  } = userInfo;

  const dispatch = useDispatch();
  const [showLoginForm,setShowLoginForm] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const onSignOut = () =>{
    dispatch(signOut());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    if (accessToken) {
      dispatch(getMyInfo());
    }
  }, [accessToken]);

  useEffect(()=>{
    if (isAuthenticated){
      setOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <div className="navbar d-flex justify-content-between align-items-center px-5 sticky-top">
      <Link to="/">
        {" "}
        <div className="navbar__logo d-flex align-items-center">
          <div className="navbar__logo__img me-3">
            <img src={logomain} alt="nav-logo" />
          </div>
          <h1 className="nav__logo__brand">PlayersVictory</h1>
        </div>
      </Link>
      <div className="navbar__profile d-flex align-items-center">
        {
          !isAuthenticationPage ? loadingUserInfo ? <span>Loading...</span> : (!loadingUserInfo && doneUserInfo && userData) ? <div className="navbar__profile__img me-3" onClick={handleExpand}>
          <img src={profile} alt="profile" />
          </div> : <button className="nav__sign" onClick={onOpenModal}>
            Login/Signup
          </button> : null
        }
        <div>
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            closeOnEsc
            blockScroll
            styles={{
              modal: { padding: 30 + "px", borderRadius: 8 + "px" },
              closeButton: { top: 8 + "px", right: 8 + "px" },
              closeIcon: { height: 20 + "px", width: 20 + "px" },
            }}
          >
            <>
              {
                showLoginForm ? <LoginForm /> : <nav className="d-flex gap-3">
                  <div className="buttons" onClick={() => setShowLoginForm(true)}>Login</div>
                  <div className="buttons">Signup</div>
                </nav>
              }
            </>
          </Modal>
        </div>
      </div>

      {/* sidebar */}
      {(expanded && isAuthenticated) && (
        <div className="backdrop-overlay" onClick={handleExpand}>
          <div
            className={
              expanded ? "expanded__nav  py-4 active" : "expanded__nav"
            }
          >
            <div className="profile__details ps-5 d-flex justify-content-start align-items-center">
              <div className="profile__img me-3">
                <img src={profile} alt="profile" />
              </div>
              <div className="profile__contact">
                {
                  (userData && userData.mobile) && <p className="profile__contact__all">+91 {userData.mobile}</p>
                }
                {
                  (userData && userData.pvId) && <p className="profile__contact__all">PV ID : {userData.pvId}</p>
                }
              </div>
            </div>
            <hr />
            <ul className="ps-5 profile__links">
              <Link to="/profile/mybookings">
                <li>
                  <img src={vector} alt="profile-item" />
                  My Bookings
                </li>
              </Link>
              <Link to="/Profile/MyInterest">
                <li>
                  <img src={vector1} alt="profile-item" />
                  My Intrests
                </li>
              </Link>
              <Link to="/Profile/MeetPayPals">
                <li>
                  <img src={vector2} alt="profile-item" />
                  Find Players
                </li>
              </Link>
              {/* <li>
                <img src={vector9} alt="profile-item" />
                Wallet (Gem)
              </li> */}
              {/* <li>
                <img src={vector3} alt="profile-item" />
                Refer and Earn
              </li> */}
              <Link to="/Profile/Offers">
                <li>
                  <img src={vector4} alt="profile-item" />
                  Offers
                </li>
              </Link>
              <Link to="/Policy">
                <li>
                  <img src={vector5} alt="profile-item" />
                  Privacy policy
                </li>
              </Link>
              <Link to="/Terms">
                <li>
                  <img src={vector6} alt="profile-item" />
                  Terms and conditions
                </li>
              </Link>
              <Link to="/Profile/AboutUs">
                <li>
                  <img src={vector7} alt="profile-item" />
                  About us
                </li>
              </Link>
            </ul>

            <ul className="ps-5 logout__cta profile__links">
              <li onClick={onSignOut}>
                <img src={vector8} alt="profile-item" />
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
