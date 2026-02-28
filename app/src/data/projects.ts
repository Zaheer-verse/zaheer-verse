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
    video: '/legacy/smarthome_demo.mp4',
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
        { type: 'video', src: '/legacy/smarthome_demo.mp4', label: 'Smart Home Demo Video' },
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
  },
];

export const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
