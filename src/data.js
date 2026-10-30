// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Kai Yi Ji',
  role: 'Software engineer & global health modeller',
  location: 'Oxford, United Kingdom',
  rightToWork: 'UK Settled Status · no sponsorship needed',
  intro:
    'I build production software — payment systems, AI products, mobile apps — and I am now applying that engineering to mathematical and economic modelling for global health at the University of Oxford.',
  email: 'kaijiyi123@gmail.com',
  altEmail: 'kejinko012@gmail.com',
  links: {
    github: 'https://github.com/kaiji123',
    linkedin: 'https://www.linkedin.com/in/kai-yi-ji-048b91210',
    upwork: 'https://www.upwork.com/freelancers/~013603b24909059e4e',
    itch: 'https://kaigets123.itch.io',
  },
};

export const stats = [
  { value: '5+', label: 'years shipping software' },
  { value: '200k+', label: 'businesses served by systems I contributed to' },
  { value: '50k', label: 'students on university systems I contributed to' },
  { value: '15k+', label: 'patients using a digital health suite I contributed to' },
  { value: '99.95%', label: 'uptime on payment workflows I engineered' },
  { value: '30+', label: 'projects, papers & books' },
];

export const experience = [
  {
    company: 'Outlier · Scale AI',
    role: 'AI Agent Evaluation Trainee',
    period: 'Apr 2026',
    place: 'Virtual',
    points: [
      'Trained on evaluating OpenClaw AI agents for hallucinations, using a taxonomy of false actions, ungrounded facts, file misreads and skipped verification.',
      'Learned to design multi-step, multi-turn agent tasks grounded in real public use cases, with concrete, verifiable desired outcomes.',
      'Practised writing binary, weighted rubrics against initial trajectories with grounded justifications.',
    ],
  },
  {
    company: 'Fuyu',
    role: 'Freelance Brand Designer & Developer',
    period: 'Sep 2025 – Apr 2026',
    place: 'Bratislava, Slovakia',
    points: [
      'Led the restaurant logo design end to end, from concept to final artwork optimised for signage, menus, digital and packaging.',
      'Delivered a full brand kit: colour palette, typography and usage guidelines.',
      'Automated the restaurant’s menu editing system and designed a higher-converting leaflet.',
    ],
  },
  {
    company: 'Magic Square Systems',
    role: 'Full-stack Developer',
    period: 'Aug 2024 – Sep 2025',
    summary:
      'Chosen for promotion to Tech Lead for ownership of critical client systems and for mentoring.',
    points: [
      'Delivered and maintained client systems across education, healthcare, charity, finance and retail.',
      'Integrated third-party APIs and services, including Stripe and PayPal.',
      'Led an AI-powered Blazor app integrating GPT-4, significantly reducing user query resolution time.',
      'Migrated legacy VB.NET to .NET Core, speeding up API responses and lowering server costs.',
      'Automated background jobs with Hangfire, removing hours of manual processing each week.',
      'Integrated Firestore and AWS storage with a legacy backend; improved cross-platform UI with .NET MAUI.',
      'Built an AI-driven simulated social media app (Next.js, Firestore, OpenAI, Vercel) with CI/CD.',
      'Mentored a junior developer on C# and Blazor architecture.',
    ],
  },
  {
    company: 'Leyuan',
    role: 'Full-stack Developer (part-time)',
    period: 'Mar 2023 – Apr 2024',
    points: [
      'Built APIs with ASP.NET MVC and Razor Pages; secured login with ASP.NET Identity.',
      'Managed SQL Server and optimised data access with Entity Framework Core.',
      'Built the restaurant frontend in React/Next.js, later migrated to Blazor.',
    ],
  },
  {
    company: 'University of Birmingham',
    role: 'Teaching Assistant',
    period: 'Feb 2023 – May 2023',
    points: [
      'Mentored 30+ students building full-stack apps with Node.js, Django, Spring Boot, React and Angular.',
      'Ran workshops on CI/CD, Git workflows and Docker; guided deployments to GCP and DigitalOcean.',
    ],
  },
  {
    company: 'Sky',
    role: 'Software Developer Intern',
    period: 'Jul 2022 – Aug 2022',
    points: [
      'Designed CI/CD pipelines with Jenkins and Terraform; automated deployments with Octopus Deploy.',
      'Handled data ingestion with Google Cloud Pub/Sub and AWS.',
      'Improved observability with Prometheus, Grafana and Jaeger tracing.',
    ],
  },
  {
    company: 'Instant Pickup',
    role: 'Software Developer Intern',
    period: 'Sep 2021 – Oct 2021',
    points: [
      'Built React Native screens from Figma designs for an eco-friendly moving startup, working in agile sprints.',
    ],
  },
  {
    company: 'Independent',
    role: 'Travel Coordinator & Logistics Planner',
    period: 'May 2026 – Jun 2026',
    points: [
      'Planned and ran a 5-city itinerary (Vienna, Budapest, Bratislava, Hallstatt, Prague) across trains, buses and local transit with zero scheduling delays.',
      'Managed a multi-currency budget (EUR, HUF, CZK) and handled language, navigation and real-time itinerary changes.',
    ],
  },
];

