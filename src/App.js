import "./App.css";
import Navbar from "./components/Navbar/";
import Sidebar from "./components/Sidebar";

import Menu1 from "./pages/Menu1";
import Products from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Slider from  "./pages/Slider";
//Cloned into my system

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, {useState} from "react";
function App() {
  const[isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
          <Route path="/" exact component={Slider} />
          <Route path="/products" exact component={Menu1} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/info" exact component={About}/>
          <Route path="/lists" exact component={Products}/>
        </Switch>
        
      </Router>
     
    </div>
  );
}

export default App;
