import React from "react";
import "./App.css";
import CarouselFindNearest from "./components/carouselfindnearest/CarouselFindNearest.jsx";
import Interest from "./pages/Interest/Interest";
import PrivacyPolicy from "./pages/Privacy Policy/PrivacyPolicy";
import Terms from "./pages/Terms & Conditions/Terms";
import BookingLogin from "./pages/Booking page/BookingLogin";
import BookingPayment from "./pages/Booking page/BookingPayment";
import AttendeeDetails from "./pages/Attendee details/AttendeeDetails";
import CreateTeam from "./pages/Create Team/CreateTeam";
import SportsParadise from "./pages/Sports Paradise/SportsParadise";
import SportsAround from "./pages/SportsAround/SportsAround";
import Mybookings from "./pages/MyBookings/Mybookings";
import { Offers } from "./pages/Offers/Offers";
import Meetpaypals from "./pages/MeetPaypals/Meetpaypals";
import Chats from "./pages/Chats/Chats";
import Hostgame from "./pages/HostGame/Hostgame";
import HostgameDetails from "./components/HostGames/HostgameDetails";
import HostTeam from "./components/HostGames/HostTeam";
import { Routes, Route } from "react-router-dom";
import EventsAround from "./pages/EventsAround/EventsAround";
import Playarena from "./pages/Playarena/Playarena";
import Nav from "./components/nav/Nav";
import LandingPage from "./pages/LandingPage";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isAuthenticated } from "./redux/actions/auth.actions";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";
import SignUp from "./pages/SignUp";

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(isAuthenticated());
  },[]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<UnAuthenticatedRoute location="/" element={<Login />} />} />
        <Route path="/signup" element={<UnAuthenticatedRoute location="/" element={<SignUp />} />} />
        <Route path="/" element={<AuthenticatedRoute location="/" element={<LandingPage />}/>} />
        <Route path="/clubs" element={<AuthenticatedRoute location="/" element={<SportsAround />} />} />
        <Route path="/club/:clubId" element={<AuthenticatedRoute location="/" element={<SportsParadise />} />} />
        <Route path="/club/:clubId/book" element={<AuthenticatedRoute location="/" element={<BookingPayment />} />} />
        <Route path="/events" element={<AuthenticatedRoute location="/" element={<EventsAround />} />} />
        <Route path="/event/:eventId" element={<AuthenticatedRoute location="/" element={<Playarena />} />} />
        <Route path="/profile/mybookings" element={<AuthenticatedRoute location="/profile/mybookings" element={<Mybookings />} />} />
        {/* <Route path="EventsAround/PlayArena" element={<Playarena />} /> */}
        <Route
          path="EventsAround/PlayArena/AttendeeDetails"
          element={<AttendeeDetails />}
        />
        <Route path="/Booking" element={<BookingLogin />} />
        <Route path="/Booking/Payment" element={<BookingPayment />} />
        <Route path="/Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Profile/MyInterest" element={<Interest />} />
        <Route path="/Profile/MeetPayPals" element={<Meetpaypals />} />
        <Route path="/Profile/MeetPayPals/Chats" element={<Chats />} />
        <Route path="/Profile/MeetPayPals/Hostgame" element={<Hostgame />} />
        <Route
          path="/Profile/MeetPayPals/Hostgame/GameDetails"
          element={<HostgameDetails />}
        />
        <Route
          path="/Profile/MeetPayPals/Hostgame/TeamDetails"
          element={<HostTeam />}
        />
        <Route
          path="/Profile/MeetPayPals/Hostgame/TeamDetails/CreateyourTeam"
          element={<CreateTeam />}
        />
        <Route path="/Profile/Offers" element={<Offers />} />
        <Route path="/Profile/AboutUs" element={<CarouselFindNearest />} />
      </Routes>
    </>
  );
}

export default App;
