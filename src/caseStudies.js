// Case studies for the project detail pages (#/projects/<slug>).
// Keyed by the project `name` in data.js. Projects without an entry here
// show as a plain card with no detail page.
//
// Each entry: subtitle, role?, problem (paragraph), approach (bullets),
// outcome (bullets), links? [{ label, href }].
// Optional: stats [{ value, label }] shown under the header, and
// sections [{ title, text?, points? }] shown between approach and outcome.

export const caseStudies = {
  OpenDAG: {
    subtitle: 'An open dataset of causal diagrams extracted from epidemiology papers',
    role: 'Hackathon build — Nebius × NVIDIA Global AI Hackathon (Best Apps & Agents)',
    links: [
      { label: 'Try the live demo', href: 'https://opendag.onrender.com' },
      { label: 'Code on GitHub', href: 'https://github.com/kaiji123/openDAG' },
    ],
    stats: [
      { value: '2', label: 'Nemotron models, split by task: Nano extracts, Super reasons' },
      { value: '~$0.15', label: 'of model tokens to build and test the whole project' },
      { value: 'CC BY 4.0', label: 'public dataset, exportable to DAGitty' },
    ],
    problem:
      'Most observational studies never publish their causal assumptions. Without the DAG it is hard to see what the authors adjusted for, and harder still to spot the confounders they missed.',
    approach: [
      'Resolves a DOI, PMCID or PMID through Europe PMC and only accepts Creative Commons or public-domain papers, pulling just the abstract, methods, statistics and results.',
      'Nemotron 3 Nano extracts the study design, exposure, outcome, nodes and edges as JSON; Pydantic and networkx then validate it, merge duplicates and drop edges that would create cycles, logging every fix.',
      'Nemotron 3 Super, with reasoning on, proposes missing confounders and bias risks, then checks each one against the paper’s own text — it must quote the sentence, and code confirms the quote exists.',
      'Tavily attaches evidence for each suggestion, and a person reviews, edits and approves the DAG before it joins the dataset.',
      'Approved papers are linked through shared, MeSH-verified variable names into a 3D network, and an “ask the dataset” feature turns questions into exact structured queries so code, not the model, does the counting.',
    ],
    outcome: [
      'A live public app and a growing open dataset, with every DAG exportable to DAGitty and the full dataset as JSONL.',
      'AI suggestions are always labelled and kept separate from what the paper reported.',
      'Splitting models by task keeps costs low: the large model never sees the full paper text.',
    ],
  },
  Anomality: {
    subtitle: 'A weekly anomaly report for stocks and crypto, built to hold up in a crash',
    links: [{ label: 'Code on GitHub', href: 'https://github.com/kaiji123/Anomality' }],
    stats: [
      { value: '29 of 30', label: 'test periods since 2019 beating the simple estimate' },
      { value: '23%', label: 'smaller misses than the simple estimate in the 2020 crash' },
      { value: '3.6×', label: 'more movement in assets flagged volatile vs. calm' },
      { value: '3,177', label: 'model weights — full 7-year backtest retrains in 12 minutes' },
    ],
    problem:
      'Most forecasting models learn from normal markets and break down in a crash, exactly when you need them.',
    approach: [
      'Started from a 2026 research model (RG-ResMoE) and found that its regime gate fails in a market crash.',
      'Fixed it with log-scaled volatility inputs and tested the fix out of sample: a rolling retrain scored only on unseen weeks (May 2019 – Oct 2026, 56 assets, 103,593 forecasts).',
      'Turned the model into a plain-English product: a market mood scale (Calm, Normal, Choppy, Stormy), the expected move for each asset in percent and dollars, and its “surprise weeks”.',
      'Added a simple decision layer: when the mood is Stormy, hold every asset at half; otherwise stay fully invested.',
    ],
    outcome: [
      'Average miss of ±1.96% on the weekly move, vs. ±2.24% for the simple “last month” estimate.',
      'The crash-proofed model beat the original research model in 25 of 30 test periods (p < 0.001).',
      'The mood rule grew +579% with a −30.3% worst drop, vs. +568% and −34.2% for buy and hold (backtested with trading costs, half invested on only 4% of days).',
    ],
  },
  Plantago: {
    subtitle: 'A PayPal donation, turned into food grown or bought close to the people who need it',
    role: 'Hackathon build — PayPal AI Hackathon (2026)',
    links: [{ label: 'Code on GitHub', href: 'https://github.com/kaiji123/Plantago' }],
    stats: [
      { value: '4', label: 'PayPal APIs: Orders, Payouts, Payments and Webhooks' },
      { value: '~60', label: 'towns, border posts and ports in the road network' },
      { value: '30%', label: 'of each seeded harvest bought back at a fair price' },
    ],
    problem:
      'Food aid often travels a long way and leaves little money with local farmers. Donors rarely see where their money went, or whether growing food locally would have fed more people.',
    approach: [
      'A donor picks a place in northern Kenya on a network map, chooses food now or drought-tolerant seed (or leaves it to the planner), and pays with PayPal checkout.',
      'An LLM planner runs a tool loop over need, climate, planting season and grower prices. The AI chooses; code does the maths: the budget is fixed on the server and the model can only submit an allocation the optimizer built.',
      'Growers are paid in one PayPal Payouts batch as soon as their orders are approved, and every dollar in and out appears on a public ledger with its PayPal transaction ID.',
      'Shipments follow a road graph with Dijkstra routing; the dispatch console groups drop-offs, packs 3-tonne trucks, orders stops with 2-opt and picks the cheaper of a dedicated truck or part loads.',
      'Money safety throughout: integer cents, idempotent PayPal requests, orders claimed in a database transaction before paying, verified webhooks and a ledger the tests check balances.',
    ],
    outcome: [
      'A working end-to-end demo on real PayPal sandbox transactions, from donation to grower payout to tracked delivery.',
      'A harvest buy-back turns a donation into seed, then farmer income, then food grown a few km from the people who eat it.',
      'A 3D globe shows every grower, supplier and destination, with routes drawn by status and weight.',
    ],
  },
  ModMap: {
    subtitle: 'Seeing coordinated harassment in Twitch chat, not just bad words',
    role: 'Hackathon build — Codex × TwitchCon hackathon',
    links: [{ label: 'Code on GitHub', href: 'https://github.com/kaiji123/Modmap' }],
    stats: [
      { value: '5+', label: 'distinct senders converging on one target within 30 seconds raises an alert' },
      { value: '50', label: 'users per reviewed bulk ban, timeout or unban' },
      { value: '2 min', label: 'rolling window for the live interaction graph' },
    ],
    problem:
      'Word filters judge one message at a time, so they miss a raid where many accounts pile onto the same person with mild or near-identical messages.',
    approach: [
      'Ingests live chat through Twitch OAuth and EventSub, and turns replies and mentions into a directed graph of who is targeting whom.',
      'Sizes nodes by message count and colours them by a rolling word-filter score; flagged messages are masked and only revealed on request from the server.',
      'A target-based detector raises an evidence-backed alert when at least 5 senders hit one person in 30 seconds with flagged, highly similar messages.',
      'Moderators draw a loop around a group of users and ban, time out or unban them in one reviewed action through the Twitch moderation API.',
      'A raid simulator with two hostile groups lets anyone try the full flow with no Twitch login, and simulated users can never reach real Twitch endpoints.',
    ],
    outcome: [
      'A local-first prototype that connects to a real channel’s chat and moderates it.',
      'Hardened OAuth: single-use state, server-held tokens with refresh and validation, and loopback-only binding.',
      'Scores are labelled as signals, not verdicts: nothing is banned automatically unless autoban words are switched on.',
    ],
  },
  'Trace Lab': {
    subtitle: 'Step-through traces of coding interview problems',
    role: 'Solo — design, trace engine, content and tooling',
    links: [{ label: 'Try the live demo', href: `${import.meta.env.BASE_URL}trace-lab.html` }],
    stats: [
      { value: '199', label: 'problems, all of Blind 75 included' },
      { value: '19', label: 'patterns, each with a reusable template' },
      { value: '4,467', label: 'traced steps across 385 preset inputs' },
      { value: '1,835', label: 'auto-generated predict-the-next-step questions' },
    ],
    problem:
      'Interview prep usually means reading a finished solution and nodding along. In the interview you have to run the algorithm in your head instead: know where each pointer moves, what the hash map holds and why the loop stops. Static diagrams skip the steps that matter, generic code visualisers show raw memory rather than the idea, and nothing checks that you can predict the next step yourself.',
    approach: [
      'Each problem is written once, in two forms: the Python solution shown on screen, and a JavaScript run(input, T) that runs the same algorithm and calls T.step(label, message, ...views) to record a frame at each meaningful moment.',
      'Code lines carry #@label tags, so a frame points at a line by name, not by number. Editing the code never breaks the highlighting.',
      'A small set of view builders draws state the way you would sketch it on a whiteboard: arrays with named pointers, hash maps, sets, grids, binary and n-ary trees, linked lists, graphs, heaps, bar charts, intervals and bit rows.',
      'Every problem states its invariant, the thing that stays true at every step, shown under the caption. The point is to learn why the algorithm is correct, not just what it does.',
      'Problems are grouped into 19 patterns (two pointers, sliding window, monotonic stack, union-find, 1-D DP and so on). Each pattern lists the signals that give it away and a template to start from.',
      'You can trace any custom input as well as the presets. Inputs are validated, and seeded random inputs can be reproduced from their seed.',
    ],
    sections: [
      {
        title: 'Turning traces into practice',
        points: [
          'Quiz me: the trace pauses and asks you to predict the next step, for example what dp[4] becomes, where r points next, or which line runs next. Questions are generated by diffing consecutive frames, so the answer always comes from the trace itself and cannot be wrong.',
          'Recall mode hides the pattern, key insight and approach until you have guessed them. Hide code blanks out the solution line by line.',
          'Pattern drill: ten timed cards where you read a problem statement and pick the pattern, with the misses listed for review at the end.',
          'Spaced repetition: grading a problem schedules it again in 10 minutes, a day, or a growing number of days, and the sidebar shows what is due.',
          'A cross-reference to Cracking the Coding Interview (6th ed.) links 114 problems to their book numbers.',
        ],
      },
      {
        title: 'Making every trace trustworthy',
        text:
          'A teaching trace that is wrong is worse than none, so correctness is checked automatically rather than by eye. The trace engine has no DOM, so the traces that run in the browser also run in Node.',
        points: [
          'The test runner plays every problem on every preset input. It checks the result against the expected output, that every frame is tied to a real code line, that no trace runs away (traces are capped at 600 steps), and that every quiz question has distinct options including the right one.',
          'A second check exports the Python shown on screen and runs it against the same inputs, so the displayed code and the animation can never disagree.',
          'Current run: 199 problems, 385 inputs, 4,467 steps, 0 failures. All displayed Python solutions pass.',
        ],
      },
      {
        title: 'Shipping it',
        points: [
          'A small Node build script bundles everything into one self-contained HTML file (about 700 KB) that opens in any browser with no server or install.',
          'The same build also produces an installable offline PWA. The service worker’s cache name is a hash of the build, so a new version replaces the old offline copy.',
          'npm run phone serves the app from the PC through a temporary Cloudflare tunnel and shows a QR code. Scan it, install, and the app keeps working offline after the link closes.',
          'Progress lives on the device. A copyable progress code moves it to a phone or a new install.',
        ],
      },
    ],
    outcome: [
      'A complete visual study tool covering all of Blind 75, NeetCode essentials and Cracking the Coding Interview problems: 199 problems in 19 patterns.',
      'Every trace is tested on every input, and every on-screen solution is verified in Python, so learners can trust each step they are shown.',
      'Practice goes beyond watching: prediction quizzes, recall, timed pattern drills and spaced repetition, on a laptop or offline on a phone.',
    ],
  },

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
