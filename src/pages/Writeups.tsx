"use client"

import "../styles/Writeups.css"

const Writeups = () => {
  const writeups = [
    {
      id: 1,
      title: "Exploiting XSS Vulnerabilities in Modern Web Applications",
      date: "May 15, 2023",
      excerpt:
        "An in-depth analysis of cross-site scripting vulnerabilities and how to prevent them in modern web frameworks.",
      tags: ["Web Security", "XSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Secure Coding Practices for Node.js Applications",
      date: "March 22, 2023",
      excerpt:
        "A comprehensive guide to writing secure code in Node.js applications, covering common vulnerabilities and mitigation strategies.",
      tags: ["Node.js", "Secure Coding", "Backend"],
    },
    {
      id: 3,
      title: "Breaking Down the OWASP Top 10 for 2023",
      date: "January 10, 2023",
      excerpt:
        "A detailed analysis of the OWASP Top 10 security risks for web applications in 2023 and how to address them.",
      tags: ["OWASP", "Web Security", "Best Practices"],
    },
  ]

  return (
    <div className="writeups-container">
      <h1 className="writeups-title">Security Writeups</h1>
      <p className="writeups-subtitle">Technical articles and security research I've published.</p>

      <div className="writeups-list">
        {writeups.map((writeup) => (
          <div key={writeup.id} className="writeup-card">
            <div className="writeup-content">
              <div className="writeup-date">{writeup.date}</div>
              <h2 className="writeup-title">{writeup.title}</h2>
              <p className="writeup-excerpt">{writeup.excerpt}</p>
              <div className="writeup-tags">
                {writeup.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Writeups
