# FAYFA Web Presence

## Deploy To GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### What is already configured

1. Workflow file: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
2. Custom domain file: [public/CNAME](public/CNAME)
3. BrowserRouter fallback: the workflow copies `dist/index.html` to `dist/404.html` during build

### Publish steps

1. Push changes to the `main` branch.
2. Go to GitHub repo Settings > Pages.
3. Set Source to GitHub Actions.
4. Wait for the Deploy to GitHub Pages workflow run to finish.

### Custom domain

The custom domain is set to `repuestosfayfa.com` via [public/CNAME](public/CNAME).

After deployment, verify DNS records point to GitHub Pages, then enable HTTPS in GitHub Pages settings.

### Local build check

Run:

```bash
npm run build
```

If it succeeds, the project is ready for deployment.
