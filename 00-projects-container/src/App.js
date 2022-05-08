import React from "react";
import { data } from "./data";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <section>
      <div className="container">
        <h1 className="title">react basic project</h1>
        <div className="underline"></div>

        <div className="projects">
          {data.map((item) => (
            <div className="singleProject" key={item.id}>
              <a href={item.liveUrl} target="_blank" rel="noreferrer">
                <img src={item.img} alt="" />
                <h3 className="projectTitle">{item.projectTitle}</h3>
              </a>

              <h4 className="github">
                <a href={item.githubUrl} target="_blank" rel="noreferrer">
                  <FaGithub style={{ marginRight: "5px" }} />
                  GitHub
                </a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
