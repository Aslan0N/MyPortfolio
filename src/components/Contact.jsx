import React from "react";
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {TbMailShare} from 'react-icons/tb'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONNECT WITH ME</h2>
      <div className="container-fluid">
        <div className="row">
        <a href="https://github.com/Aslan0N" target="blank" className="col-12 col-sm-12 col-md-6 col-lg-6 bg-grey">
            <p>Github</p>
            <span><BsGithub className="i"/></span>
          </a>
          <a href="https://www.linkedin.com/in/aslan-nazarov-620876270/" target="blank" className="col-12 col-sm-12 col-md-6 col-lg-6 bg-blue">
            <p>Linkedin</p>
            <span><BsLinkedin className="i"/></span>
          </a>
          
          <a href="mailto:nazarr.30001@gmail.com" target="blank" className="col-12 col-sm-12 col-md-12 col-lg-12">
            <p>SHOT ME A MAIL</p>
            <span><TbMailShare className="i"/></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
