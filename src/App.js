import React from 'react';
import Navbar from './komponen/Navbar';
import{ BrowserRouter, Route} from "react-router-dom";
import Dio from "./Dio";
import Button from "./komponen/Button";
import Tours from "./komponen/Tours";
import Home from "./komponen/Home";
// 
function App() {
  return (
    <BrowserRouter>
    {/* home */}
    <Route path="/tours">
      <Navbar />
      <Tours pt="text-center"/>
    </Route>
    {/* akhir home */}
    <Route path="/home">
      <Navbar />
      <Home />
    </Route>
    <Route exact path="/">
      <Navbar />
    </Route>
    {/* abboyt */}
      <Route path="/about">
       <Navbar />
        <Dio />
      </Route>
    {/* button */}
    <Route path="/button">
      <Navbar />
      <Button color="primary" colorReset="danger" />
    </Route>
    </BrowserRouter>
  )
}

export default App;