export const education = [
  {
    school: 'University of Oxford',
    degree: 'MSc Modelling for Global Health',
    period: 'Oct 2026 – present',
    detail: "St Hilda's College",
    modules: [
      'Mathematics for Modellers',
      'Introduction to R for Modellers',
      'Foundations in Global Health',
      'Medical Statistics',
      'Data Science',
      'Mathematical Modelling for Infectious Diseases',
      'Introduction to Health Economics',
      'Model Communication',
    ],
  },
  {
    school: 'University of Birmingham',
    degree: 'BSc Computer Science',
    period: '2020 – 2023',
    detail: 'First-Class Honours',
    modules: [
      'Artificial Intelligence',
      'Computer Vision',
      'Advanced Algorithms',
      'Neural Computation',
      'Security of Real-World Systems',
    ],
  },
  {
    school: 'Gymnázium Metodova',
    degree: 'Maturita (A-level equivalent)',
    period: '2016 – 2020',
    detail: 'AAA — Informatics, Mathematics, English',
  },
];

export const research = [
  {
    title: 'Analysis of ROC for Edge Detectors',
    kind: 'Paper · arXiv',
    text: 'ROC-based analysis of edge detection methods.',
    href: 'https://arxiv.org/abs/2305.17820',
  },
  {
    title: 'SA-HEACS: Server-Assisted Hybrid Execution and AI-Optimized Cloud Shielding Against Automated Reverse Engineering',
    kind: 'Paper · Zenodo · v2',
    text: 'A hybrid client–server execution model that shields software from automated reverse engineering.',
    href: 'https://zenodo.org/records/23431329',
  },
  {
    title: 'E-scooter Safety',
    kind: 'Paper · Zenodo',
    text: 'Research paper on e-scooter safety, with accompanying code.',
    href: 'https://zenodo.org/records/23383254',
    extra: { label: 'Code', href: 'https://github.com/kaiji123/escooter-safety' },
  },
  {
    title: 'Priority of Verification',
    kind: 'Proposal',
    text: 'A proposal on the priority of verification, in response to OpenAI’s mathematics results.',
    href: 'https://github.com/kaiji123/ai-verif',
  },
];

export const books = [
  { title: "The Indie Builder's Playbook", note: 'A guide for independent makers' },
];

