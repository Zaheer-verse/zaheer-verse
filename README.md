# Zaheer Verse Portfolio

A production-ready personal portfolio and project showcase built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Highlights

- Modern single-page portfolio with animated sections
- Dedicated project detail routes (`/projects/:slug`)
- Dedicated resume route (`/resume`)
- Rich media support (images and videos)
- Legacy project artifacts preserved under `app/public/legacy`
- Git LFS configured for large media files

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Repository Structure

```text
.
|- app/
|  |- src/                 # React source code
|  |- public/legacy/       # Legacy media + static assets
|  |- dist/                # Build output
|  |- package.json
|- package.json            # Root runner scripts
|- .gitattributes          # Git LFS tracking
```

## Local Development

Prerequisites:

- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment (Vercel)

Recommended Vercel settings:

- Framework Preset: `Vite`
- Root Directory: `app`
- Build Command: `npm run build`
- Output Directory: `dist`

If you import this repository in Vercel, set the project root to `app`.

## Media and Git LFS

Large video files are tracked with Git LFS (`*.mp4`, `*.mov`, `*.webm`, `*.mkv`).

Clone with LFS support:

```bash
git lfs install
git lfs pull
```

## Documentation

- [ABOUT.md](ABOUT.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [SECURITY.md](SECURITY.md)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
