"use client";

import { useState, useEffect, useMemo } from "react";
import "../styles/About.css";
import ProfileImage from "../assets/my_profile.jpg";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  const terminalLines = useMemo(
    () => ["cat profile.json", "ls -la skills/", "cat certifications.txt"],
    []
  );

  const profileData = {
    name: "Patrick Okafor Chibuike",
    title: "Software developer & Blockchain Enthusiast",
    location: "Nigeria, Kano",
    bio: "I'm a Software developer and blockchain enthusiast with 3+ years of experience in developing secure software solutions",
    skills: ["JavaScript", "TypeScript", "Python", "Rust", "React", "SQL"],
    interests: [
      "Web development",
      "Blockchain",
      "System Programming",
      "Artificial Intelligence",
      "Ethical Hacking",
      "Hackathons",
    ],
  };

  const skillsOutput = [
    "total 7",
    `drwxr-xr-x  2 patrick developers  4096 ${new Date().getFullYear()}`,
    `drwxr-xr-x 10 patrick developers  4096 ${new Date().getFullYear()}`,
    `-rw-r--r--  1 patrick developers   876 May 2 2025 JavaScript.js`,
    `-rw-r--r--  1 patrick developers   742 May 2 2025 TypeScript.ts`,
    `-rw-r--r--  1 patrick developers   654 May 3 2025 Python.py`,
    `-rw-r--r--  1 patrick developers   512 Apr 28 2025 Rust.rs`,
    `-rw-r--r--  1 patrick developers   428 Apr 25 2025 C.c`,
    `-rw-r--r--  1 patrick developers   512 May 5 2025 React.ts`,
  ];

  const certifications = [
    "========== CERTIFICATIONS ==========",
    "",
    "1. ALX Software Engineering",
    "   Issued: December 2023",
    "   Skills: Backend development, System programming, System design, Algorithms",
    "",
    "2. Zuri Internship Full-Stack Web Development",
    "   Issued: August 2022",
    "   Skills: DJANGO, API development, Database management",
    "",
    "3. ALX Backend specialization",
    "   Issued: February 2024",
    "   Skills: Server architecture, Microservices, Cloud deployment",
    "",
    "4. ALXAISK, AI Starter Kit",
    "   Issued: March 2024",
    "   Skills: Prompt Engineering, NoCode tools, AI ethics, AI automations ",
    "",

  ];

   useEffect(() => {
     // Reset output state when changing commands
     setShowOutput(false);

     // Simulate typing effect for terminal commands
     let i = 0;
     const typingInterval = setInterval(() => {
       if (i < terminalLines[currentLine].length) {
         // Use substring instead of appending characters to avoid text issues
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
         }, 3000); // Longer delay to read the output
       }
     }, 50);

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
       case 1: // ls -la skills/
         return (
           <pre className="terminal-ls-output">{skillsOutput.join("\n")}</pre>
         );
       case 2: // cat certifications.txt
         return (
           <pre className="terminal-certifications">
             {certifications.join("\n")}
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
        development and blockchain.
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
            Software developer & Blockchain developer
          </p>

          <div className="profile-details">
            <div className="detail-item">
              <h3>LOCATION</h3>
              <p>Kano, Nigeria</p>
            </div>

            <div className="detail-item">
              <h3>EDUCATION</h3>
              <p>B.S. in Biotechnology</p>
              <p className="detail-subtext">Ebonyi State University, 2019</p><br />
              <p>Online Training and Bootcamps: Full-Stack Web Development</p>
              
              <p className="detail-subtext">ALX-Africa, 2022-2023</p>
              <br /> {/* Added line break for better spacing */}
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
