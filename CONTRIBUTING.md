# Contributing Guide

Thank you for contributing.

## Workflow

1. Fork the repository and create a branch.
2. Make focused changes with clear commit messages.
3. Run checks locally before opening a pull request.
4. Open a PR with a clear summary and testing notes.

## Branch Naming

Use descriptive branch names:

- `feature/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`

## Local Setup

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm --prefix app run lint
npm run build
```

## Pull Request Checklist

- Changes are scoped and relevant
- Documentation is updated when needed
- No secrets or private credentials are committed
- Media changes are intentional and optimized when possible

## Commit Message Style

Use imperative present tense, for example:

- `Add project card animations`
- `Fix resume route rendering`
- `Update deployment documentation`
