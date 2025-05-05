"use client"

import "../styles/Tools.css"

const Tools = () => {
  const tools = [
    {
      id: 1,
      name: "Password Strength Analyzer",
      description: "A tool to analyze password strength and provide recommendations for improvement.",
      icon: "🔒",
      link: "#",
    },
    {
      id: 2,
      name: "Network Scanner",
      description: "Scan your network for open ports and potential security vulnerabilities.",
      icon: "🔍",
      link: "#",
    },
    {
      id: 3,
      name: "Hash Generator",
      description: "Generate secure hashes using various algorithms (MD5, SHA-1, SHA-256, etc.).",
      icon: "🔑",
      link: "#",
    },
    {
      id: 4,
      name: "SSL Certificate Checker",
      description: "Verify SSL certificates and check for common configuration issues.",
      icon: "🛡️",
      link: "#",
    },
  ]

  return (
    <div className="tools-container">
      <h1 className="tools-title">Security Tools</h1>
      <p className="tools-subtitle">Free online tools to help with various cybersecurity tasks.</p>

      <div className="tools-grid">
        {tools.map((tool) => (
          <div key={tool.id} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-description">{tool.description}</p>
            <a href={tool.link} className="tool-link">
              Try Tool
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tools
