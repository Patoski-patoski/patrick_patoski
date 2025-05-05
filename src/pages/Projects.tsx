"use client"

import "../styles/Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Secure Authentication System",
      description:
        "Developed a secure authentication system with multi-factor authentication, JWT tokens, and role-based access control.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/placeholder-project.jpg",
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description:
        "Built an automated vulnerability scanner that identifies security issues in web applications and generates detailed reports.",
      technologies: ["Python", "Docker", "PostgreSQL", "React"],
      image: "/placeholder-project.jpg",
    },
    {
      id: 3,
      title: "Secure File Storage",
      description:
        "Created an end-to-end encrypted file storage solution with client-side encryption and secure sharing capabilities.",
      technologies: ["React", "Node.js", "AWS S3", "Crypto API"],
      image: "/placeholder-project.jpg",
    },
  ]

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">Explore my recent work in cybersecurity and software development.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  View Details
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
