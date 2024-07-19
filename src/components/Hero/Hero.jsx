import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm </h1>
        <h1 className={styles.title}>Manjitha <span className="text-teal-400">Marasinghe</span></h1>
        <p className={styles.description}>
        I'm a final year engineering undergraduate with a strong foundation in full-stack development.
        </p>
        <a href="mailto:emmanjitha@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <div className="flex flex-row mt-4">
          <a className="mr-6" href="mailto:emmanjitha@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
          <a className="mr-6" href="https://www.linkedin.com/in/manjitha-marasinghe-7a0bb5214/"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
          <a className="mr-6" href="https://github.com/McManjitha"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
