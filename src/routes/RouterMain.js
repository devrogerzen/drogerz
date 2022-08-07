import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import NavBarPortfolio from "../components/navbar/NavBarPortfolio";
import "./RouterMain.css"

export const RouterMain = () => {
  return (

    <div className="layaut-main">

      <NavBarPortfolio />
      <h1>Comenzando Portafolio</h1>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={""} />
        <Route path="*" element={"<NotFound />"} />
      </Routes>
    </Router>

    </div>
  );
};