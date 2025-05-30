# Samuel Lee Personal Portfolio

A minimalist HTML portfolio site deployed on Vercel.

## Local Development

This project includes a Makefile to simplify viewing and serving the site locally:

```bash
# Open site.html in your default browser
make open

# Start a local server at http://localhost:3000
make serve

# Open the site and serve it locally
make view

# Show all available commands
make help
```

## Deployment

The site is configured to deploy on Vercel with a simple configuration:

- `site.html` - Contains all the content and styling for the portfolio
- `vercel.json` - Configures Vercel to serve the single HTML file for all routes

## Customization

To update the portfolio, simply edit the `site.html` file directly.

## Performance
- Lighthouse performance [link](https://pagespeed.web.dev/analysis/https-www-leesamuel423-com/0ui50is05r?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext)

![Lighthouse-Score](./lighthouse-score.png)
