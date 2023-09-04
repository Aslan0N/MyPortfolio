import React, { useState } from "react";
import Home from "./components/Home";
import Tooling from "./components/Tooling";
import QuoteBody from "./components/QuoteBody";
import Contact from "./components/Contact";
import ShowRoom from "./components/ShowRoom";
import Header from "./components/Header";

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
              href="https://drive.google.com/file/d/1bsYieHEoLxZklj-NzjvTxPJMKDI1W8K0/view?usp=sharing"
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
