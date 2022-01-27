import React from "react";
import "./App.css";
import Drivetrain from "./components/Drivetrain";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";

function App() {
  return (
    // <Router>
    <>
      
      {/* <Navbar />
      // <Routes>
      //   <Route path="/welcome" exact component={Home} />
      //   <Route path="/about" component={About} />
      //   <Route path="/contact" component={Contact} />
      //   <Route path="/signin" component={SignIn} />
      //   <Route path="/sign-up" component={SignUp} />
      // </Routes> */}
      {/* <Navbar /> */}
      <Drivetrain />
      
    </>
  );
}

export default App;
