// CSS
import styles from "./About.module.css";
// packages
import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com <b>React</b> no Front-end e{" "}
        <b>Firebase</b> no Back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
      <div className={styles.images}>
        <img src="../../public/react.png" />
        <img src="../../public/firebase.png" />
      </div>
    </div>
  );
};

export default About;
