# EMTape Deployment Checklist

Use this when you need the fastest possible confirmation path.

## Local

- `git status -sb`
- `npm run lint`
- `npm run build`
- Check that `out/` exists and has fresh timestamps

## GitHub

- `git log -1 --oneline --decorate`
- `git ls-remote origin refs/heads/master`
- Remote should be `https://github.com/arowstra/emtape-site.git`

## Cloudflare

- Open dashboard
- Go to `Workers & Pages`
- Open project `emtape-site`
- Open `Deployments`
- Check whether the latest deployment includes the pushed commit
- If build fails, inspect build settings and logs

## Known Cloudflare Build Values

- Build command: `npm run build`
- Current deploy command shown in dashboard: `npx wrangler deploy`
- Root directory: `/`
- Build variables: `None`

## Expected Repo Values

- Static export enabled in `next.config.ts`
- Output folder is `out/`
- No Wrangler config file is present in the repo
