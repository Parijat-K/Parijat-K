export const resumeData = {
  header: {
    name: "Dr. Alex Dev",
    title: "Senior Software Engineer & Researcher",
    summary: "Polyglot engineer and researcher with a Ph.D. in Distributed Systems. Expert in building scalable enterprise backend systems, data science pipelines, and cross-platform mobile applications. Proven track record of bridging the gap between academic research and production-grade engineering in Java, .NET, and Python ecosystems.",
    location: "San Francisco, CA",
    email: "alex.dev@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/alexdev",
    github: "github.com/alexdev",
    website: "alexdev.io"
  },
  skills: [
    {
      category: "AI & Agent Systems",
      items: ["Agent Dev (Pydantic)", "LLMs & RAG", "LangChain", "Vector Databases", "OpenAI API", "Semantic Kernel"]
    },
    {
      category: "Algorithmic Optimization",
      items: ["Constraint Programming", "Discrete Optimization", "Google OR-Tools", "Distributed Consensus"]
    },
    {
      category: "Java Ecosystem",
      items: ["Java 17", "Spring Boot", "Hibernate", "JPA", "Gradle", "Maven", "JUnit 5", "Kafka", "Quarkus"]
    },
    {
      category: ".NET Stack",
      items: ["C#", ".NET MAUI", "ASP.NET Core", "Blazor", "Entity Framework", "LINQ", "Azure Functions", "SQL Server"]
    },
    {
      category: "Python & Data",
      items: ["Python 3.11", "Django", "FastAPI", "Pandas", "NumPy", "PyTorch", "Celery", "Jupyter"]
    },
    {
      category: "Frontend & Mobile",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Flutter", "Kotlin Multiplatform (KMP)"]
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "Terraform", "GitHub Actions", "Linux"]
    }
  ],
  experience: [
    {
      company: "TechFlow Solutions",
      period: "2021 – Present",
      roles: [
        {
          title: "Senior Backend Engineer",
          period: "Jan 2023 – Present",
          description: [
            "Architected and migrated the legacy monolith to a microservices architecture using Java 17 and Spring Boot, improving system scalability by 300%.",
            "Designed high-throughput event processing pipelines using Apache Kafka and Hibernate."
          ]
        },
        {
          title: "Software Engineer",
          period: "Jun 2021 – Dec 2022",
          description: [
            "Implemented a rigorous CI/CD pipeline using GitHub Actions, reducing deployment time from 1 hour to 10 minutes.",
            "Mentored junior developers on C# and .NET Core best practices during a strategic platform integration."
          ]
        }
      ]
    },
    {
      company: "Innovate Corp",
      period: "2018 – 2021",
      roles: [
        {
          title: "Full Stack Engineer",
          period: "2018 – 2021",
          description: [
            "Developed and maintained RESTful APIs with Python (Django) used by over 50,000 daily active users.",
            "Optimized database queries in PostgreSQL and SQL Server, reducing average query time by 50ms.",
            "Collaborated with data science teams to integrate PyTorch models into production web services."
          ]
        }
      ]
    },
    {
      company: "StartUp Inc",
      period: "2017 – 2018",
      roles: [
        {
          title: "Junior Developer",
          period: "2017 – 2018",
          description: [
            "Built responsive UI components using React and Styled Components.",
            "Assisted in backend development with Python for internal data tools.",
            "Fixed critical bugs in the production environment, improving application stability."
          ]
        }
      ]
    },
    {
      company: "Legacy Systems Inc",
      period: "2015 – 2017",
      roles: [
        {
          title: "Software Developer Intern",
          period: "2015 – 2017",
          description: [
            "Maintained legacy ASP.NET Web Forms applications and assisted in migration to MVC.",
            "Wrote SQL scripts for data patching and reporting.",
            "Participated in daily stand-ups and sprint planning sessions."
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      name: "CloudMonitor",
      tech: "Go, React, AWS",
      tags: ["Go", "Distributed Systems", "React", "AWS", "Monitoring"],
      description: "An open-source server monitoring tool that visualizes real-time metrics.",
      longDescription: "CloudMonitor is a high-performance observability tool designed to replace expensive SaaS solutions for mid-sized clusters. It collects CPU, Memory, and I/O metrics via a lightweight Go agent and visualizes them in a real-time React dashboard.",
      challenges: "Handling high-cardinality metrics ingestion without overwhelming the time-series database. Implemented a custom buffering strategy in the Go agent to batch writes.",
      outcome: "Adopted by 3 major startups, 500+ stars on GitHub, and reduces monitoring costs by approx 60%.",
      link: "github.com/alexdev/cloudmonitor",
      featured: true
    },
    {
      id: "p2",
      name: "TaskMaster",
      tech: "C#, .NET, Azure",
      tags: ["C#", ".NET", "Real-time", "Azure", "Productivity"],
      description: "A collaborative project management app with real-time updates using SignalR.",
      longDescription: "TaskMaster allows distributed teams to manage Kanban boards with sub-second latency updates. Built on .NET 8 and utilizing Azure SignalR Service for managing websocket connections at scale.",
      challenges: "Ensuring state consistency across multiple clients during network partitions. Utilized a Last-Write-Wins CRDT approach for conflict resolution.",
      outcome: "Scaled to 10k concurrent users during stress testing with <100ms latency.",
      link: "taskmaster.app",
      featured: true
    },
    {
      id: "p3",
      name: "ShopStream",
      tech: "Kafka, Java, Redis",
      tags: ["Java", "Kafka", "E-commerce", "Big Data", "Redis"],
      description: "A high-throughput event streaming platform for e-commerce analytics.",
      longDescription: "ShopStream ingests clickstream data from e-commerce frontends and processes user behavior patterns in real-time to generate personalized recommendations.",
      challenges: "Processing 50k events/sec with strict ordering guarantees for specific user sessions.",
      outcome: "Improved recommendation click-through rate by 15% due to real-time context awareness.",
      link: "github.com/alexdev/shopstream",
      featured: true
    },
    {
      id: "p4",
      name: "DataLake Connect",
      tech: "Python, Spark, AWS Glue",
      tags: ["Python", "Data Engineering", "AWS", "Spark"],
      description: "ETL pipeline framework processing 5TB+ daily data for analytics.",
      longDescription: "A configuration-driven ETL framework that abstracts away the boilerplate of AWS Glue jobs, allowing data analysts to define pipelines using YAML.",
      challenges: "Optimizing Spark memory management for skewed datasets.",
      outcome: "Reduced pipeline development time from 2 weeks to 2 days.",
      link: "github.com/alexdev/datalake",
      featured: false
    },
    {
      id: "p5",
      name: "SecureAuth-SDK",
      tech: "TypeScript, Node.js",
      tags: ["Security", "TypeScript", "Node.js", "Auth"],
      description: "Authentication middleware used by 15+ internal microservices.",
      longDescription: "A standardized JWT validation and rotation library compliant with OAuth 2.1 standards.",
      challenges: "Maintaining backward compatibility while migrating from legacy token formats.",
      outcome: "Eliminated security vulnerabilities related to token handling across the organization.",
      link: "github.com/alexdev/secureauth",
      featured: false
    },
    {
      id: "p6",
      name: "KMP-Commons",
      tech: "Kotlin Multiplatform",
      tags: ["Mobile", "Kotlin", "KMP", "Android", "iOS"],
      description: "A shared utility library for Android and iOS networking logic.",
      longDescription: "Demonstrates the power of Kotlin Multiplatform by sharing 90% of business logic between native Android and iOS apps.",
      challenges: "Bridging Kotlin coroutines with Swift's async/await pattern seamlessly.",
      outcome: "Published on Maven Central; used in 3 production apps.",
      link: "github.com/alexdev/kmp-commons",
      featured: false
    }
  ],
  publications: [
    {
      id: "pub1",
      title: "Optimizing Distributed Ledger Latency in High-Frequency Trading Environments",
      conference: "IEEE International Conference on Blockchain",
      year: "2024",
      tags: ["Blockchain", "Distributed Systems", "Performance", "FinTech"],
      abstract: "This paper proposes a novel consensus mechanism tailored for high-frequency trading (HFT) environments where microsecond latency is critical. By introducing a 'Optimistic Pipeling' approach to block verification, we demonstrate a 40% reduction in commit latency compared to standard PBFT implementations.",
      link: "ieee.org/explore/...",
      featured: true
    },
    {
      id: "pub2",
      title: "A Comparative Analysis of Microservices vs. Monolithic Architectures in FinTech",
      conference: "Journal of Systems and Software",
      year: "2023",
      tags: ["Software Architecture", "Microservices", "FinTech"],
      abstract: "A longitudinal study of three major FinTech platform migrations. We analyze the trade-offs between operational complexity and development velocity, providing a decision framework for CTOs.",
      link: "sciencedirect.com/...",
      featured: true
    },
    {
      id: "pub3",
      title: "Leveraging Kotlin Multiplatform for Cross-Organizational Mobile Code Sharing",
      conference: "DroidCon SF",
      year: "2022",
      tags: ["Mobile", "KMP", "Software Engineering"],
      abstract: "Case study on adopting KMP in a large organization. We discuss the cultural and technical hurdles of sharing code between iOS and Android teams.",
      link: "droidcon.com/...",
      featured: true
    },
    {
      id: "pub4",
      title: "Consensus Algorithms in Low-Power IoT Networks",
      conference: "ACM IoT Conference",
      year: "2021",
      tags: ["IoT", "Blockchain", "Distributed Systems"],
      abstract: "Evaluating the energy efficiency of PoS vs PoW in battery-constrained IoT sensor networks.",
      link: "acm.org/...",
      featured: false
    },
    {
      id: "pub5",
      title: "Security Implications of Sharding in Blockchain",
      conference: "International Journal of Network Security",
      year: "2020",
      tags: ["Security", "Blockchain"],
      abstract: "An analysis of cross-shard attack vectors in proposed Ethereum 2.0 specifications.",
      link: "ijns.org/...",
      featured: false
    }
  ],
  blogs: [
    {
      id: "b1",
      title: "Why I Switched from REST to gRPC for Internal Microservices",
      date: "Oct 12, 2024",
      readTime: "8 min read",
      tags: ["Microservices", "gRPC", "Performance"],
      summary: "REST is great for public APIs, but for internal communication, the overhead of JSON parsing was killing our throughput. Here is how we migrated to Protocol Buffers.",
      content: "Detailed breakdown of the migration process, benchmarks comparing JSON vs Protobuf size, and the impact on our p99 latency..."
    },
    {
      id: "b2",
      title: "Building Autonomous Agents with Pydantic and OpenAI",
      date: "Sep 28, 2024",
      readTime: "12 min read",
      tags: ["AI", "Agents", "Python", "Pydantic"],
      summary: "Structured output is the key to reliable agents. In this guide, I show how to enforce strict schemas on LLM outputs using Pydantic validators.",
      content: "Step-by-step tutorial on defining Pydantic models, creating a custom instructor client, and handling validation errors gracefully in an agent loop..."
    },
    {
      id: "b3",
      title: "Constraint Programming: The Hidden Gem of Optimization",
      date: "Aug 15, 2024",
      readTime: "10 min read",
      tags: ["Optimization", "Algorithms", "OR-Tools"],
      summary: "Not every problem needs a neural network. For scheduling and routing, Constraint Programming (CP) often outperforms ML. Let's solve the N-Queens problem.",
      content: "Introduction to CP-SAT solver in Google OR-Tools. We walk through modeling a shift scheduling problem and defining constraints..."
    },
    {
      id: "b4",
      title: "A Practical Guide to Kotlin Multiplatform for iOS Developers",
      date: "Jul 03, 2024",
      readTime: "15 min read",
      tags: ["Mobile", "KMP", "iOS", "Swift"],
      summary: "KMP isn't about compromising on UI. It's about sharing the 'boring' logic. Here is how to integrate a KMP module into an existing Xcode project.",
      content: "Setting up the Gradle build scripts, mapping Kotlin Coroutines to Swift Async/Await, and handling platform-specific dependencies..."
    }
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science (Distributed Systems)",
      school: "Stanford University",
      year: "2019 – 2023"
    },
    {
      degree: "M.S. in Computer Science",
      school: "Stanford University",
      year: "2017 – 2019"
    },
    {
      degree: "B.S. in Computer Science",
      school: "University of Technology",
      year: "2013 – 2017"
    }
  ],
  certifications: [
    { 
      name: "AWS Certified Solutions Architect – Assoc.", 
      issuer: "Amazon Web Services", 
      year: "2023",
      link: "https://aws.amazon.com/verification" 
    },
    { 
      name: "Certified Kubernetes Administrator (CKA)", 
      issuer: "CNCF", 
      year: "2023",
      link: "https://www.cncf.io/certification/cka/"
    },
    { name: "Oracle Certified Professional: Java SE", issuer: "Oracle", year: "2022", link: "#" },
    { name: "Microsoft Certified: Azure Developer", issuer: "Microsoft", year: "2022", link: "#" },
    { name: "Professional Cloud Architect", issuer: "Google Cloud", year: "2022", link: "#" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2021", link: "#" },
    { name: "CompTIA Security+", issuer: "CompTIA", year: "2020", link: "#" },
    { name: "Meta Front-End Developer", issuer: "Meta", year: "2019", link: "#" }
  ],
  recommendations: [
    {
      text: "Alex is that rare combination of deep academic researcher and pragmatic engineer. He didn't just write papers about distributed systems; he built our core payments infrastructure that handles millions of transactions daily.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Solutions"
    },
    {
      text: "During his Ph.D., Alex demonstrated an incredible ability to simplify complex concepts. His work on optimizing ledger latency is still being referenced by our research group today.",
      author: "Prof. Robert Smith",
      role: "Dept. of Computer Science, Stanford"
    },
    {
      text: "I worked with Alex on the CloudMonitor project. His code is clean, his architecture is sound, and he is always willing to mentor junior developers. A true 10x engineer.",
      author: "Michael Ross",
      role: "Principal Engineer, Innovate Corp"
    }
  ]
};