import React from "react"

import cardStyles from "./projectCard.module.scss"

const ProjectCard = props => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.topContent}>
        <div className={cardStyles.imageContainer}>
          <img
            src={props.previewImage.fluid.src}
            alt={props.previewImage.title}
          />
        </div>
        <h2 className={cardStyles.cardTitle}>{props.title}</h2>
        <div className={cardStyles.technologyTags}>
          {props.technologyUsed.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
        <p className={cardStyles.cardDes}>{props.description}</p>
      </div>
      <div className={cardStyles.linkContainer}>
        <a href={props.gitHubUrl} target="__blank" rel="noopener">
          {props.gitHubUrlTitle}
        </a>
        <a href={props.projectUrl} target="__blank" rel="noopener">
          {props.projectUrlTitle}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
