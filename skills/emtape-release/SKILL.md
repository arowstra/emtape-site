---
name: emtape-release
description: Use when working on EMTape publishing, deployment, GitHub pushes, or Cloudflare verification. Covers how this repo is wired to GitHub and Cloudflare Pages, which branch is used, how to validate builds, and the current Cloudflare deployment mismatch to watch for.
---

# EMTape Release

Use this skill for any task that involves:

- pushing code for EMTape
- checking GitHub branch or remote setup
- verifying production builds
- checking Cloudflare Pages or Workers & Pages deployment status
- figuring out why a pushed change did not reach production

## Project Facts

- Repo root: `C:\Users\HP\Documents\EmTape`
- Git remote: `origin = https://github.com/arowstra/emtape-site.git`
- Active publish branch: `master`
- Framework: Next.js 16 App Router
- Static export is enabled in [next.config.ts](/abs/path/C:/Users/HP/Documents/EmTape/next.config.ts)
- Production build output directory: `out/`

## How The Pieces Connect

1. Code is edited in this repo.
2. Local validation should use `npm run lint` and `npm run build`.
3. `npm run build` runs `next build`.
4. Because `output: "export"` is enabled, Next writes the deployable static site to `out/`.
5. GitHub is the source of truth for code history and Cloudflare pulls from the GitHub repo.
6. Cloudflare project name is `emtape-site` under Workers & Pages.

## GitHub Setup

- Pushes currently go directly to `origin/master`.
- Before pushing, run:
  - `git status -sb`
  - `npm run lint`
  - `npm run build`
- After pushing, confirm:
  - `git log -1 --oneline --decorate`
  - `git ls-remote origin refs/heads/master`

If the working tree contains only the intended changes, the normal publish flow is:

```powershell
git add <files>
git commit -m "<short message>"
git push origin master
```

## Cloudflare Setup

- Cloudflare is managed from the dashboard, not from a repo `wrangler.toml`.
- The repo does not contain Cloudflare config files.
- The Cloudflare project is `emtape-site`.
- The current dashboard path is under `Workers & Pages -> emtape-site`.
- Cloudflare login in this environment is available through GitHub sign-in.

## Important Mismatch

Cloudflare currently shows a deployment configuration mismatch:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Repo reality: this project is a static export with no Wrangler config in the repo

That means a GitHub push may succeed while Cloudflare deployment still fails. If production does not update, check the latest deployment first before assuming the code push failed.

## Verify A Release

When asked to verify a release, do this in order:

1. Confirm local branch and remote:
   - `git status -sb`
   - `git log -1 --oneline --decorate`
2. Confirm the code builds locally:
   - `npm run lint`
   - `npm run build`
3. Confirm `out/` was regenerated.
4. Confirm the pushed commit exists on `origin/master`.
5. Open Cloudflare dashboard and inspect `Workers & Pages -> emtape-site -> Deployments`.
6. If Cloudflare shows a failed build, inspect the build settings and logs before changing app code.

## Cloudflare Failure Triage

If Cloudflare did not publish the latest push:

1. Open the latest deployment in `Workers & Pages -> emtape-site -> Deployments`.
2. Check whether the newest commit SHA is present.
3. Check build settings shown in the deployment.
4. Compare them to repo reality:
   - no `wrangler.toml`
   - static export enabled
   - deployable output is `out/`
5. If Cloudflare is still trying `npx wrangler deploy`, treat that as an infra/config issue, not an app-code issue.

## Notes For Future Agents

- Do not assume Vercel defaults. This site is exported statically.
- Do not assume Wrangler is part of the intended release flow just because Cloudflare currently shows it.
- Read the local Next docs in `node_modules/next/dist/docs/` before making framework changes, per [AGENTS.md](/abs/path/C:/Users/HP/Documents/EmTape/AGENTS.md).
- If local `npm run lint` or `npm run build` fail because the install is broken, repair dependencies with `npm ci` before diagnosing app code.
