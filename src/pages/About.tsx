"use client"

import { useState, useEffect } from "react"
import "../styles/About.css"
import ProfileImage from "../assets/my_profile.jpg"

const About = () => {
  const [typedText, setTypedText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = ["cat profile.json", "ls -la skills/", "cat certifications.txt"]

  const profileData = {
    name: "Patrick Okafor Chibuike",
    title: "Software developer & Blockchain Enthusiast",
    location: "Nigeria, Kano",
    bio: "I'm a Software developer and blockchain enthusiast with 3+ years of experience in developing secure software solutions",
    interests: ["Web development", "Blockchain", "System Programming", "Artificial Intelligence", "Ethical Hacking", "Hackhathons"],
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
        } else {

          setTimeout(() => {
            setCurrentLine(0)
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
        Learn more about my background, skills, and interests in backend development and blockchain.
      </p>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={ProfileImage || "/placeholder.svg"} alt="Profile" className="profile-image" />
          </div>
          <h2 className="profile-name">Patrick Okafor Chibuike</h2>
          <p className="profile-title">Software developer & Blockchain Enthusiast</p>

          <div className="profile-details">
            <div className="detail-item">
              <h3>LOCATION</h3>
              <p>Nigeria, Kano</p>
            </div>

            <div className="detail-item">
              <h3>EDUCATION</h3>
              <p>B.S. in Biotechnology</p>
              <p className="detail-subtext">Stanford University, 2022</p>
              <p>Online Training and Bootcamps: Full-Stack Web Development</p>
              <p className="detail-subtext">ALX-Africa, 2022-2023</p>
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
              <span className="terminal-prompt">user@patoski:~$</span> {typedText}
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
