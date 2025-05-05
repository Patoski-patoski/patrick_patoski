"use client"

import { useState, useEffect } from "react"
import "../styles/About.css"
import ProfileImage from "../assets/profile.jpg"

const About = () => {
  const [typedText, setTypedText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = ["cat profile.json", "ls -la skills/", "cat certifications.txt"]

  const profileData = {
    name: "John Doe",
    title: "Cybersecurity Specialist & Penetration Tester",
    bio: "I'm a cybersecurity professional with 5+ years of experience in penetration testing, vulnerability assessment, and security research.",
    interests: ["Network Security", "Threat Intelligence", "Security Automation", "CTF Competitions"],
  }

  useEffect(() => {
    // Simulate typing effect for terminal commands
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < terminalLines[currentLine].length) {
        setTypedText((prev) => prev + terminalLines[currentLine][i])
        i++
      } else {
        clearInterval(typingInterval)
        // Move to next line after delay
        if (currentLine < terminalLines.length - 1) {
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1)
            setTypedText("")
          }, 1000)
        }
      }
    }, 50)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [currentLine])

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">
        Learn more about my background, skills, and interests in cybersecurity and technology.
      </p>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={ProfileImage || "/placeholder.svg"} alt="Profile" className="profile-image" />
          </div>
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-title">Cybersecurity Specialist</p>

          <div className="profile-details">
            <div className="detail-item">
              <h3>LOCATION</h3>
              <p>San Francisco, CA</p>
            </div>

            <div className="detail-item">
              <h3>EDUCATION</h3>
              <p>M.S. in Cybersecurity</p>
              <p className="detail-subtext">Stanford University, 2022</p>
              <p>B.S. in Computer Science</p>
              <p className="detail-subtext">MIT, 2020</p>
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
              <span className="terminal-prompt">user@penasecurity:~$</span> {typedText}
              {showCursor && <span className="terminal-cursor">_</span>}
            </div>

            {currentLine >= 1 && (
              <div className="terminal-output">
                <pre className="json-output">{JSON.stringify(profileData, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
