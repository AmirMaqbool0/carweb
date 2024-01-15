import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Sign from "./Pages/Sign in/Sign";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ForgetPassworsdOTP from "./Pages/ForgetPasswordOtp/ForgetPassworsdOTP";
import NewPassword from "./Pages/NewPassword/NewPassword";
import SignOTP from "./Pages/SignInOtp/SignOTP";
import VehicleListing from "./Pages/VechicleListing/VehicleListing";
import Footer from "./Components/Footer/Footer";
import CarDetail from "./Pages/CarDetail/CarDetail";
import Contact from "./Pages/Contact/Contact";
import CarPayment from "./Pages/CarPayment/CarPayment";
import FavriotCar from "./Pages/FavriotCar/FavriotCar";
import CarHistory from "./Pages/CarHistory/CarHistory";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Sign/>} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/forgetpasswordotp" element={<ForgetPassworsdOTP/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/signinotp" element={<SignOTP/>} />
          <Route path="/vehiclelist" element={<VehicleListing/>} />
          <Route path="/cardetail" element={<CarDetail/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/carpayment" element={<CarPayment/>} />
          <Route path="/favriotcars" element={<FavriotCar/>} />
          <Route path="/carhistory" element={<CarHistory/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
         
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
