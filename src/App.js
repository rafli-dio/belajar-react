import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './komponen/Navbar';
import{ BrowserRouter, Route} from "react-router-dom";
import Dio from "./Dio";
// 
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
      <Navbar />
    </Route>
      <Route path="/about">
      <Navbar />
      <Dio />
      </Route>
    </BrowserRouter>
  
  )
}

export default App;
