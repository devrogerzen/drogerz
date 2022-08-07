import NavBarPortfolio from "../portfolio/navbar/NavBarPortfolio";
import {
  backend,
  database,
  frontend,
  languages,
  othertools,
} from "./ArrayTech";
import "./Me.css";

export const Me = () => {
  return (
    <div className="layaut_me">
      <NavBarPortfolio />
      <div className="container-main_tech">
        <h1 className="title_tech">Lenguajes de Programación:</h1>
        <div className="subcontainer-tech">
          {languages.map((item, idx) => {
            return (
              <div className="card-tech" key={idx}>
                <img
                  className="img-tech"
                  src={item.img}
                  alt={" symbol " + item.nombre}
                />
                <h2 className="h2-tech">{item.nombre}</h2>
              </div>
            );
          })}
        </div>

        <h1 className="title_tech">Front-End:</h1>
        <div className="subcontainer-tech">
          {frontend.map((item, idx) => {
            return (
              <div className="card-tech" key={idx}>
                <img
                  className="img-tech"
                  src={item.img}
                  alt={" symbol " + item.nombre}
                />
                <h2 className="h2-tech">{item.nombre}</h2>
              </div>
            );
          })}
        </div>

        <h1 className="title_tech">Back-End</h1>
        <div className="subcontainer-tech">
          {backend.map((item, idx) => {
            return (
              <div className="card-tech" key={idx}>
                <img
                  className="img-tech"
                  src={item.img}
                  alt={" symbol " + item.nombre}
                />
                <h2 className="h2-tech">{item.nombre}</h2>
              </div>
            );
          })}
        </div>

        <h1 className="title_tech">Base de Datos:</h1>
        <div className="subcontainer-tech">
          {database.map((item, idx) => {
            return (
              <div className="card-tech" key={idx}>
                <img
                  className="img-tech"
                  src={item.img}
                  alt={" symbol " + item.nombre}
                />
                <h2 className="h2-tech">{item.nombre}</h2>
              </div>
            );
          })}
        </div>

        <h1 className="title_tech">Otras Herramientas:</h1>
        <div className="subcontainer-tech">
          {othertools.map((item, idx) => {
            return (
              <div className="card-tech" key={idx}>
                <img
                  className="img-tech"
                  src={item.img}
                  alt={" symbol " + item.nombre}
                />
                <h2 className="h2-tech">{item.nombre}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
