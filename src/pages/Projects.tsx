import "../styles/Projects.css"
import Simple_Shell from "/simple_shell.jpg";
import Article from "/article.jpg";


const Projects = () => {
  const projects = [
   {
      id: 1,
      title: "MemeAI Orchestrator",
      description:
        " AI-powered agent built with the Mastra framework that allows users to search for internet memes, retrieve meme templates, and get engaging descriptions and usage information about popular memes.",
      technologies: [
        "Playwright",
        "Mastra",
        "Nosana",
        "TypeScript",
      ],
      image: "/meme.jpg",
      github: "https://github.com/Patoski-patoski/MemeAI-Orchestrator",
    },
   {
      id: 2,
      title: "Twitter-projectrugguard-bot",
      description:
        "A comprehensive Twitter bot that analyzes account trustworthiness for the Solana DeFi community.",
      technologies: [
        "Crypto API",
        "Twitter(X) API",
        "Python",
      ],
      image: "/xbot.jpg",
      github: "https://github.com/Patoski-patoski/twitter_bot_projectruggaurd",
    },
    {
      id: 3,
      title: "Bloggify",
      description:
        "Bloggify is a full-stack blogging application that allows users to create, manage, and share blog posts. Built with a focus on simplicity and usability.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: Article,
      github: "https://github.com/Patoski-patoski/bloggify",
    },
    {
      id: 4,
      title: "vybe_telegram_cryptobot",
      description:
        "A functional Telegram bot using Vybe APIs for actionable, real-time crypto insights, linking users to AlphaVybe for deeper analytics.",
      technologies: [
        "Telegram API",
        "Redis",
        "Node.js",
        "Express",
        "TypeScript",
        "Crypto API",
      ],
      image: "/vybe.jpg",
      github: "https://github.com/Patoski-patoski/vybe_telegram_cryptobot",
    },
    {
      id: 5,
      title: "C commandline shell ",
      description:
        "Built an UNIX shell that executes commands, handles pipes, and manages processes, enhancing command-line interface functionality.",
      technologies: ["C", "Bash"],
      image: Simple_Shell,
      github: "https://github.com/Patoski-patoski/simple_shell",
    },
    {
      id: 6,
      title: "C printf function",
      description:
        "Create a simple replica of the standard printf function in C. This function handle various format specifiers and flags, allowing for formatted output similar to the standard printf function.",
      technologies: ["C", "Bash"],
      image: Simple_Shell,
      github: "https://github.com/DeyonOba/printf",
    },
    {
      id: 7,
      title: "Soldash",
      description:
        "A solana wallet dashboard that allows users to manage their crypto wallets, send and receive funds, and view transaction history.",
      technologies: ["Express", "Solana/web3js", "NextJs", "TypeScript"],
      image: "/soldash.jpg",
      github: "https://github.com/patoski-patoski/soldash",
    },
    {
      id: 8,
      title: "copperx-payout-bot",
      description:
        "A Telegram bot for Copperx Payout that allows users to - manage their crypto wallets - send funds, and - receive notifications.",
      technologies: [
        "Crypto API",
        "Telegram API",
        "Node.js",
        "Express",
        "TypeScript",
      ],
      image: "/copperxlogo.jpg",
      github: "https://github.com/Patoski-patoski/copperx-payout-bot",
    },
   
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">Explore my recent work in software development, Blockchain and API Integration.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.jpg"} alt={project.title} />
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
                <a href={project.github} className="project-link">
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
