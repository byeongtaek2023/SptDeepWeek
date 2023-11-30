import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "pages/Details";


const Router = () => {

  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </BrowserRouter>

  );
};

export default Router;