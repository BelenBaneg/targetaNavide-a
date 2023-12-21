import React from "react";
import Navbar from "./components/Navbar.js";
import { Routes, Route } from "react-router-dom";

import Home from './components/Home.js'


function App() {


  return (
    <>
    
    <div className="App">
      
  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>

    </>
  );
}

export default App;
