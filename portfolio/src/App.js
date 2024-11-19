import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <section id="projects">
                <h2>My Projects</h2>
                <div className="project-list">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      link={project.link}
                    />
                  ))}
                </div>
              </section>
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;