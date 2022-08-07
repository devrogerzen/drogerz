import NavBarPortfolio from "../portfolio/navbar/NavBarPortfolio";
import { projectsData } from "./ArrayProjects";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="layaut-main_projects">
      <NavBarPortfolio />
      <section className="card-container-projects">
        {projectsData.map((item, idx) => {
          return (
            <div className="card-projects" key={idx}>
              <div className="card-container-img">
                <img
                  className="card-img"
                  src={item.img}
                  alt={"This is a image with name" + item.title}
                />
              </div>
              <article className="card-text-resume">
                <h2 className="card-title-projects_h2">{item.title}</h2>
                <p className="card-description-projects_p">{item.desc}</p>

                <ul className="card-projects-dependencies_ul">
                  {item.listech.map((item, idx) => {
                    return (
                      <li className="card-projects-dependencies_li" key={idx}>{item}</li>
                    );
                  })}
                </ul>
                <div className="card-bottons">
                  <button className="card-bottons_botton">Visitar</button>
                  <button className="card-bottons_botton">GitHub</button>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </div>
  );
};

