import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import backend from "../../data/backend";
import frontend from "../../data/frontend"
import software from "../../data/software.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.row}>
            <div className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with required skills to develop responsive and 
                  optimized applications.
                </p>
              </div>
            </div> 
            <div className={styles.content}>
              <div className={styles.skills}>
                {frontend.map((skill, id) => {
                  return (
                    <div key={id} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
          <li className={styles.row}>
            <div className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have necessary skills on developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.skills}>
                {backend.map((skill, id) => {
                  return (
                    <div key={id} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
          <li className={styles.row}>
            <div className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>Software Engineer</h3>
                <p>
                My fluency in data structures, algorithms, and object-oriented design 
                principles allows me to craft efficient and maintainable software solutions.
                </p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.skills}>
                {software.map((skill, id) => {
                  return (
                    <div key={id} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
