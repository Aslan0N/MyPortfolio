// React
import React from "react";

// İmage
import Img1 from "../assets/images/img-me.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 animation">
              <p className="first-p">
                <span>✌🏻</span> Hi there! I'm Aslan
              </p>
              <h1>
                A <span>Front End Developer</span> . Trust me in{" "}
                <span>Making</span> and <span>Developing</span> projects
              </h1>
              <p className="end-p">
                I am a practical thinker and manage to handle the environment in
                stressful situations. My first rule in my projects is
                discipline, I am confident in writing fast and clean code.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 img-col">
              <img src={Img1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
