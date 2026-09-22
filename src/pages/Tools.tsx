"use client";

import "../styles/Tools.css";

const Tools = () => {
  const tools = [
    // Languages
    {
      id: 1,
      name: "TypeScript",
      description:
        "Primary language across Zephyr, Okaform, and Sentinel — strict mode with zero-any tolerance, TypeBox validation, and typed domain errors.",
      icon: "https://skillicons.dev/icons?i=ts",
      link: "https://www.typescriptlang.org",
    },
    {
      id: 2,
      name: "Rust",
      description:
        "Anchor programs and systems work — Zephyr vault PDAs, Okaform escrow instructions, and high-assurance on-chain state machines.",
      icon: "https://skillicons.dev/icons?i=rust",
      link: "https://www.rust-lang.org",
    },
    {
      id: 3,
      name: "Python",
      description:
        "TCP search server (100+ concurrent clients, 7–15ms queries), ProjectRUGGUARD risk bot for 2,000+ users, and automation tooling.",
      icon: "https://skillicons.dev/icons?i=py",
      link: "https://www.python.org",
    },
    {
      id: 4,
      name: "JavaScript",
      description:
        "Interactive frontends and Node services — the base language behind the React dashboards and Express APIs.",
      icon: "https://skillicons.dev/icons?i=js",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 5,
      name: "Bash",
      description:
        "Shell automation, deployment scripts, and system administration across Linux servers and CI pipelines.",
      icon: "https://skillicons.dev/icons?i=bash",
      link: "https://www.gnu.org/software/bash/",
    },
    {
      id: 6,
      name: "C",
      description:
        "Systems programming foundation — UNIX shell, printf replica, and low-level protocol understanding behind the TCP server work.",
      icon: "https://skillicons.dev/icons?i=c",
      link: "https://en.cppreference.com/w/c",
    },
    // Blockchain
    {
      id: 7,
      name: "Solana",
      description:
        "Non-custodial PDA vaults, SOL escrow, SIWS auth, ALTs-batched payouts, and sub-block indexers across Zephyr and Okaform.",
      icon: "https://img.shields.io/badge/Solana-9945FF?style=for-the-badge&logo=solana&logoColor=white",
      link: "https://solana.com",
    },
    {
      id: 8,
      name: "Anchor",
      description:
        "Full program lifecycle — 6-instruction Okaform escrow program with 25+ integration tests, 5-PDA Zephyr governance without redeploys.",
      icon: "https://img.shields.io/badge/Anchor-000000?style=for-the-badge&logoColor=white",
      link: "https://www.anchor-lang.com",
    },
    // Backend
    {
      id: 9,
      name: "Node.js",
      description:
        "Runtime behind every backend here — Express telemedicine APIs, NestJS microservices, and real-time ingestion pipelines.",
      icon: "https://skillicons.dev/icons?i=nodejs",
      link: "https://nodejs.org",
    },
    {
      id: 10,
      name: "NestJS",
      description:
        "Structured backends for Okaform, Sentinel, and AllinzucolSmart — TypeBox pipes, custom exceptions, RBAC, and 95%+ test coverage.",
      icon: "https://skillicons.dev/icons?i=nestjs",
      link: "https://nestjs.com",
    },
    {
      id: 11,
      name: "Bun",
      description:
        "Fast runtime for the NestJS services and Sentinel oracle — dev watch mode, builds, and unit-test runs.",
      icon: "https://skillicons.dev/icons?i=bun",
      link: "https://bun.sh",
    },
    {
      id: 12,
      name: "Express.js",
      description:
        "Lightweight APIs — KENEI Health telemedicine platform (-30% latency) and MemeStream agent services.",
      icon: "https://skillicons.dev/icons?i=express",
      link: "https://expressjs.com",
    },
    {
      id: 13,
      name: "Actix",
      description:
        "High-throughput Rust web services from the resume stack for systems-level HTTP workloads.",
      icon: "https://skillicons.dev/icons?i=actix",
      link: "https://actix.rs",
    },
    {
      id: 14,
      name: "Flask",
      description:
        "Lightweight Python APIs for rapid prototypes and internal tooling.",
      icon: "https://skillicons.dev/icons?i=flask",
      link: "https://flask.palletsprojects.com",
    },
    {
      id: 15,
      name: "Django",
      description:
        "Full-stack Python framework from Zuri training — ORM, auth, and admin-backed product builds.",
      icon: "https://skillicons.dev/icons?i=django",
      link: "https://www.djangoproject.com",
    },
    // Data
    {
      id: 16,
      name: "PostgreSQL",
      description:
        "Zephyr Sharpe/AUM/ROI analytics and AllinzucolSmart RDS store — indexed queries, Prisma ORM, verifiable leaderboards.",
      icon: "https://skillicons.dev/icons?i=postgres",
      link: "https://www.postgresql.org",
    },
    {
      id: 17,
      name: "Prisma",
      description:
        "Type-safe ORM over the Zephyr analytics DB — migrations, rolling metrics, and trader rankings.",
      icon: "https://skillicons.dev/icons?i=prisma",
      link: "https://www.prisma.io",
    },
    {
      id: 18,
      name: "MongoDB",
      description:
        "Flexible form schemas and response bodies for Okaform, plus KENEI Health document stores.",
      icon: "https://skillicons.dev/icons?i=mongodb",
      link: "https://www.mongodb.com",
    },
    {
      id: 19,
      name: "Redis",
      description:
        "Caching, BullMQ queues (MemeStream 99.5% uptime), ElastiCache sessions, and rate-limiting backends.",
      icon: "https://skillicons.dev/icons?i=redis",
      link: "https://redis.io",
    },
    {
      id: 20,
      name: "MySQL",
      description:
        "Relational workloads and legacy app stores with tuned indexes and migrations.",
      icon: "https://skillicons.dev/icons?i=mysql",
      link: "https://www.mysql.com",
    },
    {
      id: 21,
      name: "SQLite",
      description:
        "Zero-config embedded store for local dev, tests, and lightweight edge persistence.",
      icon: "https://skillicons.dev/icons?i=sqlite",
      link: "https://www.sqlite.org",
    },
    // Messaging / realtime
    {
      id: 22,
      name: "MQTT",
      description:
        "AllinzucolSmart telemetry over AWS IoT Core with mutual TLS — normalized event streams at <50ms processing latency.",
      icon: "https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logoColor=white",
      link: "https://mqtt.org",
    },
    {
      id: 23,
      name: "Socket.IO",
      description:
        "Sub-second WebSocket broadcast for emergency alerts and live dashboards in the IoT platform.",
      icon: "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white",
      link: "https://socket.io",
    },
    {
      id: 24,
      name: "RabbitMQ",
      description:
        "Durable message queues for decoupled workers and event-driven pipelines.",
      icon: "https://skillicons.dev/icons?i=rabbitmq",
      link: "https://www.rabbitmq.com",
    },
    // Frontend
    {
      id: 25,
      name: "React",
      description:
        "Dashboards for Zephyr vaults, Okaform form builder with live preview, and Sentinel risk radar + telemetry stream.",
      icon: "https://skillicons.dev/icons?i=react",
      link: "https://reactjs.org",
    },
    {
      id: 26,
      name: "Next.js",
      description:
        "SSR/SSG React apps with routing, caching, and performance optimizations for production frontends.",
      icon: "https://skillicons.dev/icons?i=nextjs",
      link: "https://nextjs.org",
    },
    {
      id: 27,
      name: "Tailwind CSS",
      description:
        "Utility-first styling across the Zephyr, Okaform, and Sentinel frontends — dark terminals to form builders.",
      icon: "https://skillicons.dev/icons?i=tailwind",
      link: "https://tailwindcss.com",
    },
    {
      id: 28,
      name: "Vite",
      description:
        "Instant-dev frontend tooling powering the React + Tailwind dashboards.",
      icon: "https://skillicons.dev/icons?i=vite",
      link: "https://vitejs.dev",
    },
    // DevOps / cloud / testing
    {
      id: 29,
      name: "Docker",
      description:
        "Containerized services from MemeStream bots to NestJS APIs — consistent dev-to-prod environments.",
      icon: "https://skillicons.dev/icons?i=docker",
      link: "https://www.docker.com",
    },
    {
      id: 30,
      name: "AWS",
      description:
        "AllinzucolSmart on ECS Fargate + IoT Core + RDS Postgres + ElastiCache — mTLS provisioning to production deploys.",
      icon: "https://skillicons.dev/icons?i=aws",
      link: "https://aws.amazon.com",
    },
    {
      id: 31,
      name: "GitHub Actions",
      description:
        "CI/CD for tests, lint, and zero-downtime deploys (MemeStream PM2 pipeline, NestJS services).",
      icon: "https://skillicons.dev/icons?i=githubactions",
      link: "https://github.com/features/actions",
    },
    {
      id: 32,
      name: "Nginx",
      description:
        "Reverse proxy, load balancing, and TLS termination in front of Node and Rust services.",
      icon: "https://skillicons.dev/icons?i=nginx",
      link: "https://www.nginx.com",
    },
    {
      id: 33,
      name: "Grafana",
      description:
        "Operational dashboards — room turnaround, device health, and API latency telemetry.",
      icon: "https://skillicons.dev/icons?i=grafana",
      link: "https://grafana.com",
    },
    {
      id: 34,
      name: "Linux",
      description:
        "Daily driver — systemd services (TCP server 99.9% uptime), hardening, and server tuning.",
      icon: "https://skillicons.dev/icons?i=linux",
      link: "https://www.linux.org",
    },
    {
      id: 35,
      name: "Jest",
      description:
        "200+ unit and integration tests at 95%+ coverage on the IoT platform; 78 passing on Okaform backend.",
      icon: "https://skillicons.dev/icons?i=jest",
      link: "https://jestjs.io",
    },
  ];

  return (
    <div className="tools-container">
      <h1 className="tools-title">Tools & Stack</h1>
      <p className="tools-subtitle">
        The stack behind Zephyr, Okaform, Sentinel, and the IoT platform — from
        Anchor programs to production APIs.
      </p>

      <div className="tools-grid">
        {tools.map((tool) => (
          <div key={tool.id} className="tool-card">
            <img
              src={tool.icon}
              alt={tool.name}
              className={
                tool.icon.includes("skillicons.dev")
                  ? "tool-skillicon"
                  : "tool-badge"
              }
              loading="lazy"
            />
            <h3 className="tool-name">{tool.name}</h3>
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