// category: web | ai | mobile | games | tools
export const projects = [
  { name: 'Trace Lab', cat: 'tools', text: 'Step-through visual traces of 199 coding interview problems across 19 patterns, with quizzes, drills and spaced repetition. Every trace is tested against the Python on screen.', tech: ['JavaScript', 'Python', 'Node.js', 'PWA'] },
  { name: 'OpenDAG', cat: 'ai', text: 'Open dataset of causal DAGs from epidemiology papers. NVIDIA Nemotron extracts each study’s DAG, flags missing confounders and verifies them against the paper; Tavily finds evidence. Built for the Nebius × NVIDIA Global AI Hackathon.', tech: ['Python', 'Nemotron', 'Nebius Token Factory', 'Tavily', 'networkx'], href: 'https://github.com/kaiji123/openDAG', extra: { label: 'Live demo', href: 'https://opendag.onrender.com' } },
  { name: 'Anomality', cat: 'ai', text: 'Weekly anomaly report for stocks and crypto: how much prices could move this week, from a crash-proofed regime-gated model that beat the simple baseline in 29 of 30 out-of-sample periods since 2019.', tech: ['Python', 'Time series', 'Mixture of experts', 'Backtesting'], href: 'https://github.com/kaiji123/Anomality' },
  { name: 'MediSim', cat: 'ai', text: 'Simulates real-time patient scenarios so aspiring doctors can practise for OSCE exams, with interactive feedback.', tech: ['Expo', 'React Native', 'Django'] },
  { name: 'MediSim Desktop', cat: 'ai', text: 'Desktop OSCE simulator using the latest LLMs, tuned for speed vs. quality, with video playback for realistic practice.', tech: ['PySide', 'LLMs'] },
  { name: 'BsFinancials', cat: 'ai', text: 'Converts bank statements to CSV and highlights accounting, auditing and legal insights with GPT. Also published as an API on RapidAPI.', tech: ['Svelte', 'Supabase', 'Stripe', 'OpenAI'] },
  { name: 'AID / ADD', cat: 'ai', text: 'Computer vision model unifying instance segmentation, semantic segmentation and object detection.', tech: ['PyTorch', 'TensorFlow', 'Keras'] },
  { name: '3danimate', cat: 'ai', text: 'Agent skill that animates rigged humanoids in 3D — plays, blends and renders mocap clips frame-accurately.', tech: ['Remotion', 'three.js', 'react-three-fiber'], href: 'https://github.com/kaiji123/3danimate' },
  { name: 'JML', cat: 'ai', text: 'Machine learning algorithms such as linear regression and k-NN, written from scratch in Java.', tech: ['Java'] },
  { name: 'Reactive Stream Processor', cat: 'web', text: 'Real-time ingestion, processing and visualisation pipeline, containerised end to end.', tech: ['Scala', 'Akka Streams', 'Kafka', 'InfluxDB', 'Grafana'] },
  { name: 'Trado', cat: 'web', text: 'Trading platform with hot-stock tracking, portfolio management and buy/sell simulation.', tech: ['FastAPI', 'Next.js', 'Tailwind', 'Alpaca API'] },
  { name: 'Tichit', cat: 'web', text: 'Reddit-style communities with moderator tools, role-based access and tuned JPA queries for high load.', tech: ['Spring Boot', 'Hibernate', 'Angular', 'JWT'] },
  { name: 'Gettit', cat: 'web', text: 'Social app with JWT auth, posts, comments and voting.', tech: ['Django', 'React', 'MySQL', 'Docker'] },
  { name: 'JabberSocial', cat: 'web', text: 'Twitter-style client/server app with live feeds and message broadcasting over TCP sockets.', tech: ['JavaFX', 'Sockets', 'JDBC'] },
  { name: 'GeoQuiz', cat: 'web', text: 'Team-led geography quiz with secure login, CI/CD and cloud deployment.', tech: ['Node.js', 'Express', 'MongoDB', 'OAuth'] },
  { name: 'TourChat', cat: 'web', text: 'Helps tourists and tour guides communicate.', tech: ['Messaging'] },
  { name: 'Aplijob', cat: 'web', text: 'Private project — details available on request.', tech: ['Private'] },
  { name: 'Codeplat', cat: 'web', text: 'Private project — details available on request.', tech: ['TypeScript', 'Private'] },
  { name: 'PromptMono', cat: 'web', text: 'Full-stack monorepo for iterating on Stripe integrations, charts, CMS-like editors and real-time bots.', tech: ['Next.js', 'Node.js', 'Expo', 'Python'] },
  { name: 'Gamer Deals', cat: 'web', text: 'Tracks the latest game deals and lets you save favourites.', tech: ['PHP', 'MySQL', 'React'] },
  { name: 'Wordle', cat: 'web', text: 'A simple Wordle web app.', tech: ['EJS'] },
  { name: 'Rust PDF Service', cat: 'tools', text: 'PDF generation API served on Coolify.', tech: ['Rust', 'Actix', 'Serde', 'Typst'] },
  { name: 'WooCommerce Brand Pages', cat: 'tools', text: 'WordPress plugin that automatically creates pages for product brands.', tech: ['PHP', 'WordPress'] },
  { name: 'YouTube Speed Control', cat: 'tools', text: 'Chrome extension to change video speed by drag, voice or text.', tech: ['JavaScript'] },
  { name: 'Akaunting contribution', cat: 'tools', text: 'Reported setup issues and proposed improvements to the open-source accounting app.', tech: ['Open source'], href: 'https://github.com/akaunting/akaunting/issues/3319' },
  { name: 'KaiSwift', cat: 'mobile', text: 'Modular iOS monorepo of reusable UI modules (chat, image viewer, browser) — prototypes 3× faster.', tech: ['Swift', 'iOS'] },
  { name: 'KaiAndroid', cat: 'mobile', text: '5+ Android apps (chat, ordering, email, podcast, news) sharing core UI libraries.', tech: ['Jetpack Compose', 'Hilt', 'Room', 'Flow'] },
  { name: 'Drivy', cat: 'mobile', text: 'Helps you pass the driving theory test.', tech: ['Flutter'] },
  { name: 'Voice Recorder', cat: 'mobile', text: 'Android voice recording app.', tech: ['Kotlin'] },
  { name: 'Magia Fighter', cat: 'games', text: 'A fighting game published on itch.io.', tech: ['Game'], href: 'https://kaigets123.itch.io/magia-fighter' },
  { name: 'Mafia Chess', cat: 'games', text: 'A chess variant with a mafia twist. Trailer made with HyperFrames.', tech: ['Game'], href: 'https://kaigets123.itch.io/mafia-chess', extra: { label: 'Trailer', href: 'https://www.youtube.com/watch?v=TK5Tt2fp23o' } },
  { name: 'Alz', cat: 'games', text: 'A game published on itch.io.', tech: ['Game'], href: 'https://kaigets123.itch.io/alz' },
  { name: 'Radial Menu', cat: 'games', text: 'A Unity asset package for radial menus.', tech: ['Unity', 'C#'] },
  { name: 'Canvas', cat: 'games', text: 'Multiplayer drawing game.', tech: ['Python', 'Pygame', 'Sockets'] },
  { name: 'Game of Life', cat: 'games', text: "Conway's Game of Life in Haskell.", tech: ['Haskell'] },
];

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & Health' },
  { id: 'web', label: 'Web & Systems' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'games', label: 'Games' },
  { id: 'tools', label: 'Tools & OSS' },
];

