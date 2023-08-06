import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//view
import Home from './view/Home';
import SignUp from './view/signup';
import SignIn from './view/signin';
import Tournament from './view/Tournament';


//component

//admin

function App() {
  return (
    <BrowserRouter>

      <Routes>
        //view
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Tournament" element={<Tournament />} />

        //component
    
        //addmin
      
      </Routes>

    </BrowserRouter>

  );
}

export default App;
