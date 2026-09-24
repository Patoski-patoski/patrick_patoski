import { useState, useMemo } from "react";
import "../styles/Projects.css";
import { projectsData, type ProjectCategory } from "../data/projectsData";
import { useDocumentTitle } from "../utils/useDocumentTitle";

const categories: ProjectCategory[] = [
  "All",
  "Solana & Web3",
  "Backend & IoT",
  "AI & Automation",
  "Systems & C",
];

const Projects = () => {
  useDocumentTitle("Projects");

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        (project.metric && project.metric.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Engineering Projects</h1>
        <p className="projects-subtitle">
          Production protocols, high-performance backends, AI oracles, and systems programming.
        </p>
      </div>

      <div className="projects-controls">
        <div className="category-pills" role="tablist" aria-label="Project Categories">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                className={`category-pill ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
                <span className="pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search projects (e.g. Anchor, Rust, MQTT, AI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by keyword"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="no-projects">
          <p className="no-projects-text">No projects matched your filters.</p>
          <button
            type="button"
            className="reset-filter-btn"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image || "/placeholder.jpg"}
                  alt={project.title}
                  loading="lazy"
                  className="project-image"
                />
                <div className="project-category-badge">{project.category}</div>
              </div>

              <div className="project-content">
                <div className="project-top-row">
                  <h2 className="project-title">{project.title}</h2>
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>

                {project.metric && (
                  <div className="project-metric-chip">
                    <span className="metric-text">{project.metric}</span>
                  </div>
                )}

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        className="project-link live-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="project-link code-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
