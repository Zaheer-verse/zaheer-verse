export interface KeyValue {
  label: string;
  value: string;
}

export interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
}

export interface MediaItem {
  type: 'image' | 'video' | 'file';
  src: string;
  label: string;
}

export interface ProjectDetail {
  subtitle?: string;
  intro?: string[];
  objectives?: KeyValue[];
  keyFeatures?: string[];
  hardware?: string[];
  software?: string[];
  keywords?: string[];
  theory?: string[];
  deliverables?: string[];
  aims?: string[];
  literature?: string[];
  architecture?: string[];
  methods?: string[];
  metrics?: string[];
  prototypePlan?: string[];
  wiringSummary?: string[];
  limitations?: string[];
  conclusion?: string[];
  challenges?: string[];
  futureScope?: string[];
  notes?: string[];
  checklist?: string[];
  flowProcess?: string[];
  pinMapping?: TableRow[];
  powerSummary?: TableRow[];
  bom?: Array<{ item: string; qty: string; notes: string; cost: string }>;
  media?: MediaItem[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  video?: string;
  gradient: string;
  externalUrl?: string;
  githubUrl?: string;
  detail?: ProjectDetail;
}

export const projects: ProjectItem[] = [
  {
    slug: 'eye-blink-smart-home',
    title: 'Eye-Blink Smart Home',
    description: 'Smart home automation controlled by eye blinks',
    longDescription:
      'A modern and accessible smart-home solution using wearable eye-blink detection, relay control, and optional IoT integration through Blynk.',
    tags: ['Arduino', 'IoT', 'ESP8266', 'C++', 'Blynk'],
    image: '/smart-home-hero.svg',
    video: 'https://media.githubusercontent.com/media/Zaheer-verse/zaheer-verse/main/app/public/legacy/smarthome_demo.mp4',
    gradient: 'from-indigo-500 to-blue-600',
    detail: {
      subtitle: 'Smart Home Automation Using Eye-Blink Detection and IoT',
      intro: [
        'A reliable low-cost system that lets users control home appliances using intentional double eye-blinks.',
        'IR sensors are mounted on glasses to capture blink events and NodeMCU executes control logic.',
        'The project is designed for accessibility and can run in offline local mode as well as online IoT mode.',
      ],
      objectives: [
        {
          label: 'Problem Solved',
          value:
            'Provides hands-free home appliance control for users with limited mobility and motor impairment.',
        },
        {
          label: 'Who Benefits',
          value:
            'Disabled individuals, elderly users, and people who need reliable non-touch interaction.',
        },
        {
          label: 'Innovation',
          value:
            'Wearable dual-blink validation reduces false triggers and combines local reliability with cloud connectivity.',
        },
      ],
      keyFeatures: [
        'Dual-blink detection logic to prevent accidental switching',
        'Wearable IR input via glasses-mounted TCRT5000 sensors',
        'Blynk IoT integration for remote status and control',
        'Relay-driven appliance switching (fan, bulb, etc.)',
        'Audible feedback through buzzer confirmation',
        'Offline and online operation modes',
      ],
      hardware: [
        'TCRT5000 IR reflective sensors',
        'NodeMCU ESP8266',
        '1-channel 5V relay module',
        'Buzzer',
        'Breadboard and jumper wires',
        '5V regulated power supply',
        'Demo load (LED bulb)',
      ],
      software: [
        'Arduino IDE / PlatformIO',
        'Blynk IoT app and dashboard',
        'ESP8266 and Blynk libraries',
        'Optional VS Code and Git',
      ],
      flowProcess: [
        'Blink detected',
        'Double-blink validation inside blink window',
        'Toggle relay state',
        'Update Blynk and notify state',
      ],
      pinMapping: [
        { col1: 'IR Sensor (Left)', col2: 'D1', col3: 'eyeLeft' },
        { col1: 'IR Sensor (Right)', col2: 'D2', col3: 'eyeRight' },
        { col1: 'Relay IN', col2: 'D3', col3: 'relayPin' },
        { col1: 'Buzzer', col2: 'D4', col3: 'buzzerPin' },
      ],
      powerSummary: [
        { col1: 'ESP8266 (NodeMCU)', col2: 'USB (5V) / regulated 5V' },
        { col1: 'IR Sensors', col2: '3.3V or 5V depending on module' },
        { col1: 'Relay Module', col2: 'External 5V when required' },
        { col1: 'Buzzer', col2: 'External 5V or transistor-driven' },
        { col1: 'LED Bulb (load)', col2: 'Mains via relay COM/NO' },
      ],
      checklist: [
        'Mount and secure sensors on glasses',
        'Tune TCRT5000 sensitivity with potentiometer',
        'Adjust BLINK_WINDOW around 300-900ms',
        'Upload NodeMCU sketch after adding Wi-Fi/Blynk credentials',
      ],
      challenges: [
        'False triggers solved by deliberate dual-blink debouncing',
        'Ambient light/noise handled through sensor alignment and calibration',
        'IoT outages handled by keeping core control logic available offline',
      ],
      futureScope: [
        'Voice assistant integration with blink hybrid control',
        'Gesture expansion using IMU/camera signals',
        'Larger smart-home deployment with secure OTA updates and logs',
      ],
      notes: [
        'Safety note: keep low-voltage control isolated from mains wiring.',
      ],
      media: [
        { type: 'image', src: '/legacy/smarthome.png', label: 'Smart Home Prototype' },
        { type: 'image', src: '/legacy/projectsnap.PNG', label: 'Circuit Snapshot' },
        {
          type: 'video',
          src: 'https://media.githubusercontent.com/media/Zaheer-verse/zaheer-verse/main/app/public/legacy/smarthome_demo.mp4',
          label: 'Smart Home Demo Video'
        },
        { type: 'file', src: '/legacy/smarthome.ino', label: 'NodeMCU Sketch (.ino)' },
      ],
    },
  },
  {
    slug: 'ev-energy-harvesting',
    title: 'EV Energy Harvesting',
    description: 'Wireless charging and energy-harvesting concept for EVs',
    longDescription:
      'A research-focused EV infrastructure concept that combines dynamic resonant wireless charging with roadside thermal and vibration energy harvesting.',
    tags: ['Research', 'Electronics', 'IoT', 'EV', 'LaTeX'],
    image: '/ev-harvesting-hero.svg',
    gradient: 'from-emerald-500 to-teal-600',
    detail: {
      subtitle: 'Wireless Charging and Road Energy Harvesting for EVs (In-Process Article)',
      intro: [
        'The project develops a hybrid on-road charging ecosystem combining dynamic resonant inductive transfer with thermoelectric and vibration harvesting.',
        'Objective: reduce onboard battery dependency through opportunistic top-ups and power roadside electronics from harvested energy.',
      ],
      keywords: [
        'Wireless power transfer',
        'Resonant inductive charging',
        'Thermoelectric generator',
        'Piezoelectric harvesting',
        'Road-embedded coils',
        'SAE J2954',
      ],
      objectives: [
        {
          label: 'Problem',
          value:
            'Range anxiety, large battery mass, and limited charging infrastructure slow EV adoption.',
        },
        {
          label: 'Solution',
          value:
            'Embed resonant coils in high-utilization lanes and harvest road heat/vibration to support infrastructure.',
        },
        {
          label: 'Impact',
          value:
            'Reduced battery requirement, continuous partial charging, and self-powered intelligent infrastructure nodes.',
        },
      ],
      deliverables: [
        'System block diagrams and coil topology visuals',
        'Bench static pad prototype and test graphs',
        'BOM and bench wiring snippets',
        'Simulation results for coupling and efficiency',
        'Data logs with poster and slide deck',
      ],
      aims: [
        'Validate resonant inductive transfer under varying gap/alignment',
        'Integrate TEG and vibration harvesters for control node power',
        'Model deployment scale-up and corridor economics',
      ],
      literature: [
        'Dynamic road charging pilots and lessons',
        'SAE J2954 standards and interoperability baseline',
        'Thermoelectric harvesting constraints',
        'Vibration harvesting for low-power sensor loads',
      ],
      theory: [
        'Coupling coefficient: k = M / sqrt(L1 * L2)',
        'Resonant frequency: f0 = 1 / (2 * pi * sqrt(L * C))',
        'Practical efficiency: eta = (P_delivered_to_battery / P_grid) * 100%',
        'Q-factor and detuning effects must be evaluated for real road conditions',
      ],
      architecture: [
        'Grid -> rectifier -> DC link -> inverter -> segmented ground coils',
        'Vehicle receiver -> rectifier -> DC-DC -> battery interface',
        'Auxiliary harvesters -> MPPT -> buffer -> sensors/control',
        'Communication and metering for authentication/billing',
      ],
      methods: [
        'Electromagnetic/FEM simulation for coupling and leakage',
        'Bench-scale transmitter/receiver resonant prototype',
        'TEG and piezo integration with MPPT evaluation',
        'Data logging using power analyzer, oscilloscope, gaussmeter, and thermal logs',
      ],
      metrics: [
        'Delivered energy per pass (kWh/pass)',
        'Average power and duty cycle',
        'End-to-end efficiency for gap/offset variations',
        'Auxiliary harvested energy (Wh/day)',
        'Leakage field levels relative to safety thresholds',
      ],
      prototypePlan: [
        'Phase 0: Standards and research collection',
        'Phase 1: Coil design and simulation',
        'Phase 2: Static bench prototype and resonance tuning',
        'Phase 3: TEG/piezo integration and buffer validation',
        'Phase 4: Data collection and analysis',
        'Phase 5: Modular field test lane proposal',
      ],
      wiringSummary: [
        'Grid -> isolation transformer -> rectifier -> DC link -> inverter -> transmitter coil',
        'Receiver coil -> rectifier -> DC-DC -> programmable load/battery emulator',
        'TEG/piezo -> MPPT -> supercap/battery -> sensor node and telemetry',
      ],
      limitations: [
        'Auxiliary harvesters have low power density',
        'Road-integrated infrastructure faces durability and maintenance issues',
        'Civil and deployment costs are significant and need strong feasibility planning',
      ],
      conclusion: [
        'Hybridizing dynamic inductive charging with roadside harvesters offers a layered path to electrified roads.',
        'It enables high-power top-ups for EVs while powering low-power intelligence for road infrastructure.',
      ],
      futureScope: [
        'Long-term thermal cycling and durability validation',
        'Integration with renewable microgrids',
        'Roaming and billing framework standardization',
      ],
      bom: [
        { item: 'Copper wire (Litz/enamel)', qty: '50m', notes: 'Coil winding', cost: '$40' },
        { item: 'Ferrite backing', qty: '2', notes: 'Shielding', cost: '$60' },
        { item: 'Full-bridge inverter kit', qty: '1', notes: 'Drivers + heatsink', cost: '$150' },
        { item: 'Resonant capacitors', qty: '4', notes: 'High voltage', cost: '$30' },
        { item: 'Receiver rectifier', qty: '1', notes: 'Output conditioning', cost: '$15' },
        { item: 'DC-DC converter', qty: '1', notes: 'Battery emulator', cost: '$80' },
        { item: 'TEG modules', qty: '4', notes: 'Heat harvesting', cost: '$40' },
        { item: 'Piezo transducers', qty: '4', notes: 'Vibration harvesting', cost: '$30' },
      ],
      notes: [
        'Estimated bench budget from ZIP material: approximately $600-$1200 before local conversion.',
      ],
      media: [
        { type: 'image', src: '/legacy/ev.png', label: 'EV Energy Harvesting Concept Visual' },
      ],
    },
  },
  {
    slug: 'expense-management-system',
    title: 'Expense Management System',
    description: 'Track budgets, expenses, and monthly financial insights',
    longDescription:
      'A complete expense management app with categorized transactions, budget tracking, monthly summaries, and clear reporting.',
    tags: ['React', 'TypeScript', 'Dashboard', 'Charts', 'CRUD'],
    image: '/expense-management-hero.svg',
    gradient: 'from-amber-500 to-orange-600',
    externalUrl: 'https://expencemanagment.vercel.app/',
    githubUrl: 'https://github.com/Zaheer-verse/expense-management-system',
  },
  {
    slug: 'designforge',
    title: 'DesignForge',
    description: 'A design-engineering skill for AI coding agents',
    longDescription: 'An open-source workflow that takes web interface work from product discovery and visual direction through implementation, responsive QA, and accessibility review.',
    tags: ['AI Skills', 'UI/UX', 'Accessibility', 'Open Source'],
    image: '/designforge-hero.svg',
    gradient: 'from-violet-500 to-fuchsia-600',
    githubUrl: 'https://github.com/Zaheer-verse/DesignForge',
    detail: {
      subtitle: 'Product Design Discipline for AI-Assisted Frontend Work',
      intro: [
        'DesignForge gives coding agents a structured way to make interface decisions before writing frontend code. It connects the audience, product goal, content hierarchy, and technical constraints to a coherent visual direction.',
        'The repository combines a primary skill, specialist references, planning templates, examples, and validation scripts. It is a workflow and reference collection, not a UI component library.',
      ],
      objectives: [
        { label: 'Problem', value: 'Generated interfaces can look convincing while missing usability, responsive behavior, and accessible interactions.' },
        { label: 'Audience', value: 'Developers and designers using AI agents to build or improve web products.' },
        { label: 'Approach', value: 'Connect product reasoning to implementation and make quality review part of the delivery process.' },
      ],
      keyFeatures: ['Discovery and content hierarchy before visual effects', 'Typography, color, spacing, component states, and motion guidance', 'Mobile-first layouts and responsive QA', 'Keyboard navigation, focus visibility, contrast, and reduced-motion checks', 'Performance, security, and deployment-readiness review', 'Reusable templates and realistic workflow examples'],
      software: ['Skill-aware AI coding agent', 'Markdown skills and reference documentation', 'Python repository validation and tests', 'The target project’s existing frontend stack'],
      architecture: ['SKILL.md provides the main workflow', 'References supply detailed design and engineering guidance', 'Templates capture plans and review evidence', 'Examples and validation scripts support repeatable use'],
      flowProcess: ['Understand the product and audience', 'Define a visual system', 'Implement in the existing stack', 'Verify responsive and keyboard behavior', 'Review quality and delivery readiness'],
      deliverables: ['A reusable design-engineering skill', 'Design, motion, accessibility, and QA references', 'Planning and review templates', 'Repository validation scripts and tests'],
      limitations: ['The agent must have the tools needed to implement and verify the interface.', 'Guidance does not guarantee design quality or replace human review for brand-critical work.'],
      checklist: ['Open the GitHub repository and read the installation guide', 'Keep the skill directory and its supporting resources together', 'Invoke DesignForge with the product goal, audience, and project context', 'Review the resulting interface on mobile, desktop, and keyboard input'],
      conclusion: ['DesignForge makes design reasoning and verification explicit, helping an AI agent work toward an interface that is both distinctive and usable.'],
    },
  },
  {
    slug: 'deliberate-dev-codex',
    title: 'Deliberate Dev · Codex',
    description: 'From a rough idea to tested, reviewed software',
    longDescription: 'A Codex plugin with six coordinated skills and local Python helpers for discovery, task planning, test-first implementation, isolated Git worktrees, and reviewed delivery.',
    tags: ['Codex', 'Python', 'TDD', 'Git Worktrees'],
    image: '/deliberate-codex-hero.svg',
    gradient: 'from-cyan-500 to-blue-600',
    githubUrl: 'https://github.com/Zaheer-verse/deliberate-dev-codex',
    detail: {
      subtitle: 'A Structured Software-Delivery Workflow for Codex',
      intro: ['Deliberate Dev helps a coding agent understand what the user needs before implementation. It turns the brief into small tasks with acceptance criteria, dependencies, owned files, and test commands.', 'Six skills coordinate architecture, development, QA, and security responsibilities. Local Python helpers check workflow records and plan or create a separate Git worktree for each implementation task.'],
      objectives: [
        { label: 'Problem', value: 'Unclear requirements, overlapping changes, and incomplete verification make agent-led coding difficult to review.' },
        { label: 'Audience', value: 'Codex users building features, fixing defects, or developing software from an early idea.' },
        { label: 'Approach', value: 'Clarify intent, isolate tasks, write behavioral tests first, and review the integrated result.' },
      ],
      keyFeatures: ['Focused what, why, and who discovery', 'Small tasks mapped to observable acceptance criteria', 'Failing behavioral tests before implementation', 'Separate branches and worktrees with pinned baselines', 'Correctness, security, and quality review', 'A final integration gate backed by actual execution evidence'],
      software: ['Codex with plugin support', 'Python 3.10+ using the standard library', 'Git 2.36+ and a committed repository baseline', 'The project’s own test tools'],
      architecture: ['A Codex plugin manifest and repository marketplace catalog', 'Six skills covering the full development workflow', 'workflow.py validates plan and completion records', 'worktrees.py plans or creates isolated task checkouts', 'Brief, task, and review templates support evidence collection'],
      flowProcess: ['Clarify the request', 'Plan tasks and acceptance criteria', 'Create an isolated worktree', 'Observe a failing test', 'Implement and run regression checks', 'Review the task', 'Integrate and verify the complete result'],
      methods: ['Behavioral and integration tests use disposable local repositories.', 'CI checks the suite on Windows and Ubuntu with Python 3.10 and 3.12.', 'Package checks verify skill discovery, templates, and internal resource links.'],
      deliverables: ['Installable Codex plugin and marketplace catalog', 'Six skills and two Python helpers', 'Templates, an example plan, and tests', 'Versioned release ZIPs and installation documentation'],
      limitations: ['Workflow records validate consistency, not the truth of claimed execution. They must be checked against real command output.', 'Independent review depends on available subagents; sequential role passes are self-review.', 'The plugin cannot enforce every host action or guarantee secure application code.'],
      checklist: ['Add Zaheer-verse/deliberate-dev-codex as a Codex marketplace', 'Install deliberate-dev@deliberate-dev-codex', 'Start a new task in your software project', 'Ask Codex to use $deliberate-dev with your idea'],
      conclusion: ['A reusable process for making agent-led software work easier to understand, test, and review.'],
    },
  },
  {
    slug: 'deliberate-dev-claude',
    title: 'Deliberate Dev · Claude',
    description: 'A complete engineering workflow for Claude Code',
    longDescription: 'The Claude Code edition of Deliberate Dev packages the same six-skill process with a native plugin manifest, namespaced commands, and a GitHub marketplace.',
    tags: ['Claude Code', 'AI Agents', 'Python', 'TDD'],
    image: '/deliberate-claude-hero.svg',
    gradient: 'from-orange-500 to-rose-600',
    githubUrl: 'https://github.com/Zaheer-verse/deliberate-dev-claude',
    detail: {
      subtitle: 'Discovery, Test-First Implementation, and Review in Claude Code',
      intro: ['This edition brings Deliberate Dev’s development process to Claude Code through its native plugin structure. One main command coordinates the six skills from discovery through final verification.', 'Developers can install it from the repository marketplace or load an extracted copy for a local session. Its Python helpers use Git and the standard library without a separate hosted service.'],
      objectives: [
        { label: 'Problem', value: 'A coding agent needs shared context and reviewable steps to turn a vague request into reliable implementation work.' },
        { label: 'Audience', value: 'Claude Code users who want requirements, tests, task isolation, and reviews in one process.' },
        { label: 'Approach', value: 'Use a native Claude Code plugin to coordinate the same evidence-based workflow across all six skills.' },
      ],
      keyFeatures: ['A main command that coordinates all six skills', 'Individual namespaced skill commands for focused tasks', 'Repository marketplace installation or session-only local loading', 'Test-first task execution in separate Git worktrees', 'Review of both individual changes and their integration', 'Explicit blockers when required tests or tools are unavailable'],
      software: ['Claude Code with plugin support', 'Python 3.10+', 'Git 2.36+ with a committed baseline', 'Project-specific test and build tools'],
      architecture: ['.claude-plugin/plugin.json defines the native plugin', 'The marketplace catalog exposes the plugin from GitHub', 'Skills reference bundled templates and helper scripts', 'A coordinator owns the workflow record while tasks report their results'],
      flowProcess: ['Load the plugin in Claude Code', 'Clarify what, why, and who', 'Plan small tasks', 'Write tests inside separate worktrees', 'Implement and review each change', 'Integrate reviewed revisions and verify delivery'],
      methods: ['Behavioral and integration checks run against temporary repositories.', 'CI exercises Windows and Ubuntu with Python 3.10 and 3.12.', 'Claude plugin and marketplace validation check native packaging.'],
      deliverables: ['Native Claude Code plugin', 'Six skills, templates, and local helpers', 'Public source, installation guide, and release archives'],
      limitations: ['The plugin provides instructions and evidence checks, not enforcement of every agent action.', 'Independent reviewers require subagent support; otherwise review is disclosed self-review.', 'Git, test tools, and appropriate host permissions are required for the complete workflow.'],
      checklist: ['Run /plugin marketplace add Zaheer-verse/deliberate-dev-claude inside Claude Code', 'Run /plugin install deliberate-dev@deliberate-dev-claude', 'Start a new session in your project', 'Invoke /deliberate-dev:deliberate-dev followed by your request'],
      conclusion: ['The same deliberate development process, packaged for the Claude Code workflow and ready to explore from GitHub.'],
    },
  },
];

export const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
