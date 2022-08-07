import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "../components/mantenience/NotFound";
import Portfolio from "../components/portfolio/Portfolio";
import { Me } from "../components/me/Me"
import { Projects } from "../components/projects/Projects"
import { Contact } from "../components/contact/Contact"

export const RouterMain = () => {
  return (
    <Router basename="/drogerz">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/me" element={<Me />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
