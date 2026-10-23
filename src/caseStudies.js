// Case studies for the project detail pages (#/projects/<slug>).
// Keyed by the project `name` in data.js. Projects without an entry here
// show as a plain card with no detail page.
//
// Each entry: subtitle, role?, problem (paragraph), approach (bullets),
// outcome (bullets), links? [{ label, href }].

export const caseStudies = {
  MediSim: {
    subtitle: 'AI patient simulator for OSCE practice',
    role: 'Solo — design, mobile app and backend',
    problem:
      'OSCE exams test how medical students handle a live patient, but practising means finding a partner to play the patient and someone to mark you. That is hard to arrange, the scenarios repeat, and the feedback depends on who happens to be watching.',
    approach: [
      'Used LLMs to play the patient in real time, so each station responds to what the student actually asks.',
      'Built the app in Expo / React Native so students can practise on their phone, anywhere.',
      'Django backend stores scenarios and sessions and returns structured feedback after each station.',
    ],
    outcome: [
      'Students can rehearse OSCE stations alone, whenever they want, with feedback every time.',
      'The scenario and feedback model became the base for MediSim Desktop.',
    ],
  },

  'MediSim Desktop': {
    subtitle: 'Desktop OSCE simulator with video patients',
    role: 'Solo',
    problem:
      'A text or voice-only patient on a phone does not feel like a real consultation, and a single fixed model forces one trade-off between response speed and answer quality.',
    approach: [
      'Rebuilt the simulator as a PySide desktop app with room for a larger, exam-like interface.',
      'Made the LLM pluggable so the student can pick a faster or a higher-quality model for each session.',
      'Added video playback of the patient so stations look and feel closer to the real exam.',
    ],
    outcome: [
      'More realistic practice sessions, with latency and quality under the user’s control.',
      'New models can be dropped in as they are released.',
    ],
  },

  BsFinancials: {
    subtitle: 'Bank statements to CSV, with AI insights',
    role: 'Solo — product, frontend, backend and billing',
    problem:
      'Bank statements arrive as PDFs. Accountants and small businesses retype them into spreadsheets by hand, and anything worth flagging for accounting, audit or legal review is buried in hundreds of lines.',
    approach: [
      'Parse statements into clean, structured CSV.',
      'Pass the transactions to GPT to highlight accounting, auditing and legal points of interest.',
      'Svelte frontend, Supabase for auth and storage, Stripe for paid plans.',
      'Exposed the same conversion as a public API on RapidAPI for developers.',
    ],
    outcome: [
      'A paid web product that turns a statement into a spreadsheet plus a list of insights.',
      'A second channel through the RapidAPI listing, from the same codebase.',
    ],
  },

  'AID / ADD': {
    subtitle: 'Adaptive detection for real-time vision',
    role: 'Research project',
    problem:
      'Object detection is fast but only draws boxes; semantic segmentation finds the exact shape of an object but is slower. In a real-time setting — here, detecting players in Counter-Strike: Condition Zero — that small speed gap grows quickly as models get bigger.',
    approach: [
      'Trained a YOLOv5s object detector and a customised MaskFormer-based semantic segmentation model on game footage.',
      'Benchmarked inference time and output quality of the two side by side.',
      'Proposed Adaptive Distance Detection, which switches between the two depending on the target, and Adaptive Instance Segmentation, which combines semantic and panoptic segmentation.',
    ],
    outcome: [
      'Measured the trade-off: detection was slightly faster; segmentation captured shape much better.',
      'A hybrid design that keeps most of the speed of detection while keeping segmentation where precision matters.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/kaiji123/AIS-ADD' }],
  },

  '3danimate': {
    subtitle: 'Agent skill for animating 3D humanoids',
    role: 'Solo — open source',
    problem:
      'Getting an AI agent to produce a usable 3D character animation is unreliable: rigs and clips do not line up, playback depends on the clock so renders are not reproducible, and feet slide when characters move.',
    approach: [
      'Packaged the workflow as an agent skill on Remotion + three.js / react-three-fiber.',
      'Deterministic playback: every frame sets each clip’s time and weight, then evaluates the pose — no clocks, so renders can be scrubbed and reproduced.',
      'Layered blending for cross-fades, root motion so feet don’t slide, and props attached to any bone.',
      'Ships with 89 CC0 mocap clips on a 71-bone rig, plus a path to capture custom moves from video.',
      'Built-in visual QA: contact sheets of chosen frames and a clip grid to check a rig before building on it.',
    ],
    outcome: [
      'An agent can go from “walk, then punch, render to MP4” to a finished, frame-accurate video.',
      'Published on GitHub with install steps for Claude Code.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/kaiji123/3danimate' }],
  },

  'Reactive Stream Processor': {
    subtitle: 'Real-time data pipeline with backpressure',
    role: 'Solo',
    problem:
      'Real-time data has to be ingested, processed and visualised without the processing stage being overwhelmed when producers speed up — and the whole stack should be easy to run locally.',
    approach: [
      'A Scala producer publishes events to Kafka.',
      'An Akka Streams processor consumes them with built-in backpressure and writes results to InfluxDB.',
      'Grafana reads InfluxDB for live dashboards.',
      'Kafka, InfluxDB and Grafana are wired together with Docker Compose.',
    ],
    outcome: [
      'The full pipeline starts with one command and shows live data in a Grafana dashboard.',
      'A clear reference for producer → stream processor → time-series store → dashboard.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/kaiji123/reactive-stream-processor' }],
  },

  Trado: {
    subtitle: 'Stock trading simulator',
    role: 'Solo — full stack',
    problem:
      'Learning to trade with real money is expensive. Beginners need somewhere to follow the market, build a portfolio and place orders without risking capital.',
    approach: [
      'FastAPI backend on top of the Alpaca API for market data and simulated orders.',
      'Hot-stock tracking to surface what is moving.',
      'Next.js + Tailwind frontend for the portfolio view and buy/sell flows.',
    ],
    outcome: [
      'Users can practise trading on real market data with no money at stake.',
    ],
  },

  Tichit: {
    subtitle: 'Reddit-style communities with moderation',
    role: 'Solo — full stack',
    problem:
      'Community platforms need more than posts: moderators need tools, permissions have to differ by role, and busy pages must stay fast as data grows.',
    approach: [
      'Spring Boot + Hibernate backend with JWT authentication.',
      'Role-based access so members, moderators and admins see and do different things.',
      'Tuned JPA queries on the heaviest pages to keep them fast under load.',
      'Angular frontend for communities, posts and moderation.',
    ],
    outcome: [
      'Working communities with moderator tools and enforced permissions.',
    ],
  },

  JabberSocial: {
    subtitle: 'Live social feed over raw TCP sockets',
    role: 'Solo',
    problem:
      'Live feeds are usually built on top of frameworks that hide how messages actually reach every client. The aim was to build one from the socket up.',
    approach: [
      'Custom Java server that accepts client connections and broadcasts new posts over TCP sockets.',
      'JavaFX desktop client with a feed that updates as messages arrive.',
      'Posts and users stored through JDBC.',
    ],
    outcome: [
      'A Twitter-style app where posts appear on every connected client in real time, with no messaging framework.',
    ],
  },

  GeoQuiz: {
    subtitle: 'Team-built geography quiz with CI/CD',
    role: 'Team lead — University of Birmingham team project',
    problem:
      'A university team project: ship a working multiplayer web app as a team, with secure login and a repeatable deployment — not just code that runs on one laptop.',
    approach: [
      'Node.js + Express app with OAuth login.',
      'GitLab CI pipeline with a self-registered runner on a DigitalOcean server, so every push deploys.',
      'Managed database cluster on DigitalOcean; secrets kept in environment variables, out of the repo.',
      'Ran the team with a Kanban board, meeting diary and documented tech-stack choices.',
    ],
    outcome: [
      'A deployed quiz app with secure login and automatic deployments.',
      'Documented setup so anyone can replicate the pipeline from scratch.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/kaiji123/GeoQuiz' }],
  },

  'Rust PDF Service': {
    subtitle: 'Lightweight PDF generation API',
    role: 'Solo',
    problem:
      'Generating PDFs from an app often means running a headless browser, which is heavy and slow to start. A small service that turns data into a document was needed instead.',
    approach: [
      'Actix-web HTTP API in Rust that accepts JSON (parsed with Serde).',
      'Documents laid out and rendered with Typst templates.',
      'Self-hosted on Coolify.',
    ],
    outcome: [
      'A small, fast PDF endpoint that other apps can call.',
    ],
  },

  KaiSwift: {
    subtitle: 'Reusable iOS module monorepo',
    role: 'Solo',
    problem:
      'Every new iOS prototype was rebuilding the same screens — chat, image viewer, in-app browser — from scratch.',
    approach: [
      'A modular Swift monorepo where each common feature is its own reusable module.',
      'New apps pull in the modules they need instead of copying code.',
    ],
    outcome: [
      'New prototypes come together around 3× faster.',
    ],
  },

  KaiAndroid: {
    subtitle: 'Five Android apps on shared libraries',
    role: 'Solo',
    problem:
      'Building several Android apps separately means repeating the same UI, data and dependency setup in each.',
    approach: [
      'Shared core UI libraries in Jetpack Compose.',
      'Hilt for dependency injection, Room for local storage, Kotlin Flow for reactive data.',
      'Built chat, ordering, email, podcast and news apps on top of the shared core.',
    ],
    outcome: [
      '5+ apps that share one foundation, so a fix or improvement in the core reaches all of them.',
    ],
  },

  'YouTube Speed Control': {
    subtitle: 'Chrome extension for playback speed',
    role: 'Solo',
    problem:
      'YouTube only offers a few fixed speed steps, buried in a menu. Changing speed often while watching is slow.',
    approach: [
      'Click and drag on the video to slow down or speed up.',
      'A popup form to type an exact speed.',
      'Voice mode: press P and say “2 times” to set 2× speed, using the browser’s speech recognition.',
    ],
    outcome: [
      'Any speed, set in a gesture, a keystroke or a sentence.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/kaiji123/youtube-speed-control' }],
  },

  'WooCommerce Brand Pages': {
    subtitle: 'WordPress plugin for brand pages',
    role: 'Solo',
    problem:
      'Shops with many product brands had to create and maintain a page for each brand by hand, and the pages drifted out of date as products changed.',
    approach: [
      'A WordPress plugin that hooks into WooCommerce product brands.',
      'Creates a page for each brand automatically.',
    ],
    outcome: [
      'Brand pages appear without manual work as new brands are added.',
    ],
  },

  'Gamer Deals': {
    subtitle: 'Game deal tracker',
    role: 'Solo — full stack',
    problem:
      'Game deals are spread across many stores and disappear quickly, so it is easy to miss one you were waiting for.',
    approach: [
      'TypeScript React frontend with filtering and sorting.',
      'PHP Laravel backend with user accounts and a MySQL database.',
      'Users add or remove deals on a personal dashboard.',
    ],
    outcome: [
      'One dashboard of the latest deals, with favourites saved per user.',
    ],
    links: [
      { label: 'Frontend', href: 'https://github.com/kaiji123/game-deals-frontend' },
      { label: 'Backend', href: 'https://github.com/kaiji123/game-deal-backend' },
    ],
  },

  Canvas: {
    subtitle: 'Multiplayer drawing game',
    role: 'Solo',
    problem:
      'Drawing together over a network means every stroke has to reach the other player quickly and in order.',
    approach: [
      'Python socket server that relays drawing events between players.',
      'Pygame client that renders local and remote strokes on a shared canvas.',
    ],
    outcome: [
      'Two players join one server and draw on the same canvas in real time.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/kaiji123/multiplayer_canvas' }],
  },
};
