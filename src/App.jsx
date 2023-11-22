// React
import React, { useState } from "react";

// Header
import Header from "./components/Header";

// Pages
import Home from "./components/Home";
import Tooling from "./components/Tooling";
import QuoteBody from "./components/QuoteBody";
import Contact from "./components/Contact";
import ShowRoom from "./components/ShowRoom";

const App = () => {
  const [visible, setVisible] = useState(false);

  document.body.style.overflow = visible ? "hidden" : "visible";
  return (
    <main>
      <div className={visible ? "owerlay visible" : "owerlay"}>
        <ul>
          <li>
            <span>&#9755;</span>
            <a href="#" target="_blank">
              Home
            </a>
          </li>
          <li>
            <span>&#9755;</span>
            <a
              href="https://drive.google.com/file/d/1kXRKlm0TEOrKx0dE5msPZSRbo7tYb4t6/view?usp=drive_link"
              target="blank"
            >
              Resume
            </a>
          </li>
          <li>
            <span>&#9755;</span>
            <a href="mailto:nazarr.30001@gmail.com" target="blank">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Header visible={visible} setVisible={setVisible} />
      <Home />
      <Tooling />
      <ShowRoom />
      <QuoteBody />
      <Contact />
    </main>
  );
};

export default App;
