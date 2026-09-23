import "../styles/Writeups.css"
import { useDocumentTitle } from "../utils/useDocumentTitle";

const Writeups = () => {
  useDocumentTitle("Writeups");
  const writeups = [
    {
      id: 2,
      title: "Atomic Copy Trading on Solana: Why We Can't Always Bundle Trades",
      date: "August 17, 2026",
      excerpt:
        "At Zephyr, our goal is atomic execution of every master trade with its copy trades in a single block. How we're optimising operations, fallback strategies, and bug fixes to solidify our moat. Live: app.zephyrlabs.gg.",
      tags: ["Solana", "Copy Trading", "Zephyr"],
      link: "https://www.linkedin.com/pulse/atomic-copy-trading-solana-why-we-cant-always-bundle-how-okafor-kmlie/",
    },
    {
      id: 3,
      title: "How We Built a Zero-Downtime CI/CD Pipeline for a Web3 Monorepo",
      date: "August 7, 2026",
      excerpt:
        "No more 'it works on my machine' across a Solana program, indexer, analytics worker, backend, and web app. Two-phase pipeline: strict validation in ci.yml, container delivery in deploy.yml — all on push to VPS.",
      tags: ["CI/CD", "DevOps", "Web3"],
      link: "https://www.linkedin.com/pulse/how-we-built-zero-downtime-cicd-pipeline-web3-monorepo-patrick-okafor-hg9pe/",
    },
    {
      id: 4,
      title: "Why mmap Beat Every Search Algorithm I Tried",
      date: "December 24, 2025",
      excerpt:
        "mmap is the cheat code for searching massive files without blowing RAM. Target: ~250K lines in ≤40ms under load. Boyer–Moore and KMP were optimal on paper but still read line-by-line into user space; grep/ripgrep via subprocess added IPC overhead. The win was fixing the I/O path, not the algorithm.",
      tags: ["mmap", "Performance", "Systems"],
      link: "https://www.linkedin.com/pulse/why-mmap-beat-every-search-algorithm-i-tried-patrick-okafor-1khhc/",
    },
    {
      id: 1,
      title: "Resolving Unintended 429 (Too Many Requests) Errors",
      date: "April 20, 2026",
      excerpt:
        "Our RPC kept throwing 429s even when I was the only user online. How I debugged a production error exhausting our Helius RPC — two bugs: our own rate-limit stacking AND an expired Helius endpoint.",
      tags: ["Solana", "Helius", "Debugging"],
      link: "https://www.linkedin.com/pulse/resolving-unintended-429-too-many-requests-errors-shared-okafor-5ooqe/",
    },
  ].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="writeups-container">
      <h1 className="writeups-title">Writeups</h1>
      <p className="writeups-subtitle">Production debugging notes and engineering articles from LinkedIn.</p>

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
              <a
                href={writeup.link}
                className="read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Writeups
