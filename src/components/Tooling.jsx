// React
import React from "react";

// İcons
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";

// Aos
import Aos from "aos";

const Tooling = () => {
    Aos.init()
  return (
    <section id="tooling">
      <h2 data-aos="flip-left" data-aos-duration="1000">My Skills</h2>
      <div className="con" data-aos="flip-right" data-aos-duration="1000">
        <div className="tool-card">
          <span>
            <AiFillHtml5 className="i" />
          </span>
          <p>HTML</p>
        </div>
        <div className="tool-card">
          <span>
            <FaCss3Alt className="i" />
          </span>
          <p>CSS</p>
        </div>
        <div className="tool-card">
          <span>
            <FaSass className="i" />
          </span>
          <p>Sass</p>
        </div>
        <div className="tool-card">
          <span>
            <RiBootstrapLine className="i" />
          </span>
          <p>Bootstrap</p>
        </div>
        <div className="tool-card">
          <span>
            <SiJavascript className="i sm" />
          </span>
          <p>JavaScript</p>
        </div>
        <div className="tool-card">
          <span>
            <BiLogoTypescript className="i" />
          </span>
          <p>TypeScript</p>
        </div>
        <div className="tool-card">
          <span>
            <SiJquery className="i" />
          </span>
          <p>JQuery</p>
        </div>
        <div className="tool-card">
          <span>
            <FaReact className="i" />
          </span>
          <p>React</p>
        </div>
        <div className="tool-card">
          <span>
            <SiRedux className="i" />
          </span>
          <p>Redux</p>
        </div>
        <div className="tool-card">
          <span>
            <FaVuejs className="i" />
          </span>
          <p>Vue</p>
        </div>
      </div>
    </section>
  );
};

export default Tooling;
