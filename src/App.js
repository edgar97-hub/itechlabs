// import './App.css';
//import Navbar from "./components/Navbar/Navbar"
import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/technologies" component={Products} />
        <Route path="/contact" component={Contact} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
