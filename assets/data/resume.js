export const resume = {
    hero: {
        name: "Yung-Yu (Denny) Chen",
        title: "Senior Software Engineer",
        summary:
            "Senior software engineer crafting resilient backend and distributed systems for identity, data, and cloud experiences across the globe.",
        location: "Berlin, Germany",
        photo: {
            src: "assets/img/profile-denny-mountains.png",
            alt: "Denny sitting on a red spring rider in Eng Alm",
        },
        spotlights: [
            "Identity federation for 50M+ users",
            "Real-time route optimization for 10M+ daily orders",
            "Distributed systems reliability leadership",
            "Cloud and data migration strategist",
            "Functional programming champion",
        ],
        contact: [
            { label: "yychen1226@gmail.com", href: "mailto:yychen1226@gmail.com" },
            {
                label: "Show phone number",
                reveal: {
                    label: "+49 176 3585 3683",
                    href: "tel:+4917635853683",
                },
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/yung-yu-chen/",
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
        timeframe: "2021 – Present",
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
                    "MFA & risk-based policies, SSO provisioning",
                    "Zero Trust, IAM governance, fraud detection",
                ],
            },
            {
                name: "Platform Engineering",
                items: [
                    "Terraform, Azure, AWS, GCP, Kubernetes",
                    "CI/CD (GitHub Actions, Drone CI, Spinnaker CD), IaC patterns",
                    "Observability, incident response, SRE practices",
                ],
            },
            {
                name: "Software Craft",
                items: [
                    "Scala (functional programming), C#, .NET, TypeScript/Node.js, Python",
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
                period: "2018 – 2020",
                summary:
                    "Specialized in robotics, knowledge graph embeddings, and dependable distributed systems.",
                publications: [
                    {
                        title:
                            "Temporal Knowledge Graph Completion using a Linear Temporal Regularizer and Multivector Embeddings",
                        href: "https://aclanthology.org/2021.naacl-main.202.pdf",
                        outlet: "NAACL 2021",
                    },
                    {
                        title: "A game engine-based millimeter wave radar simulation",
                        href:
                            "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11759/1175904/A-game-engine-based-millimeter-wave-radar-simulation/10.1117/12.2587595.short?SSO=1",
                        outlet: "SPIE Digital Library",
                    },
                ],
            },
            {
                degree: "Bachelor of Science in Computer Science",
                institution: "National Chung Hsing University",
                location: "Taichung, Taiwan",
                period: "2013 – 2017",
                summary:
                    "Built foundations in algorithms, networks, and software engineering with a focus on machine learning.",
                publications: [
                    {
                        title:
                            "Personalized Item-of-Interest Recommendation on Storage Constrained Smartphone based on Word Embedding Quantization",
                        href:
                            "https://link.springer.com/chapter/10.1007/978-3-319-93040-4_48",
                        outlet: "PAKDD 2018"
                        
                    }
                ]
            },
        ],
    },
    contact: {
        subtitle: "Available for senior backend leadership",
        copy:
            "I help global teams deliver trustworthy identity and resilient distributed systems. Reach out for collaborations, speaking engagements, or leadership opportunities.",
        actions: [
            {
                label: "Email me",
                href: "mailto:yychen1226@gmail.com",
                style: "primary",
            },
            {
                label: "Connect on LinkedIn",
                href: "https://www.linkedin.com/in/yung-yu-chen/",
                style: "secondary",
                external: true,
            },
        ],
    },
    highlights: {
        title: "Life in Motion",
        subtitle: "Sports and adventures that energize my work",
        intro:
            "The same focus that I bring to resilient systems shows up when I'm in motion. These are the experiences that keep me inspired and grounded.",
        cards: [
            {
                icon: "🏃‍♂️",
                title: "Berlin Marathon Runner",
                backgroundImage: "/assets/img/berlin-marathon.png",
                description:
                    "Crossed the Brandenburg Gate in 2025 with a personal-best finish, balancing intense training with steering large-scale launches at work.",
            },
            {
                icon: "⚾",
                title: "Baseball & Softball Teammate",
                backgroundImage: "/assets/img/softball-berlin.png",
                descriptionHtml:
                    "Anchor outfield defense and cleanup hitting for Berlin’s <a href=\"http://www.dslsoftball.de/\" target=\"_blank\" rel=\"noreferrer noopener\">DSL Softball League</a>, bringing the same collaborative energy I value in engineering teams.",
            },
            {
                icon: "🏸",
                title: "Badminton Doubles Strategist",
                backgroundImage: "/assets/img/badminton-yonex.png",
                description:
                    "Stay sharp with weekly matches that hone quick decision making, court awareness, and playful competition.",
            },
            {
                icon: "🏂",
                title: "Snowboard Explorer",
                backgroundImage: "/assets/img/snowboarding-berlin.png",
                description:
                    "Chase fresh powder across the Alps and Asia, always scouting the next technical line to ride.",
            },
        ],
    },
    footer: {
        location: "Built with care in Berlin",
    },
};