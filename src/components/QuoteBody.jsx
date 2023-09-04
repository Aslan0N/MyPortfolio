import Aos from "aos";
import React from "react";
import { LuQuote } from "react-icons/lu";

const QuoteBody = () => {
  Aos.init();
  return (
    <section id="quote">
      <div data-aos="zoom-in" className="my-card">
        <span className="first-sp">
          <LuQuote className="i" />
        </span>
        <span className="end-sp">
          <LuQuote className="i" />
        </span>
        <h5>I will never let my school interfere with my education.</h5>
      </div>
    </section>
  );
};

export default QuoteBody;
