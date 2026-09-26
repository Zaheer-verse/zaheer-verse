from pathlib import Path

readme = r'''<div align="center">

<!-- Premium terminal-style hero -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./light.svg">
  <img src="./dark.svg" width="100%" alt="Zaheer Yousaf — Computer Science Student, IoT Developer, Web Developer and AI Developer Tools Builder">
</picture>

<br/>

<a href="https://zaheer-verse.vercel.app/">
  <img src="https://img.shields.io/badge/Portfolio-0B3D91?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio">
</a>
<a href="https://www.linkedin.com/in/zaheer-yousaf">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>
<a href="https://github.com/Zaheer-verse">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="mailto:zaheery991@gmail.com">
  <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
</a>

</div>

---

## `SYSTEM.INFO`

```text
> NAME        Zaheer Yousaf
> ROLE        Computer Science Student · IoT Developer · Web Developer
> LOCATION    Daska, Sialkot, Pakistan
> EDUCATION   BS Computer Science — University of Sialkot
> FOCUS       IoT · AI Developer Tools · Web Engineering · EV & Energy Research
> BUILDING    Practical systems that connect software, hardware, automation, and research
```

I’m a **BS Computer Science student at the University of Sialkot** working across web development, IoT, embedded systems, AI-assisted software engineering, and research-driven technical projects.

My work usually sits between two worlds: **software that runs on the screen** and **systems that interact with the physical world**. I enjoy taking an idea from the first rough concept to something I can explain, test, demonstrate, and improve.

More recently, I’ve also been exploring **AI coding-agent workflows** — especially systems that make agents clarify requirements, split work into smaller tasks, write tests before implementation, use isolated Git worktrees, and verify the result before calling it complete.

---

## `CURRENT.FOCUS`

```text
[01] IoT & Embedded Systems
[02] AI Coding Agents & Developer Workflows
[03] React / TypeScript Web Applications
[04] EV Wireless Charging & Road Energy Harvesting
[05] Distributed Systems, Cloud & Cybersecurity
```

I prefer building projects with a clear purpose, understandable architecture, and enough structure that I can explain **why it exists, how it works, where it can fail, and how I would test it**.

---

## `ENGINEERING.STACK`

### Languages

<p>
  <img src="https://skillicons.dev/icons?i=c,cpp,python,js,ts,html,css&theme=dark" alt="C, C++, Python, JavaScript, TypeScript, HTML, CSS">
</p>

`C` `C++` `Python` `JavaScript` `TypeScript` `HTML` `CSS`

### Frontend & Web

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,nodejs&theme=dark" alt="React, Vite, Tailwind CSS, Node.js">
</p>

`React` `Vite` `Tailwind CSS` `Node.js` `Responsive UI`

### Databases & Development Tools

<p>
  <img src="https://skillicons.dev/icons?i=mongodb,mysql,git,github,vscode,vercel&theme=dark" alt="MongoDB, MySQL, Git, GitHub, VS Code, Vercel">
</p>

`MongoDB` `MySQL` `Git` `GitHub` `VS Code` `Vercel`

### Embedded & IoT

`ESP8266` `NodeMCU` `Arduino` `Blynk` `TCRT5000` `Sensor Integration` `Relay Control`

### Engineering Workflow

`Test-Driven Development` `Git Worktrees` `QA` `Security Review` `AI Agent Skills` `LaTeX` `Overleaf`

---

## `FEATURED.PROJECTS`

### `01 / Eye-Blink Smart Home`

<img width="100%" src="https://raw.githubusercontent.com/Zaheer-verse/zaheer-verse/main/app/public/smart-home-hero.svg" alt="Eye Blink Smart Home hero graphic">

A hands-free smart-home system where intentional eye blinks act as controls for connected appliances. Infrared sensors detect blink input, a **NodeMCU ESP8266** processes the interaction, relays control appliances, and **Blynk** provides optional remote monitoring.

The project is designed around assistive interaction and local hardware control, so the core system can continue operating without depending entirely on cloud connectivity.

`ESP8266` `NodeMCU` `Arduino` `C++` `TCRT5000` `Relay Control` `Blynk`

---

### `02 / EV Energy Harvesting`

<img width="100%" src="https://raw.githubusercontent.com/Zaheer-verse/zaheer-verse/main/app/public/ev-harvesting-hero.svg" alt="EV Energy Harvesting hero graphic">

A research concept combining **dynamic wireless EV charging** with road-based energy harvesting.

The design explores resonant inductive charging coils embedded in the road while also studying how road heat and vibration could be harvested through **thermoelectric generators** and **piezoelectric elements**.

<details>
<summary><strong>View architecture</strong></summary>

```mermaid
flowchart LR
    subgraph Charging
        A[Grid] --> B[Inverter] --> C[Road Coils]
        C -->|Wireless Power| D[Vehicle Coil] --> E[Battery]
    end

    subgraph Harvesting
        F[Road Heat] --> G[Thermoelectric]
        H[Vibration] --> I[Piezoelectric]
        G --> J[MPPT + Sensor Node]
        I --> J
    end
```

</details>

`EV Systems` `Wireless Power` `Resonant Coupling` `Thermoelectric` `Piezoelectric` `LaTeX`

---

### `03 / Expense Management System`

<img width="100%" src="https://raw.githubusercontent.com/Zaheer-verse/zaheer-verse/main/app/public/expense-management-hero.svg" alt="Expense Management System hero graphic">

A responsive personal-finance dashboard built with **React and TypeScript** for managing categorized transactions, budgets, monthly summaries, and visual spending insights.

The project focuses on practical usability, clean CRUD workflows, and readable financial information instead of unnecessary feature overload.

`React` `TypeScript` `Dashboard UI` `Charts` `CRUD` `Responsive Design`

**Repository:** [Zaheer-verse/expense-management-system](https://github.com/Zaheer-verse/expense-management-system)

---

### `04 / DesignForge`

<img width="100%" src="https://raw.githubusercontent.com/Zaheer-verse/zaheer-verse/main/app/public/designforge-hero.svg" alt="DesignForge hero graphic">

An open-source workflow skill for AI coding agents that pushes the agent to understand the product before immediately writing code.

It guides the agent through discovery, content hierarchy, visual-system planning, implementation, responsiveness, accessibility checks, and deployment-readiness review.

<details>
<summary><strong>View workflow</strong></summary>

```mermaid
flowchart LR
    A[Idea] --> B[Discovery]
    B --> C[Content Hierarchy]
    C --> D[Visual System]
    D --> E[Build]
    E --> F[Responsive + A11y QA]
    F --> G[Ship]
```

</details>

`AI Agents` `UI/UX` `Accessibility` `Python` `Open Source`

**Repository:** [Zaheer-verse/DesignForge](https://github.com/Zaheer-verse/DesignForge)

---

### `05 / Deliberate Dev · Codex`

<img width="100%" src="https://raw.githubusercontent.com/Zaheer-verse/zaheer-verse/main/app/public/deliberate-codex-hero.svg" alt="Deliberate Dev Codex hero graphic">

A structured software-delivery workflow for Codex that turns a large feature request into a deliberate engineering pipeline.

It clarifies the request, defines smaller tasks and acceptance criteria, writes failing tests before implementation, isolates work using Git worktrees, reviews the result for correctness and security, and requires execution evidence before completion.

<details>
<summary><strong>View pipeline</strong></summary>

```mermaid
flowchart LR
    A[Idea] --> B[Discovery]
    B --> C[Requirements + Tasks]
    C --> D[Failing Test]
    D --> E[Isolated Worktree]
    E --> F[Implementation]
    F --> G[Review]
    G --> H[Verified Delivery]
```

</details>

`Codex` `Python` `TDD` `Git Worktrees` `QA` `Security`

**Repository:** [Zaheer-verse/deliberate-dev-codex](https://github.com/Zaheer-verse/deliberate-dev-codex)

---

### `06 / Deliberate Dev · Claude Code`

<img width="100%" src="https://raw.githubusercontent.com/Zaheer-verse/zaheer-verse/main/app/public/deliberate-claude-hero.svg" alt="Deliberate Dev Claude Code hero graphic">

A Claude Code plugin that applies the same structured engineering discipline through a coordinated workflow and specialized skills.

It moves a task through discovery, planning, isolation, test-first implementation, review, integration, and verification while reporting blockers instead of silently skipping them.

<details>
<summary><strong>View workflow</strong></summary>

```mermaid
flowchart LR
    A[Discover] --> B[Understand]
    B --> C[Plan]
    C --> D[Isolate]
    D --> E[Test First]
    E --> F[Implement]
    F --> G[Review]
    G --> H[Integrate]
    H --> I[Verify]
```

</details>

`Claude Code` `AI Agents` `Python` `Git Worktrees` `TDD` `QA`

**Repository:** [Zaheer-verse/deliberate-dev-claude](https://github.com/Zaheer-verse/deliberate-dev-claude)

---

## `REPOSITORY.INDEX`

<div align="center">

<a href="https://github.com/Zaheer-verse/deliberate-dev-codex">
  <img height="150" src="https://github-readme-stats.vercel.app/api/pin/?username=Zaheer-verse&repo=deliberate-dev-codex&theme=tokyonight&hide_border=true" alt="deliberate-dev-codex repository card">
</a>

<a href="https://github.com/Zaheer-verse/deliberate-dev-claude">
  <img height="150" src="https://github-readme-stats.vercel.app/api/pin/?username=Zaheer-verse&repo=deliberate-dev-claude&theme=tokyonight&hide_border=true" alt="deliberate-dev-claude repository card">
</a>

<a href="https://github.com/Zaheer-verse/DesignForge">
  <img height="150" src="https://github-readme-stats.vercel.app/api/pin/?username=Zaheer-verse&repo=DesignForge&theme=tokyonight&hide_border=true" alt="DesignForge repository card">
</a>

<a href="https://github.com/Zaheer-verse/expense-management-system">
  <img height="150" src="https://github-readme-stats.vercel.app/api/pin/?username=Zaheer-verse&repo=expense-management-system&theme=tokyonight&hide_border=true" alt="Expense Management System repository card">
</a>

<a href="https://github.com/Zaheer-verse/zaheer-verse">
  <img height="150" src="https://github-readme-stats.vercel.app/api/pin/?username=Zaheer-verse&repo=zaheer-verse&theme=tokyonight&hide_border=true" alt="Zaheer Verse repository card">
</a>

<a href="https://github.com/Zaheer-verse/Zam-zam-pizza">
  <img height="150" src="https://github-readme-stats.vercel.app/api/pin/?username=Zaheer-verse&repo=Zam-zam-pizza&theme=tokyonight&hide_border=true" alt="Zam Zam Pizza repository card">
</a>

</div>

---

## `GITHUB.ACTIVITY`

<div align="center">

<img width="49%" src="https://github-readme-stats.vercel.app/api?username=Zaheer-verse&show_icons=true&hide_border=true&theme=tokyonight&include_all_commits=true&count_private=true" alt="Zaheer GitHub statistics">
<img width="49%" src="https://github-readme-streak-stats.herokuapp.com/?user=Zaheer-verse&theme=tokyonight&hide_border=true" alt="Zaheer GitHub contribution streak">

<br/><br/>

<img width="46%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Zaheer-verse&layout=compact&hide_border=true&theme=tokyonight&langs_count=8" alt="Zaheer most-used languages">

<br/><br/>

<img src="https://github-profile-trophy.vercel.app/?username=Zaheer-verse&theme=tokyonight&no-frame=true&row=1&column=7&margin-w=8" alt="Zaheer GitHub trophies">

</div>

---

## `LEARNING.LOG`

Right now I’m continuing to strengthen the areas that connect naturally with my projects:

`Distributed Systems` · `Cloud Infrastructure` · `Cybersecurity` · `AI-Assisted Development` · `Embedded Systems`

I also keep an eye on emerging areas such as blockchain when they connect to systems, infrastructure, or research problems I’m already exploring.

---

## `CONNECT`

```text
> PORTFOLIO   zaheer-verse.vercel.app
> GITHUB      github.com/Zaheer-verse
> LINKEDIN    linkedin.com/in/zaheer-yousaf
> EMAIL       zaheery991@gmail.com
```

<div align="center">

<a href="https://zaheer-verse.vercel.app/">
  <img src="https://img.shields.io/badge/Portfolio-111827?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio">
</a>
<a href="https://github.com/Zaheer-verse">
  <img src="https://img.shields.io/badge/GitHub-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://www.linkedin.com/in/zaheer-yousaf">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>
<a href="mailto:zaheery991@gmail.com">
  <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
</a>

<br/><br/>

*"Ideas become valuable when they survive the journey from imagination to implementation."*

</div>

---

<div align="center">

<sub>
Computer Science · IoT · Web Engineering · AI Developer Tools · Energy Research
</sub>

</div>
'''

out = Path("/mnt/data/Zaheer-GitHub-README.md")
out.write_text(readme, encoding="utf-8")
print(f"Created: {out}")
print(f"Lines: {len(readme.splitlines())}")
