"use client";

import "../styles/Tools.css";

const Tools = () => {
  const tools = [
    {
      id: 1,
      description:
        "Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code on the server side. It is built on the V8 JavaScript engine used in Google Chrome and is designed to build scalable network applications.",
      icon: "https://img.shields.io/badge/Nodejs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      link: "https://nodejs.org",
    },
    {
      id: 2,
      description:
        "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations for React applications.",
      icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
      link: "https://nextjs.org",
    },
    {
      id: 3,
      description:
        "React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.",
      icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      link: "https://reactjs.org",
    },
    {
      id: 4,
      description:
        "Rust is a systems programming language focused on safety, speed, and concurrency. It prevents segfaults and guarantees thread safety.",
      icon: "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white",
      link: "https://www.rust-lang.org",
    },
    {
      id: 5,
      description:
        "Express.js is a fast, unopinionated, minimalist web framework for Node.js that provides a robust set of features for web and mobile applications.",
      icon: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
      link: "https://expressjs.com",
    },
    {
      id: 6,
      description:
        "Docker is a platform for developing, shipping, and running applications in containers, ensuring consistency across different environments.",
      icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      link: "https://www.docker.com",
    },
    {
      id: 7,
      description:
        "Flask is a lightweight WSGI web application framework in Python, designed to make getting started quick and easy.",
      icon: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      link: "https://flask.palletsprojects.com",
    },
    {
      id: 8,
      description:
        "Socket.IO enables real-time, bidirectional and event-based communication between web clients and servers.",
      icon: "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white",
      link: "https://socket.io",
    },
    {
      id: 9,
      description:
        "C is a general-purpose programming language that has been used for developing operating systems, embedded systems, and other applications.",
      icon: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
      link: "https://en.cppreference.com/w/c",
    },
    {
      id: 10,
      description:
        "Bash is a Unix shell and command language, commonly used for system administration and automation tasks.",
      icon: "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white",
      link: "https://www.gnu.org/software/bash/",
    },
    {
      id: 11,
      description:
        "Python is a high-level, interpreted programming language known for its simplicity and versatility in various domains.",
      icon: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      link: "https://www.python.org",
    },
    {
      id: 12,
      description:
        "Redis is an in-memory data structure store, used as a database, cache, message broker, and queue.",
      icon: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
      link: "https://redis.io",
    },
    {
      id: 13,
      description:
        "MongoDB is a source-available cross-platform document-oriented database program, classified as a NoSQL database.",
      icon: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
      link: "https://www.mongodb.com",
    },
    {
      id: 14,
      description:
        "MySQL is an open-source relational database management system, widely used for web applications.",
      icon: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      link: "https://www.mysql.com",
    },
    {
      id: 15,
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript, adding static type definitions.",
      icon: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      link: "https://www.typescriptlang.org",
    },
    {
      id: 16,
      description:
        "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.",
      icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 17,
      description:
        "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      icon: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
      link: "https://www.djangoproject.com",
    },
    {
      id: 18,
      description:
        "jQuery is a fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation.",
      icon: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
      link: "https://jquery.com",
    },
    {
      id: 19,
      description:
        "GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline.",
      icon: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
      link: "https://github.com/features/actions",
    },
    {
      id: 20,
      description:
        "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
      icon: "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
      link: "https://www.nginx.com",
    },
    {
      id: 21,
      description:
        "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
      icon: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
      link: "https://www.linux.org",
    },
  ];

  return (
    <div className="tools-container">
      <h1 className="tools-title">Security Tools</h1>
      <p className="tools-subtitle">
        Tools I use to help with various software engineering tasks.
      </p>

      <div className="tools-grid">
        {tools.map((tool) => (
          <div key={tool.id} className="tool-card">
                <img src={tool.icon} alt={tool.link} />
                <br />
            <p className="tool-description">{tool.description}</p>
            {/* <a href={tool.link} className="tool-link">
              Try Tool
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
