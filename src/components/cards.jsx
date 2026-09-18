import React from "react";

const cards = (props) => {
  return (
    <div id="projects" className="projects">
      {props.projects.map((projects) => {
        return (
          <div className="card1" key={projects.id}>
            <img className="images" src={projects.image} alt="" />
            <h2>{projects.title}</h2>
            <p>{projects.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
