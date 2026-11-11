# Cloudflare deployment

The public website is a static site. `index.php` only includes `index.html` and
is not needed on Cloudflare Pages.

- GitHub: `leaveanest/functions`, production branch `main`
- Cloudflare Pages project: `functions-lk`
- Hosting account: `ask@k.lne.st` (`dd4e70f6e77582fb6206a57ea20c0642`)
- Build command: `python3 build_cloudflare.py`
- Build output directory: `dist`
- Production domain: `functions.lne.st`
- DNS zone `lne.st`: managed separately in `info@lne.st`'s account

`build_cloudflare.py` copies the public HTML, CSS, JavaScript and assets only.
It excludes PHP, Composer files, editor settings, development notes and Git
metadata. It preserves the existing static content and Google Tag Manager.
The previous `/index.php` entry point redirects to `/`; unknown routes return
404 rather than the homepage.

For manual deployment after a build, select the verified `ask@k.lne.st`
Wrangler profile and deploy `dist` to project `functions-lk`, branch `main`.

The previous Heroku DNS target was
`shaped-fox-r87j5k732aav677kqzm82d00.herokudns.com` (proxied, automatic TTL).
Keep the Heroku app available until the Cloudflare deployment and domain are
verified. The DNS zone must stay in the `info@lne.st` account.
