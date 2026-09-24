import { useState, useRef, useEffect, useMemo, type FormEvent, type KeyboardEvent } from "react";
import "../styles/About.css";
import ProfileImage from "../assets/my_profile.jpg";
import { getYearsOfExperience } from "../utils/experience";
import { useDocumentTitle } from "../utils/useDocumentTitle";

interface HistoryEntry {
  id: string;
  command: string;
  output: React.ReactNode;
  isError?: boolean;
}

const About = () => {
  useDocumentTitle("About");

  const yearsOfExperience = useMemo(() => getYearsOfExperience(), []);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const profileData = useMemo(
    () => ({
      name: "Patrick Okafor Chibuike",
      title: "Lead Backend & Solana Smart Contract Engineer",
      location: "Nigeria, Kano",
      bio: `Full-stack Software Engineer with ${yearsOfExperience}+ years building high-performance production systems — Solana protocols, NestJS microservices, and real-time IoT platforms.`,
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
        "AI Agents & Oracles",
        "IoT Systems",
        "Graph Intelligence",
        "System Architecture",
      ],
    }),
    [yearsOfExperience]
  );

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
    `drwxr-xr-x 10 patrick developers  4096 Aug 22 2026 Dockerfile`,
    `-rw-r--r--  1 patrick developers   512 Aug 22 2026 React.ts`,
  ];

  const certificationsOutput = [
    "========== CERTIFICATIONS ==========",
    "",
    "1. Solana/Rust Developer — Encode Club",
    "   Issued: November 2025 | Skills: Rust, Anchor, PDAs, SPL, Jupiter, Pyth",
    "",
    "2. ALX Software Engineering (Backend Specialization)",
    "   Issued: November 2024 | Skills: Systems programming, Microservices, C, Python",
    "",
    "3. ALX AI Starter Kit",
    "   Issued: 2025 | Skills: Prompt Engineering, Agent Automations, LLM Tools",
    "",
    "4. Full-Stack Web Development — Zuri x I4G",
    "   Issued: August 2022 | Skills: Django, REST APIs, Database Management",
    "",
  ];

  const experienceOutput = [
    "========== PRODUCTION EXPERIENCE ==========",
    "",
    "1. Lead Backend & IoT Cloud Engineer — AllinzucolSmart Lab",
    "   Aug 2026 – Present | NestJS, Bun, AWS IoT Core, MQTT mTLS, PostgreSQL",
    "   • Engineered mTLS ingestion pipeline processing device telemetry at <50ms",
    "   • Sub-second emergency alert broadcast over Socket.IO",
    "   • 95%+ test coverage over 200+ unit and integration test suites",
    "",
    "2. Lead Backend & Smart Contract Engineer — Zephyr Protocol",
    "   Jan 2026 – Present | Anchor, Rust, Node.js, Prisma, Helius",
    "   • Non-custodial PDA copy-vaults and execution routing via Jupiter v6",
    "   • Cut RPC indexer latency 16x (14ms → 0.88ms) with sub-block websockets",
    "   • Real-time leaderboards and historical PnL analytics engine",
    "",
    "3. Backend Engineer — KENEI Health",
    "   Dec 2024 – Mar 2025 | Node.js, Express, MongoDB",
    "   • Scaled telemedicine booking and doctor consultation APIs",
    "   • Reduced endpoint latency by 30% and patient onboarding time by 40%",
    "",
  ];

  // Initial welcome entry
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: "init-welcome",
      command: "welcome",
      output: (
        <div className="terminal-welcome">
          <p className="welcome-headline">
            Patrick Patoski Interactive Shell (zsh v5.9)
          </p>
          <p className="welcome-subtext">
            Type <span className="cmd-highlight">help</span> or tap any quick chip below to query background data.
          </p>
        </div>
      ),
    },
    {
      id: "init-bio",
      command: "cat profile.json",
      output: (
        <pre className="json-output">
          {JSON.stringify(profileData, null, 2)}
        </pre>
      ),
    },
  ]);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let output: React.ReactNode = null;
    let isError = false;

    // Command Dispatcher
    if (lower === "clear" || lower === "cls") {
      setHistory([]);
      return;
    } else if (lower === "help") {
      output = (
        <div className="terminal-help">
          <p className="help-title">Available Shell Commands:</p>
          <div className="help-grid">
            <span className="help-cmd">cat profile.json</span>
            <span className="help-desc">Print engineer overview and interests</span>
            <span className="help-cmd">ls -la skills</span>
            <span className="help-desc">List technical stack and file sizes</span>
            <span className="help-cmd">experience</span>
            <span className="help-desc">View production engineering roles</span>
            <span className="help-cmd">certifications</span>
            <span className="help-desc">View verified credentials & bootcamps</span>
            <span className="help-cmd">projects</span>
            <span className="help-desc">Summary of flagship protocols</span>
            <span className="help-cmd">resume</span>
            <span className="help-desc">Download latest verified resume PDF</span>
            <span className="help-cmd">contact</span>
            <span className="help-desc">Get email, twitter, and telegram</span>
            <span className="help-cmd">clear</span>
            <span className="help-desc">Wipe terminal history</span>
          </div>
        </div>
      );
    } else if (
      lower === "bio" ||
      lower === "whoami" ||
      lower === "cat profile.json" ||
      lower === "profile"
    ) {
      output = (
        <pre className="json-output">
          {JSON.stringify(profileData, null, 2)}
        </pre>
      );
    } else if (
      lower === "skills" ||
      lower === "ls" ||
      lower === "ls skills" ||
      lower === "ls -la skills" ||
      lower === "ls -la"
    ) {
      output = <pre className="terminal-ls-output">{skillsOutput.join("\n")}</pre>;
    } else if (
      lower === "experience" ||
      lower === "exp" ||
      lower === "cat experience.txt"
    ) {
      output = (
        <pre className="terminal-certifications">
          {experienceOutput.join("\n")}
        </pre>
      );
    } else if (
      lower === "certifications" ||
      lower === "certs" ||
      lower === "cat certifications.txt"
    ) {
      output = (
        <pre className="terminal-certifications">
          {certificationsOutput.join("\n")}
        </pre>
      );
    } else if (lower === "resume" || lower === "download resume") {
      const link = document.createElement("a");
      link.href = "/Patrick_Okafor_Resume.pdf";
      link.download = "Patrick_Okafor_Resume.pdf";
      link.click();
      output = (
        <p className="terminal-success">
          Resume download initiated (Patrick_Okafor_Resume.pdf).
        </p>
      );
    } else if (lower === "projects") {
      output = (
        <div className="terminal-projects">
          <p>• <strong>Zephyr</strong>: Solana Copy Trading Protocol (Anchor, Rust, PDAs, Jupiter)</p>
          <p>• <strong>Sentinel Oracle</strong>: AI Agent Risk Oracle (x402 Micropayments, CognoDB)</p>
          <p>• <strong>AI Room Manager</strong>: Enterprise IoT Cloud (AWS IoT Core, MQTT mTLS, NestJS)</p>
          <p>• <strong>Okaform</strong>: Sybil-Proof Survey Escrows on Solana</p>
          <p className="terminal-hint">Visit the /projects tab for live demos and repos.</p>
        </div>
      );
    } else if (lower === "contact" || lower === "email") {
      output = (
        <div className="terminal-contact">
          <p>Email: <a href="mailto:codesbypatrick@gmail.com">codesbypatrick@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/patrick-okafor-c" target="_blank" rel="noreferrer">patrick-okafor-c</a></p>
          <p>GitHub: <a href="https://github.com/patoski-patoski" target="_blank" rel="noreferrer">patoski-patoski</a></p>
          <p>X (Twitter): <a href="https://x.com/codesbypatrick" target="_blank" rel="noreferrer">@codesbypatrick</a></p>
        </div>
      );
    } else {
      isError = true;
      output = (
        <p className="terminal-error">
          zsh: command not found: {trimmed}. Type <span className="cmd-highlight">help</span> for a list of commands.
        </p>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        command: trimmed,
        output,
        isError,
      },
    ]);

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(cmdHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length === 0 || historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[nextIndex]);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Share & 3D Holographic Card State
  const holoCardRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [copiedToast, setCopiedToast] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const shareItems = useMemo(
    () => [
      {
        id: "holo-pass",
        type: "holographic" as const,
        tabName: "Digital Dev Pass",
        icon: "01",
        title: "Patrick Okafor — On-Chain & Systems Developer Pass",
        audience: "Recruiters, founders & engineering leaders reviewing core credentials.",
        pitch: `Check out Patrick Okafor's Developer Pass — Lead Backend & Solana Engineer (Rust, Anchor, NestJS, IoT): https://patrick-patoski.vercel.app/about`,
      },
      {
        id: "card-intro",
        type: "image" as const,
        tabName: "Executive Intro",
        icon: "02",
        title: "Executive Intro Card",
        audience: "Recruiters, hiring managers & investors reviewing engineering scope.",
        src: "/cards/card-1-identity.png",
        pitch: `Patrick Okafor — Lead Backend & Solana Smart Contract Engineer. Shipped Zephyr, Okaform, and Sentinel Oracle: https://patrick-patoski.vercel.app/about`,
      },
      {
        id: "card-stack",
        type: "image" as const,
        tabName: "Deep Stack",
        icon: "03",
        title: "Technical Stack & Architecture",
        audience: "CTOs, VP of Engineering & Solana/Rust technical leads.",
        src: "/cards/card-2-stack.png",
        pitch: `Technical overview for Patrick Okafor (Rust/Anchor PDAs, NestJS microservices, <50ms MQTT mTLS): https://patrick-patoski.vercel.app/tools`,
      },
      {
        id: "card-business",
        type: "image" as const,
        tabName: "Web & Consulting",
        icon: "04",
        title: "Business & Web Solutions",
        audience: "Founders, e-commerce brands & clients needing fast web applications.",
        src: "/cards/card-3-business.png",
        pitch: `Need a fast web app or backend? Patrick Okafor delivers high-performance web systems: https://patrick-patoski.vercel.app`,
      },
    ],
    []
  );

  const activeCard = shareItems[activeCardIndex];

  const handleHoloMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!holoCardRef.current) return;
    const rect = holoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      glareX: Number(((x / rect.width) * 100).toFixed(1)),
      glareY: Number(((y / rect.height) * 100).toFixed(1)),
    });
  };

  const handleHoloMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const nextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % shareItems.length);
  };

  const prevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + shareItems.length) % shareItems.length);
  };

  const copySharePitch = async () => {
    try {
      await navigator.clipboard.writeText(activeCard.pitch);
      setCopiedToast("Pitch & link copied to clipboard!");
      setTimeout(() => setCopiedToast(null), 3000);
    } catch {
      setCopiedToast("Link: https://patrick-patoski.vercel.app/about");
      setTimeout(() => setCopiedToast(null), 3000);
    }
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">
        Engineering background, systems expertise, credentials, and interactive CLI.
      </p>

      <div className="about-content">
        {/* Profile Card */}
        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={ProfileImage || "/placeholder.svg"}
              alt="Patrick Okafor"
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
            Download Resume (PDF)
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
              <h3>VERIFIED CREDENTIALS</h3>
              <p>Solana/Rust Developer — Encode Club</p>
              <p className="detail-subtext">Issued November 2025</p>
              <p>ALX Software Engineering (Backend)</p>
              <p className="detail-subtext">Issued 2024</p>
              <p>ALX AI Starter Kit</p>
              <p className="detail-subtext">Issued 2025</p>
              <p>Full-Stack Web Dev — Zuri x I4G</p>
              <p className="detail-subtext">Issued 2022</p>
            </div>
          </div>
        </div>

        {/* Interactive Terminal */}
        <div className="terminal-section" onClick={focusInput}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <button
                type="button"
                className="terminal-button red"
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                title="Clear Terminal"
                aria-label="Clear Terminal"
              />
              <button
                type="button"
                className="terminal-button yellow"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand("help");
                }}
                title="Show Help"
                aria-label="Show Help"
              />
              <button
                type="button"
                className="terminal-button green"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand("cat profile.json");
                }}
                title="Reset to Bio"
                aria-label="Reset to Bio"
              />
            </div>
            <div className="terminal-title">patrick@patoski: ~ (zsh interactive)</div>
          </div>

          <div className="terminal-body" ref={terminalBodyRef}>
            {history.map((entry) => (
              <div key={entry.id} className="terminal-entry">
                <div className="terminal-line">
                  <span className="terminal-prompt">user@patoski:~$</span>{" "}
                  <span className="terminal-cmd-text">{entry.command}</span>
                </div>
                <div className="terminal-output">{entry.output}</div>
              </div>
            ))}

            {/* Live Command Line Input */}
            <form onSubmit={handleFormSubmit} className="terminal-input-row">
              <span className="terminal-prompt">user@patoski:~$</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'skills', 'experience'..."
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command prompt"
              />
            </form>
          </div>

          {/* Quick Command Chips */}
          <div className="terminal-quick-chips">
            <span className="chips-label">Quick run:</span>
            {[
              "help",
              "cat profile.json",
              "ls -la skills",
              "experience",
              "certifications",
              "projects",
              "resume",
              "clear",
            ].map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="quick-chip"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Share & Developer Identity Hub */}
      <div className="share-section">
        <div className="share-header-row">
          <div>
            <span className="share-badge">Developer Pass & Share Hub</span>
            <h2 className="share-title">Verified Identity & Shareable Cards</h2>
            <p className="share-subtitle">
              Interactive holographic developer pass and forwardable intro cards tailored for hiring leads, CTOs, and clients.
            </p>
          </div>

          {/* Toast Notification */}
          {copiedToast && (
            <div className="share-toast" role="alert">
              {copiedToast}
            </div>
          )}
        </div>

        {/* Carousel Tabs */}
        <div className="carousel-tabs" role="tablist" aria-label="Share cards switcher">
          {shareItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeCardIndex === idx}
              className={`carousel-tab ${activeCardIndex === idx ? "active" : ""}`}
              onClick={() => setActiveCardIndex(idx)}
            >
              <span className="tab-icon">{item.icon}</span>
              <span className="tab-name">{item.tabName}</span>
            </button>
          ))}
        </div>

        {/* Carousel Stage */}
        <div className="carousel-stage">
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={prevCard}
            aria-label="Previous card"
          >
            ‹
          </button>

          <div className="carousel-card-display">
            {activeCard.type === "holographic" ? (
              /* 3D Holographic Interactive Card */
              <div
                className="holo-card-perspective"
                onMouseMove={handleHoloMouseMove}
                onMouseLeave={handleHoloMouseLeave}
              >
                <div
                  ref={holoCardRef}
                  className="holo-card"
                  style={{
                    transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  }}
                >
                  <div
                    className="holo-glare"
                    style={{
                      background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.3) 0%, rgba(20,241,149,0.18) 35%, rgba(153,69,255,0.18) 65%, transparent 85%)`,
                    }}
                  />

                  {/* Card Top Row */}
                  <div className="holo-top">
                    <div className="holo-chip-group">
                      <div className="holo-chip">
                        <span className="chip-line"></span>
                        <span className="chip-line"></span>
                        <span className="chip-line"></span>
                      </div>
                      <span className="holo-contactless">((( • )))</span>
                    </div>
                    <div className="holo-network-tag">
                      <span className="holo-pulse"></span>
                      <span>SOLANA // ANCHOR ENGINE</span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="holo-body">
                    <div className="holo-avatar-wrap">
                      <img
                        src={ProfileImage}
                        alt="Patrick Okafor"
                        className="holo-avatar"
                      />
                      <span className="holo-status-dot" aria-hidden="true" />
                    </div>
                    <div className="holo-info">
                      <span className="holo-label">VERIFIED SMART CONTRACT & BACKEND ENGINEER</span>
                      <h3 className="holo-name">PATRICK OKAFOR</h3>
                      <p className="holo-handle">@patoski • Kano, Nigeria</p>
                      <div className="holo-badges">
                        <span className="holo-badge">Rust/Anchor</span>
                        <span className="holo-badge">NestJS</span>
                        <span className="holo-badge">IoT Core</span>
                        <span className="holo-badge">AI Oracles</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Security / Verification Row */}
                  <div className="holo-credentials">
                    <div className="holo-cred-item">
                      <span className="cred-label">PROTOCOL TRACK</span>
                      <span className="cred-val">Zephyr • Okaform • Sentinel</span>
                    </div>
                    <div className="holo-cred-item">
                      <span className="cred-label">CREDENTIALS</span>
                      <span className="cred-val">Encode Club • ALX SE • ALX AI</span>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="holo-bottom">
                    <div className="holo-fingerprint">
                      <code>ID: 0xPATOSKI_7F89B2..SOL</code>
                    </div>
                    <div className="holo-exp-pill">
                      <span>{yearsOfExperience}+ YEARS EXP</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Image Card Preview Frame */
              <div className="image-card-frame">
                <img
                  src={activeCard.src}
                  alt={activeCard.title}
                  className="preview-card-img"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={nextCard}
            aria-label="Next card"
          >
            ›
          </button>
        </div>

        {/* Card Details & Action Toolbar */}
        <div className="carousel-info-bar">
          <div className="card-meta">
            <h3 className="card-meta-title">{activeCard.title}</h3>
            <p className="card-meta-audience">
              <strong>Best For:</strong> {activeCard.audience}
            </p>
          </div>

          <div className="card-actions">
            <button
              type="button"
              className="action-btn copy-btn"
              onClick={copySharePitch}
              title="Copy intro message and portfolio link"
            >
              Copy Pitch & Link
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(activeCard.pitch)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn whatsapp-btn"
              title="Forward via WhatsApp"
            >
              Share WhatsApp ↗
            </a>

            {activeCard.type === "image" ? (
              <>
                <a
                  href={activeCard.src}
                  download={activeCard.src.replace("/cards/", "")}
                  className="action-btn download-btn"
                  title="Download full-resolution card image"
                >
                  Download PNG ↓
                </a>
                <a
                  href={activeCard.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn fullscreen-btn"
                  title="View full image in new tab"
                >
                  Fullscreen ↗
                </a>
              </>
            ) : (
              <a
                href="/Patrick_Okafor_Resume.pdf"
                download="Patrick_Okafor_Resume.pdf"
                className="action-btn download-btn"
              >
                Download Resume PDF ↓
              </a>
            )}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="carousel-dots" role="tablist">
          {shareItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dot ${activeCardIndex === idx ? "active" : ""}`}
              onClick={() => setActiveCardIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
