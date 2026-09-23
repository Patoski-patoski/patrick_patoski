
import { useState, useEffect, useMemo } from "react";
import "../styles/About.css";
import ProfileImage from "../assets/my_profile.jpg";
import { getYearsOfExperience } from "../utils/experience";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  const terminalLines = useMemo(
    () => [
      "cat profile.json",
      "ls -la skills",
      "cat certifications.txt",
      "cat experience.txt",
    ],
    []
  );

  const yearsOfExperience = useMemo(() => getYearsOfExperience(), []);

  const profileData = {
    name: "Patrick Okafor Chibuike",
    title: "Lead Backend & Solana Smart Contract Engineer",
    location: "Nigeria, Kano",
    bio: `Full-stack Software Engineer with ${yearsOfExperience}+ years building high-performance production systems — Solana protocols, NestJS microservices, and real-time IoT platforms`,
    skills: [
      "TypeScript",
      "Rust",
      "Python",
      "Solana/Anchor",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MQTT",
      "Docker",
      "AWS",
    ],
    interests: [
      "Solana Protocols",
      "AI Agents",
      "IoT Systems",
      "Graph Analytics",
      "System Architecture",
      "Hackathons",
    ],
  };

  const skillsOutput = [
    "total 12",
    `-rw-r--r--  1 patrick developers   742 Sep 7 2026 TypeScript.ts`,
    `-rw-r--r--  1 patrick developers   654 Sep 7 2026 Rust.rs`,
    `-rw-r--r--  1 patrick developers   690 Sep 7 2026 Solana_Anchor.sol`,
    `-rw-r--r--  1 patrick developers   678 Sep 7 2026 NestJS.ts`,
    `-rw-r--r--  1 patrick developers   654 Sep 7 2026 Python.py`,
    `-rw-r--r--  1 patrick developers   640 Sep 7 2026 NodeJS.js`,
    `drwxr-xr-x  2 patrick developers  4096 Aug 28 2026 PostgreSQL.db`,
    `drwxr-xr-x  2 patrick developers  4096 Aug 28 2026 MongoDB.db`,
    `-rw-r--r--  1 patrick developers   512 Aug 28 2026 Redis.cache`,
    `-rw-r--r--  1 patrick developers   498 Aug 28 2026 MQTT.mq`,
    `drwxr-xr-x 10 patrick developers  4096 Aug 22 2026 DockerfIle`,
    `-rw-r--r--  1 patrick developers   512 Aug 22 2026 React.ts`,
  ];

  const certifications = [
    "========== CERTIFICATIONS ==========",
    "",
    "1. Solana/Rust Developer — Encode",
    "   Issued: November 2025",
    "   Skills: Rust, Anchor, PDAs, SPL, Jupiter, Pyth",
    "",
    "2. ALX Software Engineering",
    "   Issued: November 2024",
    "   Skills: Backend development, System programming, System design, Algorithms",
    "",
    "3. ALX AI Starter Kit",
    "   Issued: 2025",
    "   Skills: Prompt Engineering, NoCode tools, AI ethics, AI automations",
    "",
    "4. ALX Backend specialization",
    "   Issued: February 2024",
    "   Skills: Server architecture, Microservices, Cloud deployment",
    "",
    "5. Zuri Internship Full-Stack Web Development",
    "   Issued: August 2022",
    "   Skills: DJANGO, API development, Database management",
    "",
  ];

  const experience = [
    "========== EXPERIENCE ==========",
    "",
    "1. Lead Backend & IoT Cloud Engineer — AllinzucolSmart Lab",
    "   Aug 2026 – Present | NestJS/TypeScript, Bun, AWS, MQTT, PostgreSQL",
    "   IoT hospitality platform: mTLS ingestion (<50ms), emergency alerts,",
    "   room FSMs, 6-tier RBAC, 95%+ coverage over 200+ tests.",
    "",
    "2. Lead Backend & Smart Contract Engineer — Zephyr Protocol",
    "   Jan 2026 – Present | Rust/Anchor, Node.js/TypeScript",
    "   Non-custodial PDA vaults, 16x RPC latency cut (14ms → 0.88ms),",
    "   Pyth/Switchboard + Jupiter V6, sub-block indexer, Prisma analytics.",
    "",
    "3. Backend Engineer — KENEI Health",
    "   Dec 2024 – Mar 2025 | Node.js/Express, MongoDB",
    "   Telemedicine APIs, -30% response times, -40% onboarding time.",
    "",
  ];

   useEffect(() => {
     // Reset output state when changing commands
     setShowOutput(false);

     // Simulate typing effect for terminal commands
     let i = 0;
     const typingInterval = setInterval(() => {
       if (i < terminalLines[currentLine].length) {
         setTypedText(terminalLines[currentLine].substring(0, i + 1));
         i++;
       } else {
         clearInterval(typingInterval);
         // Show output after command is typed
         setShowOutput(true);

         // Move to next line after delay
         setTimeout(() => {
           if (currentLine < terminalLines.length - 1) {
             setCurrentLine((prev) => prev + 1);
             setTypedText("");
           } else {
             setCurrentLine(0);
             setTypedText("");
           }
         }, 5000); // Longer delay to read the output
       }
     }, 80);

     // Cursor blinking effect
     const cursorInterval = setInterval(() => {
       setShowCursor((prev) => !prev);
     }, 500);

     return () => {
       clearInterval(typingInterval);
       clearInterval(cursorInterval);
     };
   }, [currentLine, terminalLines]);

   // Function to render the appropriate output based on the current command
   const renderCommandOutput = () => {
     if (!showOutput) return null;

     switch (currentLine) {
       case 0: // cat profile.json
         return (
           <pre className="json-output">
             {JSON.stringify(profileData, null, 2)}
           </pre>
         );
       case 1: // ls -la skills
         return (
           <pre className="terminal-ls-output">{skillsOutput.join("\n")}</pre>
         );
        case 2: // cat certifications.txt
          return (
            <pre className="terminal-certifications">
              {certifications.join("\n")}
            </pre>
          );
        case 3: // cat experience.txt
          return (
            <pre className="terminal-certifications">
              {experience.join("\n")}
            </pre>
          );
        default:
          return null;
      }
   };

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">
        Learn more about my background, skills, and interests in backend
        systems, Solana, AI agents, and IoT.
      </p>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={ProfileImage || "/placeholder.svg"}
              alt="Profile"
              className="profile-image"
            />
          </div>
          <h2 className="profile-name">Patrick Okafor Chibuike</h2>
          <p className="profile-title">
            Lead Backend & Solana Smart Contract Engineer
          </p>
          <a
            href="/Patrick_Okafor_Resume.pdf"
            download="Patrick_Okafor_Resume.pdf"
            className="resume-download"
          >
            Download Resume
          </a>

          <div className="profile-details">
            <div className="detail-item">
              <h3>LOCATION</h3>
              <p>Kano, Nigeria</p>
            </div>

            <div className="detail-item">
              <h3>EDUCATION</h3>
              <p>B.S. in Biotechnology</p>
              <p className="detail-subtext">Ebonyi State University, 2019</p>
            </div>

            <div className="detail-item">
              <h3>CERTIFICATIONS</h3>
              <p>Solana/Rust Developer — Encode</p>
              <p className="detail-subtext">Issued November 2025</p>
              <p>ALX Software Engineering (Backend)</p>
              <p className="detail-subtext">Issued 2024</p>
              <p>ALX AI Starter Kit</p>
              <p className="detail-subtext">Issued 2025</p>
              <p>Full-Stack Web Development — Zuri x I4G</p>
              <p className="detail-subtext">Issued 2022</p>
            </div>
          </div>
        </div>

        <div className="terminal-section">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-title">Terminal</div>
          </div>

          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">user@patoski:~$</span>{" "}
              {typedText}
              {showCursor && <span className="terminal-cursor">_</span>}
            </div>

            {showOutput && (
              <div className="terminal-output">{renderCommandOutput()}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