export const channels = [
  { name: 'KaiGetsTech', href: 'https://www.youtube.com/@KaiGetsTech' },
  { name: 'KaiGetsEditing', href: 'https://www.youtube.com/@KaiGetsEditing' },
  { name: 'MotionLover', href: 'https://www.youtube.com/@MotionLover-e9w' },
];

export const otherMade = ['ShibaChain — a keychain design'];

export const skills = [
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'R', 'Java', 'Kotlin', 'Swift', 'Scala', 'Rust', 'Dart', 'C/C++', 'PHP', 'SQL', 'MATLAB'] },
  { group: 'Web & backend', items: ['.NET / ASP.NET Core', 'Blazor', 'React', 'Next.js', 'Angular', 'Vue', 'Svelte', 'Node.js', 'Django', 'FastAPI', 'Spring Boot', 'Laravel'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'Flutter', '.NET MAUI', 'Jetpack Compose', 'SwiftUI / iOS'] },
  { group: 'Data & AI', items: ['PyTorch', 'TensorFlow', 'Keras', 'Computer vision', 'OpenAI / LLMs', 'Kafka', 'Spark', 'dbt', 'Power BI', 'SSIS / SSRS'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'ELK', 'Nginx'] },
  { group: 'Data stores', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Redis', 'Firestore', 'Supabase', 'InfluxDB'] },
  { group: 'Creative', items: ['Unity', 'Unreal Engine', 'Blender', 'Framer', 'Canva', 'AutoCAD'] },
];

export const certifications = [
  'AWS Certified Solutions Architect – Associate (2023)',
  'CompTIA Security+ (2024)',
  'Salesforce Certified Administrator (2024)',
  'JPMorgan Chase & Co. Software Engineering Virtual Experience (2023)',
  'MathWorks MATLAB Onramp (2023)',
  'Pragmatic Works — Beginning DAX Functions (2024)',
  'Pragmatic Works — Power Apps Beginner to Pro (2024)',
  'Udemy — Programming in Blazor, ASP.NET Core 5 (2025)',
  'Google — Fundamentals of Digital Marketing',
  'Google Ads Search Certification',
  'Xero Advisor Certified',
  'Diploma in Sales Management',
];

export const languages = [
  { level: 'Native / bilingual', items: ['English', 'Chinese', 'Slovak'] },
  { level: 'Elementary', items: ['French', 'German', 'Japanese'] },
];
