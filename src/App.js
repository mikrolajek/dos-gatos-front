import "./App.css";
import React from "react";
import {Helmet} from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Hours from "./components/pages/Hours";
import Contact from "./components/pages/Contact"
import favicon from "../src/assets/favicon.ico"

function App() {
  return (
    <>
    <Helmet>
      <title>Dos Gatos</title>
      <link rel="icon" type="image/x-icon" href={favicon} sizes="16x16" alt="favicon"/>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="HandheldFriendly" content="true" />
    </Helmet>
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Hours />
        <Contact />
    </>
  );
}

export default App;
