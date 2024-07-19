import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source,images },
}) => {
  return (
    <div className={styles.container}>
      {console.log(getImageUrl(images[0]))}
      <img
        src={getImageUrl(images[0])}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.container_2}>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
