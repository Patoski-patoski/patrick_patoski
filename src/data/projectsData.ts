export type ProjectCategory =
  | "All"
  | "Solana & Web3"
  | "Backend & IoT"
  | "AI & Automation"
  | "Systems & C";

export interface Project {
  id: number;
  title: string;
  category: "Solana & Web3" | "Backend & IoT" | "AI & Automation" | "Systems & C";
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  status?: string;
  featured?: boolean;
  metric?: string;
}

export const projectsData: Project[] = [
  {
    id: 9,
    title: "Zephyr",
    category: "Solana & Web3",
    featured: true,
    metric: "14ms → 0.88ms RPC Latency",
    description:
      "Decentralized copy-trading protocol on Solana. Architected Master/Copier vaults via Anchor PDAs, a real-time sub-block Helius indexer, Pyth/Jupiter v6 execution routes, and verifiable Prisma leaderboards.",
    technologies: ["Solana", "Anchor", "Rust", "Express", "Prisma", "React"],
    image: "/zephyr.webp",
    live: "https://app.zephyrlabs.gg/",
    status: "Production",
  },
  {
    id: 11,
    title: "Sentinel Oracle",
    category: "AI & Automation",
    featured: true,
    metric: "HTTP 402 Moove Micropayments",
    description:
      "Autonomous on-chain risk oracle for AI trading agents. Leverages CognoDB graph queries to detect wash trading rings, Sybil clusters, and peeling chains, monetized per-query via Solana x402 micropayments.",
    technologies: ["NestJS", "Bun", "CognoDB", "Solana", "x402", "React"],
    image: "/sentinel.webp",
    github: "https://github.com/Patoski-patoski/sentinel-oracle",
    status: "Live Protocol",
  },
  {
    id: 12,
    title: "AI Room Manager (IoT)",
    category: "Backend & IoT",
    featured: true,
    metric: "<50ms Ingestion • 95%+ Coverage",
    description:
      "Enterprise IoT hospitality platform. Engineered the NestJS/Bun cloud backend with AWS IoT Core mutual TLS (mTLS) telemetry ingestion, sub-second emergency broadcast over Socket.IO, room lifecycle FSMs, and 6-tier RBAC.",
    technologies: ["NestJS", "Bun", "MQTT", "PostgreSQL", "AWS", "Socket.IO"],
    image: "/iot.webp",
    status: "In Progress",
  },
  {
    id: 10,
    title: "Okaform",
    category: "Solana & Web3",
    featured: true,
    metric: "Sybil-Proof Escrow Vaults",
    description:
      "Decentralized survey and bounties platform on Solana. Built Anchor-based escrow programs holding SOL rewards, automated wallet-age & funding graph Sybil verification, on-chain reputation badges, and weighted payouts.",
    technologies: ["Solana", "Anchor", "Rust", "NestJS", "MongoDB", "React"],
    image: "/okaform.svg",
    github: "https://github.com/Patoski-patoski/okaform",
    live: "https://okaform.vercel.app",
    status: "Live MVP",
  },
  {
    id: 1,
    title: "MemeStream Agent",
    category: "AI & Automation",
    description:
      "Autonomous multimodal agent built with the Mastra framework and Nosana decentralized compute. Searches internet memes, retrieves templates, and delivers contextual humor analysis and usage metadata.",
    technologies: ["Mastra", "Gemini AI", "Nosana", "TypeScript", "Playwright", "Redis"],
    image: "/meme.jpg",
    github: "https://github.com/Patoski-patoski/MemeStream-Agent",
  },
  {
    id: 2,
    title: "Twitter Project RugGuard Bot",
    category: "AI & Automation",
    metric: "2,000+ Community Queries",
    description:
      "Automated X (Twitter) security bot performing real-time account trustworthiness analysis, contract safety verification, and risk auditing for the Solana DeFi ecosystem.",
    technologies: ["Python", "Twitter(X) API", "NLP", "Solana"],
    image: "/xbot.jpg",
    github: "https://github.com/Patoski-patoski/twitter_bot_projectruggaurd",
  },
  {
    id: 4,
    title: "Vybe Crypto Telemetry Bot",
    category: "Solana & Web3",
    description:
      "Real-time crypto telemetry bot powered by Vybe APIs. Provides instant whale alert notifications, token metrics, and seamless deep-linking to AlphaVybe analytics.",
    technologies: ["Telegram API", "Node.js", "Express", "Vybe API", "TypeScript"],
    image: "/vybe.jpg",
    github: "https://github.com/Patoski-patoski/vybe_telegram_cryptobot",
  },
  {
    id: 7,
    title: "Soldash",
    category: "Solana & Web3",
    description:
      "Solana portfolio dashboard allowing users to track multi-account balances, inspect transaction histories, and execute token transfers with real-time price feeds.",
    technologies: ["Solana", "Next.js", "Express", "TypeScript"],
    image: "/soldash.jpg",
    github: "https://github.com/patoski-patoski/soldash",
  },
  {
    id: 8,
    title: "Copperx Payout Bot",
    category: "Backend & IoT",
    description:
      "Telegram-integrated payout bot for Copperx Offramp. Enables users to manage crypto balances, execute instant fiat payouts, and receive webhook notifications.",
    technologies: ["Node.js", "Express", "TypeScript", "Telegram API"],
    image: "/copperxlogo.jpg",
    github: "https://github.com/Patoski-patoski/copperx-payout-bot",
  },
  {
    id: 3,
    title: "Bloggify",
    category: "Backend & IoT",
    description:
      "Full-stack publishing application with JWT authentication, role authorization, Markdown rendering, and optimized MongoDB aggregation pipelines.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "/article.jpg",
    github: "https://github.com/Patoski-patoski/bloggify",
  },
  {
    id: 5,
    title: "UNIX Command-Line Shell",
    category: "Systems & C",
    metric: "Zero Memory Leaks",
    description:
      "Custom POSIX-compliant UNIX shell written from scratch in C. Handles command parsing, piping, process lifecycle management (fork/execve), file redirection, and built-ins.",
    technologies: ["C", "Bash", "POSIX Systems"],
    image: "/simple_shell.jpg",
    github: "https://github.com/Patoski-patoski/simple_shell",
  },
  {
    id: 6,
    title: "Custom C Printf",
    category: "Systems & C",
    description:
      "Re-implementation of the standard C printf function. Handles specifiers (%d, %i, %s, %c, %x, %p) and precision flags with custom buffered output routines.",
    technologies: ["C", "Low-Level I/O"],
    image: "/simple_shell.jpg",
    github: "https://github.com/DeyonOba/printf",
  },
];
