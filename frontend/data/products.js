const products = [
  {
    category: 'Ecosystem Platform',
    name: 'LGC Systems',
    description:
      'I built this umbrella ecosystem to host learning-first tools that prioritize reasoning, conceptual clarity, and explainability over surface-level learning metrics.',
    tech: 'TypeScript + Vite + React',
    developmentEnvironment: 'VS Code',
    developmentEnvironmentIcon: '/images/vscode.webp',
    link: 'https://github.com/lingarobotics/lgcsystems',
    detailRoute: '/lgc-systems-overview',
    tag: 'Core System',
  },
  
  {
    category: 'Completed LGC Projects',
    name: 'LGC LearnLogic CODE',
    description:
      'I built this frontend-first programming learning system to train conceptual clarity, execution-flow reasoning, and teach-back verification before syntax memorization. In this product, AI is intentionally used only for explanation validation and refinement support, not as the primary learning path.',
    tech: 'JavaScript + Vite + React',
    developmentEnvironment: 'VS Code',
    developmentEnvironmentIcon: '/images/vscode.webp',
    link: 'https://github.com/lingarobotics/LGC-LearnLogic-CODE',
    detailRoute: '/lgc-learnlogic-code-overview',
    tag: 'Core System',
  },
  {
    category: 'Flagship Knowledge Engineering Systems',
    name: 'LGC CodeBase Insight',
    description:
      'I am building this system to analyze and understand codebases, helping developers explore architecture and reasoning patterns in large projects.',
    tech: 'Java Backend + Vite React Frontend',
    developmentEnvironment: 'IntelliJ IDEA Ultimate',
    developmentEnvironmentIcon: '/images/intellijidea.webp',
    link: 'https://github.com/lingarobotics/LGC-CodeBase-Insight',
    detailRoute: '/lgc-codebase-insight-overview',
    tag: 'Under Development',
  },

  {
    category: 'Flagship Backend Engineering Project',
    name: 'LGC ResultGrid',
    description:
      'Architecting a Spring Boot backend for university result publication, exploring high-read system design, relational hierarchy modeling, caching, and scalable request handling for large concurrent traffic during result releases.',
    tech: 'Java + Spring Boot Backend, React Frontend ',
    developmentEnvironment: 'IntelliJ IDEA Ultimate',
    developmentEnvironmentIcon: '/images/intellijidea.webp',
    link: 'https://github.com/lingarobotics/ResultGrid',
    detailRoute: '/lgc-resultgrid-overview',
    tag: 'Under Development',
  },
  {
    category: 'Academic Projects',
    name: 'LGC Emergency Corridor System (LGC-ECS)',
    description:
      'Planned final-year engineering project exploring a decentralized emergency traffic corridor system that coordinates GPS-based ambulance tracking, rolling route prediction, targeted vehicle notifications, and intelligent traffic signal integration to reduce emergency response time.',
    tech: 'System Design, GPS Tracking, Route Prediction, Event-Driven Architecture, Notification Systems, Smart Infrastructure (Planned)',
    developmentEnvironment: 'IntelliJ IDEA Ultimate',
    developmentEnvironmentIcon: '/images/intellijidea.webp',
    link: 'https://github.com/lingarobotics/LGC-Emergency-corridor-system',
    detailRoute: '/lgc-ecs-overview',
    tag: 'Planned Project',
  },

  {
    category: 'Product Under Development',
    name: 'LGC AcadOS',
    description:
      'A centralized academic operating system designed to serve students, staff, HOD, and administration. It provides transparent internal mark breakdowns, daily attendance tracking with correction workflows, and structured academic visibility. The system focuses on real-world usability by aligning with existing college processes while introducing accountability, fairness, and clarity across all roles.',
    tech: 'Node.js + Express Backend, MongoDB, React Frontend',
    developmentEnvironment: 'VS Code + MongoDB Compass',
    developmentEnvironmentIcon: '/images/vscode.webp',
    link: 'https://github.com/lingarobotics/LGC-AcadOS',
    detailRoute: '/lgc-acados-overview',
    tag: 'Under Development',
  },

  {
    category: 'Flagship AI-Engineering Systems',
    name: 'Bugsense AI',
    description:
      'Hackathon team project where I led the software architecture, established the project structure and integration contracts, coordinated frontend and backend development, and implemented an AI retrieval pipeline using 384-dimensional semantic embeddings, FAISS vector indexing, and DBSCAN clustering to analyze ~15,000 processed bug reports derived from an 88,000+ report dataset for intelligent defect analysis.',
    tech: 'Python, FastAPI, FAISS, Sentence Transformers, React (Vite)',
    developmentEnvironment: 'VS Code',
    developmentEnvironmentIcon: '/images/vscode.webp',
    link: 'https://github.com/lingarobotics/bug-duplicate-detector-ai-system',
    detailRoute: '/bugsense-ai-overview',
    tag: 'AI-Engineering Systems',
  },
  {
    category: 'Academic Projects',
    name: 'LGC Articulate DevLang',
    description:
      'A solo-developed academic project focused on structured communication training through scenario-based learning, evaluation, and doubt resolution, built under the LGC Systems vision.',
    tech: 'React.js + Node.js/Express + MongoDB',
    developmentEnvironment: 'VS Code',
    developmentEnvironmentIcon: '/images/vscode.webp',
    link: 'https://github.com/lingarobotics/LGC-Articulate-DevLang',
    detailRoute: '/lgc-articulate-devlang-overview',
    tag: 'Academic Project (Completed)',
  },
  {
    category: 'Flagship Knowledge Engineering Systems',
    name: 'MathLogic',
    description:
      'Designing a concept-centered mathematics learning platform that models reusable problem-solving workflows independent of curriculum structure, enabling concepts, learning progress, and academic regulations to evolve without duplicating educational content.',
    tech: 'React, TypeScript, Supabase (PostgreSQL)',
    developmentEnvironment: 'VS Code',
    developmentEnvironmentIcon: '/images/vscode.webp',
    link: 'https://github.com/lingarobotics/MathLogic',
    detailRoute: '/mathlogic-overview',
    tag: 'Under Development',
  }
]

export default products

