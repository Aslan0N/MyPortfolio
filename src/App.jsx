import React from "react";
import Home from "./components/Home";
import Tooling from "./components/Tooling";
import QuoteBody from "./components/QuoteBody";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ShowRoom from "./components/ShowRoom";

const App = () => {
  return (
    <>
      <Home />
      <Tooling />
      <ShowRoom/>
      <QuoteBody />
      <Contact />
    </>
  );
};

export default App;
