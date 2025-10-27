export const resume = {
  hero: {
    name: "Yung-Yu (Denny) Chen",
    title: "Senior Software Engineer",
    summary:
      "Senior software engineer crafting resilient backend and distributed systems for identity, data, and cloud experiences across Europe and North America.",
    location: "Berlin, Germany",
    photo: {
      src: "assets/img/profile-times-square.svg",
      alt: "Yung-Yu Chen standing in Times Square during a New York trip",
    },
    spotlights: [
      "Berlin Marathon finisher",
      "Weekend baseball & softball slugger",
      "Badminton doubles enthusiast",
      "Snowboarder chasing alpine powder",
    ],
    contact: [
      { label: "yychen1226@gmail.com", href: "mailto:yychen1226@gmail.com" },
      { label: "+49 176 3585 3683", href: "tel:+4917635853683" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/s/yung-yu-chen/",
        external: true,
      },
      { label: "GitHub", href: "https://github.com/dnychennnn", external: true },
    ],
    navigation: [
      { label: "Experience", target: "#experience" },
      { label: "Skills", target: "#skills" },
      { label: "Highlights", target: "#highlights" },
      { label: "Education", target: "#education" },
      { label: "Contact", target: "#contact" },
    ],
  },
  experience: {
    timeframe: "2015 – Present",
    roles: [
      {
        company: "AutoScout24 Group",
        title: "Senior Fullstack Software Engineer, Trust & Identity",
        location: "Berlin, Germany",
        period: "Apr 2024 – Present",
        headline: "Driving Canadian expansion with unified identity",
        highlights: [
          "Global Federated Identity: Integrated AutoTrader.ca into the central identity stack with Okta’s next-gen IDX engine, introducing OTP-based authentication and boosting critical SLOs by 50% for 50M users after decoupling from legacy Oracle systems.",
          "Trustifier: Built ML-powered real-time fraud detection, accelerating decision leads by 99% and reinforcing marketplace trust for the Canadian launch.",
        ],
      },
      {
        company: "NIO Inc.",
        title: "Senior Software Engineer, Global Autonomous Driving Data Platform",
        location: "Berlin, Germany",
        period: "Nov 2023 – Mar 2024",
        headline: "Leading zero-downtime cloud migration",
        highlights: [
          "Cloud Platform Migration: Served as lead architect for migrating the NADP data loop-back infrastructure from AWS to Azure alongside Microsoft SAs, achieving a seamless transition with zero downtime.",
        ],
      },
      {
        company: "Delivery Hero SE",
        title: "Software Engineer II, Routing Optimization",
        location: "Berlin, Germany",
        period: "Apr 2022 – Nov 2023",
        headline: "Optimizing routing for 10M+ daily orders",
        highlights: [
          "Reliability Engineering: Spearheaded the tribe-wide reliability initiative with release hardening, observability, chaos engineering, and on-call excellence for systems handling 10M+ orders daily.",
          "Monolith Dismantlement: Migrated the Akka cluster-based distributed monolith into microservices (Route, Fleet, Algo) using Quarkus and Kotlin with a hexagonal architecture design.",
          "Event Consumption Overhaul: Enhanced Tier-1 Dispatch Service performance by 40% through redesigning the Akka Cluster singleton consumer logic into distributed Reactive Akka Streams.",
          "Storage Cost Optimization: Cut storage costs by 30% by moving from AWS RDS to S3 while preserving full query capabilities.",
        ],
      },
      {
        company: "AutoScout24 GmbH",
        title: "Scala Software Engineer, Creation API & Leasing (Backend Lead)",
        location: "Munich, Germany",
        period: "Jan 2021 – Mar 2022",
        headline: "Shipping leasing experiences at startup speed",
        highlights: [
          "Systems Re-architecture: Key contributor to rebuild the listing creation pipeline with Kafka and AWS Lambda, reducing systems complexity by 30%.",
          "Internal Startup: Led the backend task force delivering leasing-focused search filters and rankings within 2.5 months using GraphQL and Elasticsearch.",
          "Customer-facing API: Delivered highly concurrent and thread-safe features for listing ingestion services, backed by extensive unit, integration, and functional testing.",
        ],
      },
    ],
  },
  skills: {
    subtitle: "What I work with",
    groups: [
      {
        name: "Identity & Security",
        items: [
          "Okta (CIAM & Workforce), Azure AD B2C, Auth0",
          "MFA & risk-based policies, SSO, SCIM provisioning",
          "Zero Trust, IAM governance, compliance automation",
        ],
      },
      {
        name: "Platform Engineering",
        items: [
          "Terraform, Azure, AWS, GCP, Kubernetes",
          "CI/CD (GitHub Actions, Azure DevOps), IaC patterns",
          "Observability, incident response, SRE practices",
        ],
      },
      {
        name: "Software Craft",
        items: [
          "C#, .NET, TypeScript/Node.js, Python",
          "Event-driven architecture, data platforms",
          "Domain-driven design, mentoring & leadership",
        ],
      },
    ],
  },
  education: {
    subtitle: "Foundations",
    entries: [
      {
        degree: "Master of Science in Computer Science",
        institution: "University of Bonn",
        location: "Bonn, Germany",
        period: "2014 – 2016",
        summary:
          "Specialized in robotics, knowledge graph embeddings, and dependable distributed systems.",
        publications: [
          {
            title: "Multi-Robot Task Allocation via Attention-based Deep Reinforcement Learning",
            href: "https://ieeexplore.ieee.org/document/9713947",
            outlet: "IEEE Transactions on Robotics",
          },
          {
            title: "SMiLE: Situated Multi-Modal Learning from Explanation",
            href: "https://aclanthology.org/2021.naacl-main.202.pdf",
            outlet: "NAACL 2021",
          },
          {
            title: "Scalable Question Answering over Multimedia Knowledge Graphs",
            href: "https://arxiv.org/pdf/2010.00989v2",
            outlet: "arXiv preprint",
          },
        ],
      },
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "National Chung Hsing University",
        location: "Taichung, Taiwan",
        period: "2010 – 2014",
        summary:
          "Built foundations in algorithms, networks, and software engineering with a focus on backend development.",
      },
    ],
  },
  contact: {
    subtitle: "Available for senior platform leadership",
    copy:
      "I help global teams deliver trustworthy identity and resilient platform experiences. Reach out for collaborations, speaking engagements, or leadership opportunities.",
    actions: [
      {
        label: "Email me",
        href: "mailto:yychen1226@gmail.com",
        style: "primary",
      },
      {
        label: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/s/yung-yu-chen/",
        style: "secondary",
        external: true,
      },
    ],
  },
  highlights: {
    title: "Life in Motion",
    subtitle: "Sports and adventures that energize my work",
    intro:
      "The same focus that I bring to resilient platforms shows up when I'm in motion. These are the experiences that keep me inspired and grounded.",
    cards: [
      {
        icon: "🏃‍♂️",
        title: "Berlin Marathon Runner",
        description:
          "Crossed the Brandenburg Gate in 2023 with a personal-best finish, balancing intense training with leading platform initiatives at work.",
      },
      {
        icon: "⚾",
        title: "Baseball & Softball Teammate",
        descriptionHtml:
          "Anchor outfield defense and cleanup hitting for Berlin’s <a href=\"http://www.dslsoftball.de/\" target=\"_blank\" rel=\"noreferrer noopener\">DSL Softball League</a>, bringing the same collaborative energy I value in engineering teams.",
      },
      {
        icon: "🏸",
        title: "Badminton Doubles Strategist",
        description:
          "Stay sharp with weekly matches that hone quick decision making, court awareness, and playful competition.",
      },
      {
        icon: "🏂",
        title: "Snowboard Explorer",
        description:
          "Chase fresh powder across the Alps and Asia, always scouting the next technical line to ride.",
      },
    ],
  },
  footer: {
    location: "Built with care in Berlin",
  },
};
